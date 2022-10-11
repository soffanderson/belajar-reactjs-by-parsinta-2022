import Button from './Button';
import Card from './Card';
import { Input } from './Input';

export default function Todo() {
    return (
        <Card>
            <Card.Title>Todo</Card.Title>
            <Card.Body>
                <div className='flex items-center gap-x-2'>
                    <Input />
                    <Button>Login</Button>
                </div>
            </Card.Body>
            <Card.Footer>You have 5 tasks.</Card.Footer>
        </Card>
    );
}
