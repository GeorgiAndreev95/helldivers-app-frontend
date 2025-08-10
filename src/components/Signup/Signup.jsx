import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

import { signup } from "../../services/authenticationService";
import classes from "./Signup.module.css";

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const token = useSelector((state) => state.auth.token);

    const transition = {
        duration: 0.3,
        ease: "easeInOut",
    };

    useEffect(() => {
        if (errorMsg) {
            const timer = setTimeout(() => {
                setErrorMsg("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errorMsg]);

    useEffect(() => {
        if (token) {
            navigate("/home");
        }
    }, [navigate, token]);

    const onEmailChangeHandler = (event) => setEmail(event.target.value);
    const onPasswordChangeHandler = (event) => setPassword(event.target.value);
    const onConfirmPasswordChangeHandler = (event) =>
        setConfirmPassword(event.target.value);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");

        try {
            await signup(email, password, confirmPassword);

            setSuccessMsg(
                "Account created successfully! Redirecting to login..."
            );

            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            const errorMsg = error.response.data.errors
                ? error.response.data.errors[0].msg
                : error.response.data.message;
            setErrorMsg(errorMsg);
            console.log(error);
        }
    };

    return (
        <div className={classes.signupContainer}>
            <AnimatePresence initial={false} exitBeforeEnter>
                {errorMsg && (
                    <motion.p
                        key="error-msg"
                        className={classes.errorMessage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={transition}
                    >
                        {errorMsg}
                    </motion.p>
                )}
                {successMsg && (
                    <motion.p
                        key="success-msg"
                        className={classes.successMessage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={transition}
                    >
                        {successMsg}
                    </motion.p>
                )}
            </AnimatePresence>

            <form className={classes.signupForm} onSubmit={onSubmitHandler}>
                <h1>Sign up</h1>
                <input
                    className={classes.signupEmail}
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={onEmailChangeHandler}
                    autoComplete="username"
                />
                <input
                    className={classes.signupPassword}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={onPasswordChangeHandler}
                    autoComplete="current-password"
                />
                <input
                    className={classes.signupPassword}
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChangeHandler}
                    autoComplete="off"
                />
                <button className={classes.signupButton} type="submit">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Signup;
