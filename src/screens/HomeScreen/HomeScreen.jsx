import React from 'react'
import { Cards } from '../../components'

const HomeScreen = () => {
    return (
        <div className='container-fluid d-flex justify-content-center'>
            <div className="row">
                <div className='row my-2'>
                    <div className='d-flex justify-content-center'>
                        <a href="#" className='btn btn-outline-success mx-2'>+ Add</a>
                    </div>
                </div>
                {[1, 2, 3, 4, 5].map(() => (
                    <div className="col-md-12">
                        <Cards />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default HomeScreen