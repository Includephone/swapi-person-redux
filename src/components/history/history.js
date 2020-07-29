import React from 'react';
import {connect} from 'react-redux';

const History=()=>{

}

const mapStateToProps=(state)=>{
    return{
        history: state.personData.history
    }
}

export default connect(mapStateToProps)(History);