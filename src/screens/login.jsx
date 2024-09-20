import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (email === "admim@admim" && password === "1234") {
            navigate("/home");
        }
    }

    return (
        <>
            <div className="logologin">
                <img src="Render-Auto-logo (2).png" />
                <img src="Render-Auto-nome.png" />
            </div>

            <form className="formlogin" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}