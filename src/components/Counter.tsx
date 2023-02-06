import React, {FC, useState} from 'react';
// @ts-ignore
import classes from "./Counter.module.scss"
export const Counter: FC = () => {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count+1)
    }
    const clickHandlerMinus = () => {
        setCount(count-1)
    }
    return (
        <div>
            <h1> {count} </h1>
            <button onClick={clickHandler} className={classes.btn}>Press to + count</button>
            <button onClick={clickHandlerMinus}>Press to - count</button>

        </div>
    );
};

