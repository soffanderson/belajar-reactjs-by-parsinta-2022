import { PlaceContentCenter } from './components/PlaceContentCenter';
import Card from './components/Card';
import { IconBrandGithub } from '@tabler/icons';
import Button from './components/Button';
import { Input } from './components/Input';
import { Label } from './components/Label';
import { useState } from 'react';
import Todo from './components/Todo';

function App() {
    const [form, setForm] = useState({
        name: '',
        email: '',
    });

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function submit(e) {
        e.preventDefault();

        console.log(form);
    }

    return (
        <PlaceContentCenter>
            <Todo />
        </PlaceContentCenter>
    );
}

export default App;
