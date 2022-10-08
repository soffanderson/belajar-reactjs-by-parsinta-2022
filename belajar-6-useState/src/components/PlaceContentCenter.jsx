export function PlaceContentCenter({ children }) {
    return (
        <div className='bg-black'>
            <div className='bg-violet-900/20 text-violet-50 min-h-screen flex items-center justify-center antialiased tracking-tighter'>
                <div className='max-w-lg'>{children}</div>
            </div>
        </div>
    );
}
