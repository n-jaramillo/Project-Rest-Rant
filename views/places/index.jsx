const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div className='col-sm-6 p-3'>
                <h2 className='text-center font-weight-bold'>{place.name}</h2>
                <p className='text-center text-muted font-italic'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} className='img-fluid w-100 shadow-1-strong rounded' />
                <p className='text-center text-muted'>
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1 className='mt-5'>Places to Rant or Rave About</h1>
                <div className='row p-5'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index