import {combineReducers} from 'redux';

let num = (state = 1,action)=>{
    console.log(state, action);
    switch (action.type){    // 判断tYpe的值 对他进行操作
        case "ADD":
            return state + 1;
        case "REDUCE":
            return state - 1;
        default:
            return state;
    }
}

export default combineReducers({
    num
})