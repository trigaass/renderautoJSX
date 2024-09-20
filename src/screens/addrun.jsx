import { Buttn } from "../content/formbtn"
import { Header } from "../content/header"
import { NavBar } from "../content/navbar"
import { TextBox } from "../content/textbox"
import { TopLinks } from "../content/links"
import { useContext, useState } from "react"
import { ReaisContext } from "../contexts/reais"
import { DistanciaContext } from "../contexts/distancia"
import { useNavigate } from "react-router-dom"
import { CorridasContext } from "../contexts/corridas"

export const AddRun = () => {
    const navigate = useNavigate();
    const { setReais } = useContext(ReaisContext);
    const { setDistancia } = useContext(DistanciaContext);
    const { setCorridas } = useContext(CorridasContext);
    const [ ReaisAmount, setReaisAmount] = useState("");
    const [ DistanciaAmount, setDistanciaAmount] = useState("");

    const OnSave = (evento) => {
        evento.preventDefault(onsubmit)
        setCorridas((prevCorridas) => prevCorridas + 1);
        const reaisValue = parseFloat(ReaisAmount) || 0;
        const distanciaValue = parseFloat(DistanciaAmount) || 0;
        setReais(prev => prev + (reaisValue));
        setDistancia(prev => prev + (distanciaValue));
        navigate("/home")
    }

    return (
        <>
            <Header />
            <div className="boddy">
                <TopLinks />
                <form onSubmit={OnSave} className="addform">
                    <p>Adicionar Corrida:</p>
                    <TextBox
                        label="Valor da corrida:"
                        type="number"
                        input="insira o valor da corrida"
                        valor={ReaisAmount}
                        aoAlterado={(valor) => setReaisAmount(valor)}
                    />
                    <TextBox
                        label="Kms pecorridos"
                        type="number"
                        input="insira a kilometragem pecorrida"
                        valor={DistanciaAmount}
                        aoAlterado={(valor) => setDistanciaAmount(valor)}
                    />
                    <Buttn
                        btn="salvar"
                    />
                </form>
            </div>
            <NavBar />
        </>
    )
}