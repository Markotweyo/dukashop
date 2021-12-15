import { publicRequest } from "../requestMethod";
import { loginStart, loginFailure, loginSuccess } from "./userRedux";

export const login= async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data)) //Sending user Information such as Email, Usernam, etc from backend
        
    } catch (error) {
        dispatch(loginFailure())
    }
}