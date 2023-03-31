const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER/LOGIN":
            localStorage.setItem("token", payload.token)
            return {...state, authStatus: true}
            
        // case 2:
        //     return
        default:
            return state;
    }
}

export default userReducer;