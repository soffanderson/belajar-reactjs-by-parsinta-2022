import * as React from 'react';

const Input = React.forwardRef({ type = 'text', ...props }, ref) => {
    return (
        <input
        ref={ref}
            {...props}
            className='focus:outline-none focus:ring focus:ring-blue-200 transition duration-200 border-slate-300 rounded-lg shadow-sm w-full'
            type={type}
        />
    );
};

export default Input;
