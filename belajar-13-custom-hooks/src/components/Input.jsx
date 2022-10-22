import { forwardRef, useEffect, useRef } from 'react';

const Input = forwardRef(({ type = 'text', ...props }, ref) => (
    <input
        ref={ref}
        {...props}
        className='focus:outline-none focus:ring focus:ring-blue-200 transition duration-200 border-slate-300 rounded-lg shadow-sm w-full text-slate-900'
        type={type}
    />
));

export default Input;
