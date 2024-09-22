const EditInfo = () => {
    return (
        <div
            className="modal fade"
            id="editModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5"
                            id="exampleModalLabel">
                            Modal
                        </h1>
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label
                                htmlFor="title"
                                className="form-label">
                                Title
                            </label>
                            <input
                                type="text" className="form-control"
                                id="title"
                                placeholder="Enter your title" />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="desc"
                                className="form-label">
                                Description
                            </label>
                            <input
                                type="text" className="form-control"
                                id="desc"
                                placeholder="Enter your description" />
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-bs-dismiss="modal">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInfo