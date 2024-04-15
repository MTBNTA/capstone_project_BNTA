import { useState } from "react";

const LoginForm = () => {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <>
            <h2>Login Form:</h2>

            <form>
                <label htmlFor="emailAddress-field">Email Address</label>
                <input
                    type="text"
                    placeholder="Email Address"
                    id="emailAddress-field"
                    required
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                />
                <label htmlFor="password-field">Password</label>
                <input
                    type="text"
                    placeholder="Password"
                    id="password-field"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </form>
        </>
     );
}
 
export default LoginForm;