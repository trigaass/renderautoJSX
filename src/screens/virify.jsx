import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Verify = () => {
  const [message, setMessage] = useState("Verificando o seu e-mail...");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      fetch(`http://localhost:3001/verify-email?token=${token}`)
        .then((response) => response.json()) // O servidor agora deve redirecionar, então não é necessário usar essa parte
        .catch((error) => {
          setMessage("Erro ao verificar o e-mail.");
          console.error(error);
        });
    } else {
      setMessage("Token de verificação inválido.");
    }
  }, [location]);

  return (
    <div>
      <h1>Verificação de E-mail</h1>
      <p>{message}</p>
    </div>
  );
};