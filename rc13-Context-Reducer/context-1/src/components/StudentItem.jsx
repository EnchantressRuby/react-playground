import React from 'react'
import { useContext } from 'react'
import { StudentContext } from '../App'

const StudentItem = () => {

    //! context consumer
    const { students } = useContext()
    return (
        <div>

        </div>
    )
}

export default StudentItem