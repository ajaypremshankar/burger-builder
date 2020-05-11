import React from "react";
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const buildControls = (props) => {

    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
        {label: 'Cheese', type: 'cheese'},
    ]

    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.type}
                    type={ctrl.type}
                    label={ctrl.label}
                    add={props.add}
                    remove={props.remove}
                />
            })}
        </div>
    )
}

export default buildControls;