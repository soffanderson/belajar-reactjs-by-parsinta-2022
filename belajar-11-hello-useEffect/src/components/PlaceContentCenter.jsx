export function PlaceContentCenter({ children }) {
    return (
        <div className='bg-slate-50'>
            <div className='bg-violet-900/20 text-violet-50 min-h-screen flex items-center justify-center antialiased tracking-tighter'>
                <div className='w-96'>{children}</div>
            </div>
        </div>
    );
}
