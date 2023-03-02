const React = require('react')
const Def = require('../default')

function new_form(data) {
    let rating = 0
    return (
        <Def>
            <main>
                <h1>Add a Rant or Rave</h1>
                <form action={`/places/${data.id}/comment`} method='POST'>
                    <div className='row'>
                        <div className='form-group col-xs-12 col-md-6'>
                            <label htmlFor='rant'>Rant?</label>
                            <input className='form-control' type='checkbox' id='rant' name='rant' />
                        </div>
                        <div className='form-group col-xs-12 col-md-6'>
                            <label htmlFor='stars'>Star Rating</label>

                            <p className='row justify-content-center align-items-center px-3'>
                                <span className='col-xs-1 px-1'>😡</span>
                                <span className='col-xs-auto px-1'><input className='form-control' type='range' id='stars' name='stars' step="0.5" min="1" max="5" required list='rating'/></span>
                                <span className='col-xs-1 px-1'>😻</span>
                                <datalist id='rating'>
                                    <option value='1'></option>
                                    <option value='2'></option>
                                    <option value='3'></option>
                                    <option value='4'></option>
                                    <option value='5'></option>
                                </datalist>
                            </p>
                        </div>
                        <div className='form-group col-sm-12'>
                            <label htmlFor='content'>Comment</label>
                            <textarea className='form-control' id='content' name='content' />
                        </div>
                        <div className='form-group col-sm-12'>
                            <label htmlFor='author'>Author</label>
                            <input className='form-control' id='author' name='author' />
                        </div>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Comment' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form