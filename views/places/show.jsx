const React = require('react')
const Def = require('../default')

function show(data) {
    function switchStars(stars) {
        switch (stars) {
            case 1:
                return (<><i className="bi-star-fill" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /></>);
            case 1.5:
                return (<><i className="bi-star-fill" /><i className="bi-star-half" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /></>);
            case 2:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /></>);
            case 2.5:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-half" /><i className="bi-star" /><i className="bi-star" /></>);
            case 3:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star" /><i className="bi-star" /></>);
            case 3.5:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-half" /><i className="bi-star" /></>);
            case 4:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star" /></>);
            case 4.5:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-half" /></>);
            case 5:
                return (<><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /><i className="bi-star-fill" /></>);
            default:
                return (<><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /><i className="bi-star" /></>);
        }
    }

    let comments = (
        <h5 className='inactive'>
            No comments yet!
        </h5>
    )

    let rating = (
        <h5 className='inactive'>
            Not yet rated
        </h5>
    )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)

        let averageRating = sumRatings / data.place.comments.length

        rating = (
            <>
                <h5 className='text-warning'>
                    {switchStars(averageRating)}
                </h5>
                <p className='small'>{averageRating.toFixed(1)} star average</p>
            </>
        )

        comments = data.place.comments.map(c => {
            return (
                <div key={c.id} className='col-xs-4 border p-2 m-2' style={{ width: '300px' }}>
                    {c.rant ? <h3 className='rant text-danger'>Rant! ????</h3> : <h3 className='rant text-info'>Rave! ????</h3>}
                    <hr />
                    <h5 className='text-warning'>{switchStars(c.stars)}</h5>
                    <p className='small'>Rating: {c.stars.toFixed(1)}</p>
                    <hr />
                    <p className='px-2'>
                        {c.content}
                        <br />
                        <strong>- {c.author}</strong>
                    </p>
                    <form method='POST' action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-outline-danger btn-sm'>
                            <i className="bi-trash3-fill" /> Delete Comment
                        </button>
                    </form>
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
                                {rating}
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
                            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning mx-5'>
                                <i className="bi-pencil-square" /> Edit
                            </a>
                        </div>
                        <div className='col-xs-6'>
                            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                                <button type='submit' className='btn btn-danger mx-5'>
                                    <i className="bi-trash3-fill" /> Delete
                                </button>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className='col-sm-12 p-3'>
                            <h2 className='text-info'>Comments</h2>
                            <div className='col-xs-12'>
                                <a href={`/places/${data.place.id}/comment`} className='btn btn-info mx-5'>
                                    <i className="bi-star" /> Add Comment
                                </a>
                            </div>
                            <br />
                            <div className='row justify-content-center mx-2'>{comments}</div>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = show