import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        fetch("http://localhost:3001/check-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (response.status === 409) {
                    throw new Error("Este email já está cadastrado.");
                }
                if (response.ok) {
                    return fetch("http://localhost:3001/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });
                } else {
                    throw new Error("Erro ao verificar e-mail.");
                }
            })
            .then(response => response.text())
            .then(data => {
                setErrorMessage("");
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error("Erro ao cadastrar:", error);
            });
        navigate("/resend")
    }

    return (
        <div className="cadastro">
            <form onSubmit={handleSubmit}>
                {errorMessage && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                        {errorMessage}
                    </div>
                )}
                <label htmlFor="email">E-mail</label>
                <input
                    className="reg"
                    required
                    id="email"
                    type="email"
                    placeholder="email@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha</label>
                <input
                    className="reg"
                    required
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>
                    <input required type="checkbox" /> li e concordo com termos de serviços
                </p>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};