import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    updatePurchasableState(updatedIngredients) {
        const sum = Object.keys(updatedIngredients)
            .map(igKey => updatedIngredients[igKey])
            .reduce((sum, el) => sum + el, 0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients}
        let count = ingredients[type]

        if (count >= 0) {
            count = count + 1
        }

        ingredients[type] = count

        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            ...this.state,
            ingredients,
            totalPrice
        })

        this.updatePurchasableState(ingredients)
    }

    removeIngredientHandler = (type) => {
        const ingredients = {...this.state.ingredients}
        let count = ingredients[type]

        if (count > 0) {
            count = count - 1
            const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            ingredients[type] = count

            this.setState({
                ...this.state,
                ingredients,
                totalPrice
            })
        }

        this.updatePurchasableState(ingredients)
    }

    orderNowClickHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelledHandler = () => {
        this.setState({purchasing: false})
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    clicked={this.purchaseCancelledHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseContinueClick={this.purchaseCancelledHandler}
                        purchaseCancelledClick={this.purchaseCancelledHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    added={this.addIngredientHandler}
                    removed={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordering={this.orderNowClickHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;