import React from 'react'
import Aux from "../../hoc/Aux";
import Button from '../../components/UI/Button/Button'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            )
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your delicious order with ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue with Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelledClick}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinueClick}>Continue</Button>
        </Aux>
    )
}

export default orderSummary