const INITIAL_STATE={
    id:0,
    username:'',
    isverified:'',
    email:'',
    isLogin:false,
    isLoading:false,
    cart:[]
}

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {...state, isLogin:true,...action.payload,isLoading:false,cart:action.cart}
        
        case 'ERROR':
            return {...state,isLoading:false}


        case 'LOADING':
            return {...state,isLoading:true}

        case 'LOGOUT':
            return INITIAL_STATE
        
        case 'ADDTOCART':
            return {...state,cart:action.cart}

        case 'LOGINTEST':
            return {...state,isLoading:false,isLogin:true,username:action.payload}
    
        default:
            return state
    }
}