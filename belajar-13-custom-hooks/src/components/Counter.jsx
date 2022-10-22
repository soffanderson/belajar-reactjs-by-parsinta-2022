import { useState } from 'react';
import Button from './Button';

export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);

    function handlerClick() {
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>{count}</h1>
            <div className='mt-5 flex gap-4'>
                <Button onClick={handlerClick}>Count +1</Button>
                <Button
                    onClick={() => {
                        handlerClick();
                        handlerClick();
                        handlerClick();
                    }}
                >
                    Count +3
                </Button>
            </div>
        </div>
    );
}
