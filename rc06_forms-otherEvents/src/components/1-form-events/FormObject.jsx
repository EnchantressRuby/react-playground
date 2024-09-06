import React, { useState } from 'react';

const FormEvents = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")

    const sendToDatabase = (e) => {
        e.preventDefault()
        alert(`
            name: ${name},
            password: ${password}
            `)

        setName("");
        setPassword("");
        setCountry("");
    }

    return (
        <div className="mt-4 p-3">
            <div className="text-center">
                <h1>**********************</h1>
                <h2>Form Events</h2>
            </div>
            <form onSubmit={sendToDatabase}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name : <span className='text-danger'>{name}</span>
                    </label>
                    <input onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password: <span className='text-danger'>{password}</span>
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country : <span className='text-danger'>{country}</span>
                    </label>
                    <select id="country" className="form-select" aria-label="Default select example" onChange={(e) => setCountry(e.target.value)}>
                        <option selected="">Countries</option>
                        <option value="Cze">Czech Republic</option>
                        <option value="Tr">Turkiye</option>
                        <option value="Esp">Spain</option>
                    </select>
                </div>

                {/* the default type of the buttons in the form is submit */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormObject;