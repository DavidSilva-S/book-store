import React from 'react';
import { SlArrowDown } from 'react-icons/sl'
import './Dropdown.scss'

type Dropdown = {
    width: Number,
    texto: String,
    bg_color: String,
    ft_color: String,
    hasBorder: boolean,
    options: String[],
}

const DrobDown: React.FunctionComponent<Dropdown> = ({ width, texto, options, bg_color, ft_color, hasBorder }) => {
    return (
        <>
            <div className='dropdown-nav' style={{
                width: `${width}rem`,
                backgroundColor: bg_color ? `${bg_color}` : 'transparent',
            }}>
                <div className='dropdown-nav__icons'>
                    <p className='dropdown-text' style={{ color: `${ft_color}`}}>
                        <span>{texto}</span>
                    </p>
                    {options.length === 0 ? "" : <SlArrowDown style={{ color: `${ft_color}`, width: `${width}` }} />}
                </div>
            </div>
        </>
    )
}

export default DrobDown;