import axios from 'axios';
import { useEffect, useState } from 'react';

function useJoke(name) {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        const getJoke = async () => {
            const { data } = await axios(`https://api.chucknorris.io/jokes/random?name=${name}`);
            setJoke(data);
        };
        getJoke().then((r) => r);
    }, [name]);

    return joke;
}

export default useJoke;
