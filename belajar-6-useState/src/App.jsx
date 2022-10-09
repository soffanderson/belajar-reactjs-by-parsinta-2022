import { PlaceContentCenter } from './components/PlaceContentCenter';
import Counter from './components/Counter';

function App() {
    return (
        <PlaceContentCenter>
            <Counter initialValue={10} />
        </PlaceContentCenter>
    );
}

export default App;
