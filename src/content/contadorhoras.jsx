import { useEffect, useState } from "react";

export const ContadorHoras = ({ contando, setContando }) => {
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);

    useEffect(() => {
        let intervalo = null;
        if (contando) {
            intervalo = setInterval(() => {
                setMinutos(prevMinutos => {
                    if (prevMinutos === 59) {
                        setHoras(prevHoras => {
                            const novasHoras = prevHoras + 1;
                            onUpdateHoras(novasHoras);
                            return novasHoras;
                        });
                        return 0;
                    } else {
                        return prevMinutos + 1;
                    }
                });
            }, 60000);
        } else {
            clearInterval(intervalo);
        }

        return () => clearInterval(intervalo);
    }, [contando]);

    return (
        <div>
            <h1 className="mostrador">
                {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}
            </h1>
        </div>
    );
};

export const ButtnHoras = ({ contando, iniciar, parar, resetar }) => {
    return (
        <div>
            {contando ? (
                <>
                    <button onClick={parar}>Parar</button>
                    <button onClick={resetar}>Resetar</button>
                </>
            ) : (
                <button onClick={iniciar}>Iniciar</button>
            )}
        </div>
    );
};