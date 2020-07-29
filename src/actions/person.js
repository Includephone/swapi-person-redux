import axios from 'axios';
const getPersonList=()=>(dispatch)=>{
    axios.get('http://swapi.dev/api/people/')
    .then((result)=>{
        const data = result.data.results.map((person)=>{
            return {
                ...person,
                id: person.url.match(/\/([0-9]*)\/$/)[1]
            }
        });
        dispatch({
            type: 'FETCH_PERSON_LIST',
            payload: data
        })
    })
    .catch((err)=>console.error(err))
}

const getPersonListBySearch=(query)=>(dispatch)=>{
    axios.get(`http://swapi.dev/api/people/?search=${query}`)
    .then((result)=>{
        const data = result.data.results.map((person)=>{
            return {
                ...person,
                id: person.url.match(/\/([0-9]*)\/$/)[1]
            }
        });
        dispatch({
            type:'FETCH_PERSON_LIST',
            payload: data
        })
    })
    .catch((err)=>console.error(err));
}

const getPersonInfo=(id)=>(dispatch)=>{
    axios.get(`http://swapi.dev/api/people/${id}/`)
    .then((result)=>{
        const data = {
            ...result.data,
            id: result.data.url.match(/\/([0-9]*)\/$/)[1]
        }
        dispatch({
            type:'FETCH_PERSON_INFO',
            payload: data
        })
    })
    .catch((err)=>console.error(err));
}

export {
    getPersonList,
    getPersonListBySearch,
    getPersonInfo
}