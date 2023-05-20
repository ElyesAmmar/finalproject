import { ADD_CLIENT_ORDER, ADD_PRODUCTS_ORDER, GET_ONECLIENT } from "../constant/actionsTypes";

const initialeState = {
    orders:[],
    order:{},
    products:[],
    product:{},
    client:{},
    errors:[]
}

export const orderReducer = (state=initialeState, {type,payload})=>{
    switch (type) {
        case ADD_PRODUCTS_ORDER:
            return {...state, products:  payload}
        case ADD_CLIENT_ORDER:
            return {...state, client: payload}
        default:
            return state
    }
}