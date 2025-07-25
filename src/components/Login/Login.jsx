import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setToken } from "../../slices/authSlice";
import { authentication } from "../../services/authenticationService";
import classes from "./Login.module.css";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const token = await authentication(email, password);
        dispatch(setToken(token));
        localStorage.setItem("userToken", token);
        navigate("/home");
    };

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className={classes.loginContainer}>
            <form className={classes.loginForm} onSubmit={onSubmitHandler}>
                <input
                    className={classes.loginEmail}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={onEmailChangeHandler}
                />
                <input
                    className={classes.loginPassword}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChangeHandler}
                />
                <button className={classes.loginButton} type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
