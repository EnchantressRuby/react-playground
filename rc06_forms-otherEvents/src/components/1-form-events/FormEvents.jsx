import React, { useState } from 'react';

const FormEvents = () => {
    const [name, setName] = useState("")
    //? After each update of the state, the component will re-render and the changed parts are printed to the DOM
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    return (
        <div className="mt-4 p-3">
            <div className="text-center">
                <h1>**********************</h1>
                <h2>Form Events</h2>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name : <span className='text-danger'>{name}</span> 
                    </label>
                    {/*onChange event is triggered whenever the input value changes
                    state is updated via the event written*/}
                    <input onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password: <span className='text-danger'>{password}</span>
                    </label>
                    <input onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country : <span className='text-danger'>{country}</span>
                    </label>
                    <select id="country" className="form-select" aria-label="Default select example" onChange={(e)=>setCountry(e.target.value)}>
                        <option selected="">Countries</option>
                        <option value="Cze">Czech Republic</option>
                        <option value="Tr">Turkiye</option>
                        <option value="Esp">Spain</option>
                    </select>

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormEvents;