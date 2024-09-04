import { useState } from "react";

const UseStateObject = () => {
    // const [name, setName] = useState("R");
    // const [surname, setSurname] = useState("K");
    // const [job, setJob] = useState("F");
    const [user, setUser] = useState({
        name: "Ruby",
        surname: "Kovac",
        job: "Front-end Developer"
    });

    const [visible, setVisible] = useState(true);

    return (
        <div>
            <h1>Use State Object</h1>
            {/* <h2>Name: {name}</h2>
            <h2>Surname: {surname}</h2>
            <h2>Job: {job}</h2> */}

            {visible && (
                <>
                    <h2>Name: {user.name}</h2>
                    <h2>Surname: {user.surname}</h2>
                    <h2>Job: {user.job}</h2>
                </>
            )}


            <button onClick={() => setUser({ ...user, name: "Rubi" })} className="btn btn-primary">Update Name</button>
            <button onClick={() => setUser({ ...user, surname: "Kovach" })} className="btn btn-danger">Update Surname</button>
            <button onClick={() => setUser({ ...user, job: "F-e developer" })} className="btn btn-warning">Update Job</button>

            <button onClick={() => setVisible(!visible)} className="btn btn-secondary">Show Table / Hide Table</button>

            {/* <button onClick={() => setName("Ruby")} className="btn btn-primary">Update Name</button>
            <button onClick={() => setSurname("Kovac")} className="btn btn-danger">Update Surname</button>
            <button onClick={() => setJob("Front-end Developer")} className="btn btn-warning">Update Job</button> */}
        </div>
    );
};

export default UseStateObject;