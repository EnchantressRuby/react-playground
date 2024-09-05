import React from 'react'

const FormEvents = () => {
    return (
        <div className="mt-4 p-3">
            <div className="text-center">
                <h1>****************</h1>
                <h2>Form Events</h2>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <select id="country" className="form-select" aria-label="Default select example">
                        <option selected="">Countries</option>
                        <option value="Cze">Czech Republic</option>
                        <option value="Tr">Turkiye</option>
                        <option value="Esp">Spain</option>
                    </select>

                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
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