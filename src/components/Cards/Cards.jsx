import React, { useState } from 'react'

import './Cards.css'

const Cards = () => {
    const [isEdit, setIsEdit] = useState(false)
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
                {isEdit && <div>
                    <textarea type="text" placeholder='Enter message' />
                </div>}
                {isEdit ? <button className='btn btn-outline-primary mx-2'
                >Save</button>
                    :
                    <button button className='btn btn-outline-primary mx-2'
                        onClick={() => setIsEdit(true)}
                    >Edit</button>}
                {isEdit ? <button className='btn btn-outline-danger'
                    onClick={() => setIsEdit(false)}

                >Cancel</button> :
                    <button className='btn btn-outline-danger'>Delete</button>}
            </div>
        </div >
    )
}

export default Cards