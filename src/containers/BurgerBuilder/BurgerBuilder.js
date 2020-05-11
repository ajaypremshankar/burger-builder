import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
            totalPrice: 4
        }
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

        console.log(this.state.totalPrice)
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
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;