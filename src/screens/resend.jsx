import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Resend = () => {
    const location = useLocation();
    const email = location.state?.email;
    const [message, setMessage] = useState("");

    const handleResend = () => {
        fetch("http://localhost:3001/resend-verification", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.text())
            .then((data) => {
                setMessage(data);
            })
            .catch((error) => {
                setMessage("Erro ao reenviar o e-mail.");
                console.error(error);
            });
    };

    return (
        <div>
            <div>
                <p>Acesse seu email para verificar conta ou renvie o email com o link abaixo</p>
                <button onClick={handleResend}>Reenviar e-mail de verificação</button>
            </div>
        </div>
    );
};