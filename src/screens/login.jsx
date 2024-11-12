import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else if (response.status === 401) {
                    throw new Error("E-mail ou senha incorretos, ou e-mail não verificado.");
                } else {
                    throw new Error("Erro ao fazer login. Tente novamente mais tarde.");
                }
            })
            .then(data => {
                setErrorMessage("");
                alert(data);
                navigate("/home"); // Redireciona para a página home
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error("Erro ao fazer login:", error);
            });
    }

    return (
        <>
            <div className="logologin">
                <img src="Render-Auto-logo (2).png" />
                <img src="Render-Auto-nome.png" />
            </div>

            <form className="formlogin" onSubmit={handleSubmit}>
                {errorMessage && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                        {errorMessage}
                    </div>
                )}
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

                <Link to="/register" className="registerlink"> Não tem conta? cadastre-se </Link>
                
            </form>
        </>
    );
};