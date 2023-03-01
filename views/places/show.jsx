const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border p-3'>
                    <h3 className='rant'>{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h3>
                    <h5>Rating: {c.stars}</h5>
                    <p>
                        {c.content}
                        <br />
                        <strong>- {c.author}</strong>
                    </p>
                </div>
            )
        })
    }
    return (
        <Def>
            <main className='text-muted d-inline-flex container p-3'>
                <div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={data.place.pic} alt={data.place.name} className='img-fluid w-100 shadow-1-strong rounded' />
                            <p>Located in {`${data.place.city}, ${data.place.state} and serving ${data.place.cuisines}`}</p>
                        </div>
                        <div className='col-lg-6 flex-column justify-content-center'>
                            <h1>{data.place.name}</h1>
                            {
                                data.place.founded
                                    ? <h5>Established {data.place.founded}</h5>
                                    : <br />
                            }
                            <div className='mt-3'>
                                <h2 className='text-info'>Rating</h2>
                                <p >Not Rated</p>
                            </div>
                            <div className='mt-3'>
                                <h2 className='text-info'>Description</h2>
                                <h5>{data.place.showEstablished()}</h5>
                                <p>Serving {data.place.cuisines}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3 justify-content-center'>
                        <div className='col-xs-6'>
                            <a href={`/places/${data.id}/edit`} className='btn btn-warning mx-5'>
                                <i className="bi-pencil-square"></i> Edit
                            </a>
                        </div>
                        <div className='col-xs-6'>
                            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                                <button type='submit' className='btn btn-danger mx-5'>
                                    <i className="bi-trash3-fill"></i> Delete
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-sm-12 p-3'>
                            <h2 className='text-info'>Comments</h2>
                            {comments}
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show