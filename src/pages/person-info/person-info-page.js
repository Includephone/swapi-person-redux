import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPersonInfo} from '../../actions';
import Person from '../../components/person';
import Loading from '../../components/loading';

const PersonInfoPage=({match, personInfo, getPersonInfo})=>{
    const [loading, changeLoading] = useState(true);
    const id = match.params.id;
    useEffect(()=>{
        personInfo.id === id? changeLoading(false) : getPersonInfo(id);
    }, [personInfo.name]);
    const personInfoFiltered = Object.assign({}, personInfo);
    const filter = ['films', 'homeworld', 'vehicles', 'starships', 'species', 'created', 'edited', 'url', 'id'];
    filter.forEach((e)=>delete personInfoFiltered[e]);
    return(
        loading? <Loading/> : <Person personInfo={personInfoFiltered}/>
    )
}

const mapStateToProps=(state)=>{
    return{
        personInfo: state.personData.personInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getPersonInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonInfoPage)