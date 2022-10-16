import { PlaceContentCenter } from './components/PlaceContentCenter';
import { useEffect, useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App(props) {
    const [name, setName] = useState('');
    const [online, setOnline] = useState(false);
    const [scrollPosition, setScrollPosition] = useState();

    // always render: pertama dimuat & ketika ada perubahan apapun
    useEffect(() => {
        console.log('I always rendered.');
    });

    // hanya dipanggil ketika pertama dimuat saja karna '[]' kosong
    useEffect(() => {
        console.log('First rendered.');
    }, []);

    // akan direnderketika online berubah saja, karna online ada di dalam bracker []
    useEffect(() => {
        console.log(`I am now ${online ? 'online' : 'offline'}`);
    }, [online]);

    // fungsiuntuk attaching dan detaching, like CTRL + K untuk membuka search bar, kemudian jika dia tekan lagi maka tertutup.
    function updateScrollPosition() {
        const windowScrolling = window.scrollY;
        console.log(`Window scroll position: ${windowScrolling}`);
        setScrollPosition(windowScrolling);
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition);
        return () => {
            window.removeEventListener('scroll', updateScrollPosition);
        };
    });

    // bisa memakai cara yang seperti ini jika ingin di render satu kali saja di awal
    // useEffect(() => {
    //     window.addEventListener('scroll', updateScrollPosition);
    // }, []);

    return (
        <PlaceContentCenter>
            <div className='h-[4000px]'>
                <Input value={name} onChange={(e) => setName(e.target.value)} />

                <Button onClick={() => setOnline((online) => !online)}>Set Online</Button>
            </div>
        </PlaceContentCenter>
    );
}

export default App;
