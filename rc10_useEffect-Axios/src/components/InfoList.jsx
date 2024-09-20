import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditInfo from "./EditInfo"

const InfoList = () => {
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
                    <tr>
                        <th>{ }</th>
                        <td>{ }</td>
                        <td>{ }</td>
                        <td className="text-center">
                            <AiFillDelete
                                type="button"
                                size={22}
                                className="text-danger cursor-pointer" />

                            <FaEdit
                                data-bs-toggle="modal"
                                data-bs-target="#editModal"
                                size={20}
                                className="me-2 text-warning cursor-pointer" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}