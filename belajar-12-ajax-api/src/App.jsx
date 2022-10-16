import { PlaceContentCenter } from './components/PlaceContentCenter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';

function App(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                const { data } = await axios('https://jsonplaceholder.typicode.com/users'); // bisa digtambah axios.put / delete / dll. Jika ada parameter ${userid}, maka tambahkan di dependencies []
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
        getUsers().then((r) => r);
    }, []);

    return (
        <PlaceContentCenter>
            <Card>
                <Card.Title>Users: {users.length}</Card.Title>
                <Card.Body>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ol>
                            {users.map((user) => (
                                <li key={user.id}>
                                    <b>{user.name}</b> ({user.username})
                                </li>
                            ))}
                        </ol>
                    )}
                </Card.Body>
            </Card>
        </PlaceContentCenter>
    );
}

export default App;
