import { useState } from "react"

const AddInfo = ({ postInfo }) => {
    const [titl, setTitl] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        postInfo({ title: titl, description: desc })

        setTitl("")
        setDesc("")
    }

    return (
        <div className="container text-center mt-4">
            <h1 className="display-6 text-danger">Add Your Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <labet htmlFor="title" className="form-label">Title</labet>
                    <input type="text" className="form-control"
                        id="title"
                        placeholder="Enter your title"
                        onChange={(e) => setTitl(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control"
                        id="desc"
                        placeholder="Enter your title"
                        onChange={(e) => setDesc(e.target.value)}
                        required />
                </div>
                <button type="submit" className="btn btn-danger mb-4">Submit</button>
            </form>


        </div>
    )
}

export default AddInfo