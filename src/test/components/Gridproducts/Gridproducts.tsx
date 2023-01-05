import React from 'react';
import { products } from '../../../mocks/products';
import './Gridproducts.scss'
import { RiStarSFill } from "react-icons/ri"
import { AiOutlineHeart } from "react-icons/ai"

const GridProducts: React.FC = () => {
    return (
        <>
            <div className='container-card'>
                {products.map((product) => (
                    <div key={product.id} className='card'>

                        <div className='heart-icon'>
                            <AiOutlineHeart />
                        </div>

                        <div className='product-image'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='wrapper-card-info'>
                            <div className='card-name'>{product.name}</div>
                            <div className='card-price'>
                                <span>{`$${product.price}`}</span>
                            </div>
                            <div className='card-price'>
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                                <RiStarSFill />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default GridProducts;