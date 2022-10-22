import { PlaceContentCenter } from './components/PlaceContentCenter';
import Card from './components/Card';
import useJoke from './hooks/useJoke';
import Input from './components/Input';
import { useRef, useState } from 'react';
import Button from './components/Button';

function App(props) {
    const nameRef = useRef();
    const [name, setName] = useState('Alex');
    const joke = useJoke(name);

    const generateId = (e) => {
        e.preventDefault();
        setName(nameRef.current.value);
    };

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Playground</Card.Title>
                <Card.Body>
                    <p className='mb-4'>{joke.value}</p>
                    <Input ref={nameRef} />
                </Card.Body>
                <Card.Footer>
                    <Button onClick={generateId}>Generate id</Button>
                </Card.Footer>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
