import React, {FC, useState} from 'react';
// interface LinkType {
//     children: ReactNode;
//     onClick: React.MouseEventHandler<HTMLElement>;
// }
export const Counter: FC = () => {
    const [count, setCount] = useState(0)
    const clickHandler = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1> {count} </h1>
            <button onClick={clickHandler}>Press to count</button>
        </div>
    );
};

