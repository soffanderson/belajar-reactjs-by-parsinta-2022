import { useEffect, useRef } from 'react';

const Input = ({ isFocused = false, type = 'text', ...props }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <input
            ref={inputRef}
            {...props}
            className='focus:outline-none focus:ring focus:ring-blue-200 transition duration-200 border-slate-300 rounded-lg shadow-sm w-full'
            type={type}
        />
    );
};

export default Input;
