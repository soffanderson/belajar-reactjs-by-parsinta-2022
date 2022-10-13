import { PlaceContentCenter } from './components/PlaceContentCenter';
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
