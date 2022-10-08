import { IconBrandFacebook, IconBrandGithub, IconBrandTwitter } from '@tabler/icons';
import Button from './components/Button';

function App() {
    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen'>
            <div className='flex gap-x-2'>
                <Button onClick={() => console.log('register')} type='reset'>
                    <IconBrandFacebook />
                    Register
                </Button>
                <Button className={'bg-pink-600'} onClick={() => console.log('login')} type='button'>
                    <IconBrandTwitter />
                    Login
                </Button>
                <Button className={'bg-black'} onClick={() => console.log('login')} type='button'>
                    <IconBrandGithub />
                    Login
                </Button>
            </div>
        </div>
    );
}

export default App;
