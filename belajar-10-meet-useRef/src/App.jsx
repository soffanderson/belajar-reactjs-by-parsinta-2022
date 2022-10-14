import { PlaceContentCenter } from './components/PlaceContentCenter';
import { useRef, useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';

function App() {
    // const [tick, setTick] = useState(0);
    const inputRef = useRef(null);

    function hanldeClick() {
        // const nextTick = tick + 1;
        // setTick((nextTick) => nextTick + 1);
        inputRef.current.focus();
        console.log(inputRef);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useRef Hooks</Card.Title>
                <Card.Body>
                    <Input placeholder='email' isFocused className='border border-slate-700 my-2' />
                    <Input placeholder='passworld' className='border border-slate-700 my-2' />
                    <Button onClick={hanldeClick}>Tick</Button>
                </Card.Body>
                {/* <Card.Footer>You clicked {tick} times.</Card.Footer> */}
            </Card>
        </PlaceContentCenter>
    );
}

export default App;

// useRef dugunakan untuk jika kita tidak ingin rerender component melainkan hanya bagian tertetnu
