function Card({ children }) {
    return <div className='shadow bg-white overflow-hidden rounded-lg'>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl font-semibold text-slate-900'>{children}</h1>
        </div>
    );
}

function Body({ children }) {
    return <div className='leading-relaxed p-4 text-slate-900'>{children}</div>;
}

function Footer({ children }) {
    return <h1 className='bg-slate-50 p-4 text-slate-900'>{children}</h1>;
}
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
