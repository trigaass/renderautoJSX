import { ContadorHoras } from "./contadorhoras"

export const PainelBar = (props) => {
    return (
        <div className="painelbar">
            <div className="painelsado">
                <h1>Saldo do dia:</h1>
                <h1>R$ {props.h2}</h1>
            </div>

            <div className="barrabranca" />

            <div className="painelhoras">
                <h1>Horas rodando:</h1>
                <div>{props.horas}</div>
            </div>
        </div>
    )
}

