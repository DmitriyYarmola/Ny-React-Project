let initialState = {

}

type InitialStateType = typeof initialState
export const sideBarReducer = (state = initialState, action: any):InitialStateType => {
    return {...state}
}

export default sideBarReducer