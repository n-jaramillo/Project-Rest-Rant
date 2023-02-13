const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className='w-75 p-1 mx-auto'>
                    <a href='/places' className='d-flex justify-content-center'>
                        <button className='btn btn-primary btn-lg btn-block'>Places Page</button>
                    </a>
                </div>
                <div className='d-inline-flex mx-5 mt-5 justify-content-center row'> {/* image grid */}
                    <div className='col-lg-4 col md-12 mb-2 mb-lg-0'>
                        <img src='/images/protein-salad.jpg' alt='Protein Salad' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/photos/kcA-c3f_3FE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                        <img src='/images/chicken-burger.jpg' alt='Chicken Burger' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/@eaterscollective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eaters Collective</a> on <a href="https://unsplash.com/photos/pLKgCsBOiw4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                        </p>
                    </div>
                    <div className='col-lg-4 mb-4 mb-lg-0'>
                        <img src='/images/sauteed-shrimp.jpg' alt='Sauteed Shrimp' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/@vinomamba24?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vino Li</a> on <a href="https://unsplash.com/photos/TqOEGdRNowY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                        <img src='/images/dumplings.jpg' alt='Dumplings' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a> on <a href="https://unsplash.com/photos/D-vDQMTfAAU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>

                    </div>
                    <div className='col-lg-4 mb-4 mb-lg-0'>
                        <img src='/images/mushroom-salad.jpg' alt='Mushroom Salad' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/pt-br/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/photos/4J059aGa5s4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                        <img src='/images/cocktail.jpg' alt='Rosemary Cocktail' className='img-fluid w-100 shadow-1-strong rounded' />
                        <p className='mb-4'>
                            Photo by <a href="https://unsplash.com/@norevisions?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">No Revisions</a> on <a href="https://unsplash.com/photos/gA81ZTsql68?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home