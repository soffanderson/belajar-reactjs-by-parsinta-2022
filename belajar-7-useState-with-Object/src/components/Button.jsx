import clsx from 'clsx';

export default function Button(props) {
    const { className = 'bg-blue-600', children, text, type = 'submit' } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                `${className} [&>svg]:w-6 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-1  text-white px-4 py-2 rounded`
            )}
        >
            {text || children}
        </button>
    );
}
