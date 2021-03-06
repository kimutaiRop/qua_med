import axios from "axios";
import * as actionTypes from "./actionType";
import {HOST_URL} from "../../settings";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (username, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username
    };
};
export const SignUpSuccess = (message) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        message: message
    };
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("expirationDate");
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        let data = {};
        if (pattern.test(username)) {
            data = {
                email: username,
                password: password
            }
        } else {
            data = {
                username: username,
                password: password
            }
        }
        axios
            .post(`${HOST_URL}/rest-auth/login/`, data)
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000 * 240);
                localStorage.setItem("token", token);
                localStorage.setItem("expirationDate", expirationDate);
                dispatch(authSuccess(res.data.user.username, token));
                localStorage.setItem("username", res.data.user.username,);
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.non_field_errors))

            });
    };
};

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios
            .post(`${HOST_URL}/rest-auth/registration/`, {
                username: username,
                email: email,
                password1: password1,
                password2: password2
            })
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem("username", username);
                localStorage.setItem("expirationDate", expirationDate);
                dispatch(SignUpSuccess(res.data.detail));
            })
            .catch(err => {
                console.log(err.response.data);
                dispatch(authFail(err.response.data))
            });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(username, token));
                dispatch(
                    checkAuthTimeout(
                        (expirationDate.getTime() - new Date().getTime()) / 1000
                    )
                );
            }
        }
    };
};