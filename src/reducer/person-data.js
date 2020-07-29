const initialState = {
    personList: [],
    personInfo: {},
    history:[]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'FETCH_PERSON_LIST':
            return{
                ...state,
                personList: action.payload
            }
        case 'FETCH_PERSON_INFO':
            if(state.history.some((item=>item.id === Number.parseInt(action.payload.id)))){
                const id = state.history.findIndex((item)=>item.id === Number.parseInt(action.payload.id));
                const historyItem = state.history[id];
                switch(id){
                    case 0:
                        return {
                            ...state,
                            personInfo: action.payload
                        }
                    default:
                        const newHistory=[
                            historyItem,
                            ...state.history.slice(0, id),
                            ...state.history.slice(id+1),
                        ]
                        return{
                            ...state,
                            personInfo: action.payload,
                            history: newHistory
                        }
                }
            } else{
                const newHistoryItem={
                    name: action.payload.name,
                    id: Number.parseInt(action.payload.id)
                }
                const newHistory = [
                    newHistoryItem,
                    ...state.history
                ]
                return{
                    ...state,
                    personInfo: action.payload,
                    history: newHistory
                }
            }
        default:
            return {
                ...state
            }
    }
};