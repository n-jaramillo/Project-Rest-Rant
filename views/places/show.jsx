const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className='d-inline-flex row'>
                    <div className='col'>
                        <img src={data.place.pic} alt={data.place.name} className='img-fluid w-100 shadow-1-strong rounded' />
                    </div>
                    <div className='col d-inline-flex flex-column justify-content-center'>
                        <h1>{data.place.name}</h1>
                        {
                            data.place.founded
                            ? <h5 className='text-muted'>Established {data.place.founded}</h5>
                            : <br />
                        }                      
                        <div className='mt-3'>
                            <h2 className='text-info'>Rating</h2>
                            <p className='text-muted'>Not Rated</p>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-info'>Description</h2>
                            <p>Located in {`${data.place.city}, ${data.place.state} and serving ${data.place.cuisines}`}</p>
                        </div>
                    </div>
                </div>
                <div className='d-inline-flex mt-3'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning mx-5'>
                        <i className="bi-pencil-square"></i> Edit
                    </a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger mx-5'>
                            <i className="bi-trash3-fill"></i> Delete
                        </button>
                    </form>
                </div>
                <hr />
                <div className='p-3'>
                    <h2 className='text-info'>Comments</h2>
                    <p className='text-muted'>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show