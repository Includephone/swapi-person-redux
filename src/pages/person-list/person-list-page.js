/* eslint-disable */
import React, {useEffect} from 'react';
import {getPersonList, getPersonListBySearch} from '../../actions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ItemList from '../../components/item-list';
import SearchForm from '../../components/search-form';

const PersonListPage=({personList, history, getPersonList, getPersonListBySearch})=>{
    useEffect(()=>{
        personList.length>0? null : getPersonList()
    })
    return(
        <>
            <SearchForm getPersonListBySearch={getPersonListBySearch}/>
            <ItemList personList={personList}/>
            <h2>History</h2>
            <ItemList personList={history}/>
        </>
    )
}

const mapStateToProps=(state)=>{
    return {
        personList : state.personData.personList,
        history: state.personData.history
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        getPersonList,
        getPersonListBySearch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonListPage)