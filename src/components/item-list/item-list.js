/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';

const ItemList=({personList})=>{
    return (
        <ul className="list-group">
            {personList.map((person)=>{
                return (<Link key={person.id} className="list-group-item bg-dark text-white" to={`person/${person.id}`}>{person.name}</Link>)
            })}
        </ul>
    )
}

export default ItemList;