const React = require('react')
const Def = require('../default')

function new_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className='alert-danger'>
                {data.message}
            </h4>
        )
    }
    let values = {
        name : '',
        pic : '',
        city : '',
        state : '',
        founded : new Date().getFullYear(),
        cuisines : '',
    }
    if (data.value) {
        data.value.name ? values.name = data.value.name : values.name = ''
        data.value.pic ? values.pic = data.value.pic : values.pic = ''
        data.value.city ? values.city = data.value.city : values.city = ''
        data.value.state ? values.state = data.value.state : values.state = ''
        data.value.founded ? values.founded = data.value.founded : values.founded = new Date().getFullYear()
        data.value.cuisines ? values.cuisines = data.value.cuisines : values.cuisines = ''
    }
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form action='/places' method='POST'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required defaultValue={values.name} />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type='url' id='pic' name='pic' defaultValue={values.pic} />
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' defaultValue={values.city} />
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='state'>State</label>
                            <input className='form-control' id='state' name='state' list='state-list' defaultValue={values.state} />
                            <datalist id='state-list'>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CT">Connecticut</option>
                                <option value="CO">Colorado</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="IA">Iowa</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="MA">Massachussets</option>
                                <option value="MD">Maryland</option>
                                <option value="ME">Maine</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MO">Missouri</option>
                                <option value="MS">Mississippi</option>
                                <option value="MT">Montana</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="NE">Nebraska</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NV">Nevada</option>
                                <option value="NY">New York</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VA">Virginia</option>
                                <option value="VT">Vermont</option>
                                <option value="WA">Washington</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WV">West Virginia</option>
                                <option value="WY">Wyoming</option>
                            </datalist>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='founded'>Year Established</label>
                            <input type='number' className='form-control' id='founded' name='founded'  step="1" defaultValue={values.founded} /> {/*  min="1673" max={new Date().getFullYear()} */}
                        </div>
                        <div className='form-group col-sm-12'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' required defaultValue={values.cuisines} />
                        </div>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place' />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form