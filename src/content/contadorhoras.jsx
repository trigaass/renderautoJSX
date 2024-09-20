import { useEffect, useState } from "react";

export const ContadorHoras = () => {

    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [contando, setContando] = useState(false);

    useEffect(() => {
        let intervalo = null;
        if (contando) {
            intervalo = setInterval(() => {
                setMinutos(prevMinutos => {
                    if (prevMinutos === 59) {
                        setHoras(prevHoras => prevHoras + 1);
                        return 0;
                    } else {
                        return prevMinutos + 1;
                    }
                });
            }, 60000);
        } else if (!contando && minutos !== 0) {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [contando, minutos]);

    const iniciarContagem = () => {
        setContando(true);
    };

    const pararContagem = () => {
        setContando(false);
    };

    const resetarContagem = () => {
        setContando(false);
        setHoras(0);
        setMinutos(0);
    };

    return (
        <div>
            <h1 className="mostrador">
                {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}
            </h1>
        </div>
    );
}

export const ButtnHoras = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick}>Iniciar</button>
            <button onClick={onClick}>Parar</button>
        </div>
    )
}