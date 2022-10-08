import { PlaceContentCenter } from './components/PlaceContentCenter';
import Button from './components/Button';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    function handlerClick() {
        setCount((prev) => prev + 1);
    }

    return (
        <PlaceContentCenter>
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
        </PlaceContentCenter>
    );
}

export default App;
