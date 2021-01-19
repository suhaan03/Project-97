import remove from 'lodash.remove'

export const DELETE_NOTE = 'DELETE_NOTE'
var noteId=0
export function addnote(note){
    return{
        type:ADD_NOTE,
        id:noteId++,
        note
    }
}

export function deletenote(id){
    return{
        type:DELETE_NOTE,
        payload:id
    }
}
const initialState=[]
function notesReducer(state=initialState,action){
    switch(action.type){
        case ADD_NOTE:
            return[...state,{
                id:action.id,
                note:action.note
            }]
            case DELETE_NOTE:
                const deletearray=remove (state,obj=>{
                    return obj.id!=action.payload
                })
                return deletearray
                default: return state
    }
}
export default notesReducer