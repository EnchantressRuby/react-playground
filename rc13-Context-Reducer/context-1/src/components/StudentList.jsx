import React from 'react'
import StudentItem from "./StudentItem";
const StudentList = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img
        src="https://gelecekegitimde.com/wp-content/uploads/2015/01/fft99_mf3019637.jpeg"
        alt=""
      />

      <h2 style={{background: "pink" }}>Student List</h2>

      <StudentItem />
    </div>
  );
}

export default StudentList