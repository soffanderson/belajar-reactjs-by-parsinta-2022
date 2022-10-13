import * as React from 'react';

export function Input({ type = 'text', ...props }) {
    return (
        <input
            {...props}
            className='focus:outline-none focus:ring focus:ring-blue-200 transition duration-200 border-slate-300 rounded-lg shadow-sm w-full'
            type={type}
        />
    );
}
