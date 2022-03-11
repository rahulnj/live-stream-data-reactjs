import React from 'react'

import './Cards.css'

const Cards = () => {
    return (
        <div className="card text-center mx-auto mt-5">
            <div className="overflow">
                <img src="" alt=""
                    className='card-img-top'
                />
            </div>
            <div className="card-body text-dark">
                <p className="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quam maiores deleniti molestiae culpa consequatur doloribus optio exercitationem repellendus non. Commodi aperiam consequatur asperiores expedita aut et, dolorum illo ut.
                </p>
                <a href="#" className='btn btn-outline-primary mx-2'>Edit</a>
                <a href="#" className='btn btn-outline-danger'>Delete</a>
            </div>
        </div>
    )
}

export default Cards