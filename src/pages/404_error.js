import React, { useState, useEffect } from 'react';
import logo from '../assets/images/ANDRADE_MKTPLAN_BRANDING-03.png'
const Typewriter = ({ text, speed }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            setTimeout(() => {
                setIndex(index + 1);
            }, speed);
        }
    }, [index, text.length, speed]);

    return (
        <div className='text-light my-custom-p'>
            {text.substring(0, index)}
            <span className="cursor"></span>
        </div>
    );
};



export default function NoFound() {
    return (
        <div className='center heigth-100-vh'>
            <div>
                <img src={logo} className='logo' alt="" />
                <Typewriter text="Error 404, pagina no encontrada:(" speed={100} />
            </div>
        </div>
    );
}
