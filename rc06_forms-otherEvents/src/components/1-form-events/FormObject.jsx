import React, { useState } from 'react';

const FormObject = () => {
    const [info, setInfo] = useState({ name: "", password: "", country: "" })

    const handleInfo = (e) => setInfo({ ...info, [e.target.id]: e.target.value })
    console.log(setInfo);

    const sendToDatabase = (e) => {
        e.preventDefault()
        alert(`
            name: ${info.name},
            password: ${info.password}
            country: ${info.country}
            `)

        setInfo({ name: "", password: "", country: "" })
    }

    return (
        <div className="mt-4 p-3">
            <div className="text-center">
                <h1>********</h1>
                <h2>Form Events</h2>
            </div>
            <form onSubmit={sendToDatabase}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name : <span className='text-danger'>{info.name}</span>
                    </label>
                    <input onChange={handleInfo}
                        type="text"
                        className="form-control"
                        id="name"
                        value={info.name}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password: <span className='text-danger'>{info.password}</span>
                    </label>
                    <input onChange={handleInfo}
                        type="password"
                        className="form-control"
                        id="password"
                        value={info.password}
                        required />
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country : <span className='text-danger'>{info.country}</span>
                    </label>
                    <select id="country" className="form-select" aria-label="Default select example" onChange={handleInfo} value={info.country}>
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