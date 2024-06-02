import React from "react";
import classes from '../input/MyInput.Module.css'

const MyInput = (props) => {
    return (
        <input className={classes.MyInput} {...props} />
    );
};

export default MyInput;