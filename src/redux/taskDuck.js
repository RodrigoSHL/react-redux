import axios from "axios";

//const
const initialData  = {
    data : []
}

const GET_TASK_OK = 'GET_TASK_OK';

//reducer
export default function taskReducer(state = initialData, action ){
    switch(action.type){
        case GET_TASK_OK:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
export const getTaskAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`http://localhost:3000/tasks`);
        dispatch({
            type: GET_TASK_OK,
            payload: res
        })
    } catch (error) {
        console.log('error:', error)
    }
}