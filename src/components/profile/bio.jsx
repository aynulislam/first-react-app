import React from 'react';



const name = "Mohammad Aynul Islam";
const designation = "Designationc : Software Engineer";
const companyName = "Dekko Isho Group";
const departmentName = "Department : Information Technology (IT)";
const sectionName = "Section : Software"

const Bio = () => (
    <div className='Bio'>
        <h3>Hello, I am {name} </h3>
        <p> {designation} </p>
        <p> {departmentName} </p>
        <p> {sectionName} </p>
        <p> {companyName} </p>
    </div>
);

export default Bio;