import { PlaceContentCenter } from './components/PlaceContentCenter';
import { useState } from 'react';
import Todo from './components/Todo';
import Card from './components/Card';
import Button from './components/Button';

function App() {
    const [tick, setTick] = useState(0);
    function hanldeClick() {
        // const nextTick = tick + 1;
        setTick((nextTick) => nextTick + 1);
    }

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>useRef Hooks</Card.Title>
                <Card.Body>
                    <Button onClick={hanldeClick}>Tick</Button>
                </Card.Body>
                <Card.Footer>You clicked {tick} times.</Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
