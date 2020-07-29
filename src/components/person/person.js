/* eslint-disable */
import React from 'react';


const Person=({personInfo})=>{
    const keys = Object.keys(personInfo);
    return(
        <table className="table table-dark">
            <tbody>
                {keys.map((key)=>{
                        return(
                        <tr key={key}>
                            <th scope="row">{key}</th>
                            <td>{personInfo[key]}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default Person;