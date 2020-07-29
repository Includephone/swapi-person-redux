import React, {useState} from 'react';

const SearchForm=({getPersonListBySearch})=>{
    const [searchValue, changeValue] = useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        getPersonListBySearch(searchValue);
        changeValue('');
    }
    return(
        <form className="form-inline my-2 ml-2 justify-content-center" onSubmit={onSubmit}>
            <input className="form-control w-75" type="text" value={searchValue} onChange={(e)=>changeValue(e.target.value)}/>
            <button className="btn btn-info w-25">Search</button>
        </form>
    )
}

export default SearchForm;