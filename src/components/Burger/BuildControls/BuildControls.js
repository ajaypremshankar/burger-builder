import React from "react";
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'},

    ]

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.type}
                    label={ctrl.label}
                    added={() => props.added(ctrl.type)}
                    removed={() => props.removed(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            })}

            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordering}
            >ORDER NOW</button>
        </div>
    )
}

export default buildControls;