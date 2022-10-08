import Card from './components/Card';
import Button from './components/Button';

function App() {
    return (
        <div className='bg-slate-100 antialiased flex justify-center items-center min-h-screen'>
            <div className='max-w-md w-full'>
                <Card>
                    <Card.Title>Welcome to React</Card.Title>
                    <Card.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non beatae aliquid reprehenderit voluptate. Reiciendis cum adipisci
                        expedita hic, quo ea.
                    </Card.Body>
                    <Card.Footer>
                        <Button>Register</Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
}

export default App;
