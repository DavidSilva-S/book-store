import React, { FunctionComponent } from 'react';
import "./sideBarFilter.scss"

interface inputCkcBox {
    idName: string;
    labelName: string;
    itemQnt: number
}


interface sideBarFlter {
    categoriesName: string;
}

export const InputCheckbox: FunctionComponent<inputCkcBox> = ({ idName, labelName, itemQnt }) => {
    return (
        <>
            <input type="checkbox" name="input-check" checked id={`${idName}`} />
            <label htmlFor={`${idName}`}>{labelName}</label>
            <div>{itemQnt}</div>
        </>
    )
}


const SideBarFilter: FunctionComponent<sideBarFlter> = ({ categoriesName }) => {

    return (
        <>
            <div className='sidebar-container'>
                <div className="filter-wrappers">
                    <div className='filter-header'>
                        <span>{categoriesName}</span>
                        <span>Reset</span>
                    </div>
                    <div className='filter-body'>
                        <InputCheckbox idName="allcategories" labelName="All categories" itemQnt={10} />
                        <InputCheckbox idName="tablet" labelName="Tablet" itemQnt={5} />
                        <InputCheckbox idName="laptop" labelName="Laptop" itemQnt={5} />
                        <InputCheckbox idName="headphone" labelName="Headphone" itemQnt={5} />
                        <InputCheckbox idName="console" labelName="Console" itemQnt={5} />
                        <InputCheckbox idName="other" labelName="other" itemQnt={5} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarFilter
