import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../App'

const StudentItem = () => {

    //! context consumer
    const { students } = useContext(StudentContext)
    return (
        <div>
            {students.map((std)=>(
                <div key={std.id} style={{background:std.color}}>
                    <h3>Name: {std.name}</h3>
                    <h4>E-Mail: {std.email}</h4>
                    <h4>Age: {std.age}</h4>
                    Color: <input type="text" value={std.color}
                    onChange={(e)=>changeColor(std.id,e.target.value)}/>
                </div>
            ))}
        </div>
    )
}

export default StudentItem