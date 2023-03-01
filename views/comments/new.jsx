const React = require('react')
const Def = require('../default')

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a Rant or Rave</h1>
                <form action={`rant`} method='POST'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='rant'>Rant?</label>
                            <input className='form-control' type='checkbox' id='rant' name='rant' />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='star'>Star Rating</label>
                            <input className='form-control' type='number' id='star' name='star' step="0.5" min="1" max="5" required />
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