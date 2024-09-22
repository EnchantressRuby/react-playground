import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditInfo from "./EditInfo"
import { useState } from "react";

const InfoList = ({ tutorials, deleteInfo }) => {

    const [editItem, setEditItem] = useState("")

    return (
        <div className="container mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-danger">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tutorials.map(({ id, title, description }) => (
                        <tr>
                            <th>{id}</th>
                            <td>{title}</td>
                            <td>{description}</td>
                            <td className="text-center">
                                <AiFillDelete
                                    type="button"
                                    size={22}
                                    className="text-danger cursor-pointer"
                                    onClick={() => deleteInfo(id)}
                                />

                                <FaEdit
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    size={20}
                                    className="me-2 text-warning cursor-pointer"
                                    onClick={() => setEditItem({ id, title, description })} />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <EditInfo editItem={editItem} setEditItem={setEditItem} />
        </div>
    )
}

export default InfoList