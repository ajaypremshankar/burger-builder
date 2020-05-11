import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(inKey => {
            return [...Array(props.ingredients[inKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={inKey + i} type={inKey} />
                })
        })
        .reduce((arr, ele) => {
            return arr.concat(ele)
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default burger;