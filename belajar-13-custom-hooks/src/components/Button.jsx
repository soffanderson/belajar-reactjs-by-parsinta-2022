import clsx from 'clsx';

function Button(props) {
    const { className = 'bg-black', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                `${className} [&>svg]:w-6 [&>svg]:h-5 [&>svg]:stroke-1 whitespace-nowrap inline-flex justify-center items-center gap-x-1  text-white px-4 h-10 rounded`
            )}
        >
            {text || children}
        </button>
    );
}

export default Button;
