import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'
import './Dropdown.scss'

type Dropdown = {
    width: String,
    color: String,
    texto: String
    options: String[] 
}

const DrobDown: React.FunctionComponent<Dropdown> = ({ width, color, texto, options }) => {
    return (
        <>
            <div className='dropdown-nav' style={{
                width: `${width}%`,
                backgroundColor: color ? `${color}` : 'transparent',
            }}>
                <div className='dropdown-nav__icons'>
                    <p>{texto}</p>
                    {options.length === 0 ? "" : <MdKeyboardArrowDown />}
                </div>
            </div>
        </>
    )
}

export default DrobDown;