import { useState } from "react";
import { useDispatch } from "react-redux";

import { setToken } from "../../slices/authSlice";
import { authentication } from "../../services/authenticationService";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const token = await authentication(email, password);
        dispatch(setToken(token));
        localStorage.setItem("userToken", token);
    };

    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value);
    };
    const onPasswordChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                name="email"
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={onEmailChangeHandler}
            />
            <input
                name="password"
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={onPasswordChangeHandler}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
