import { useContext } from "react"
import { Boxcard, ResumeBox } from "../content/card"
import { Header } from "../content/header"
import { NavBar } from "../content/navbar"
import { PainelBar } from "../content/painel"
import { ReaisContext } from "../contexts/reais"
import { DistanciaContext } from "../contexts/distancia"
import { CorridasContext } from "../contexts/corridas"
import { GastosContext } from "../contexts/gastos"
import { ButtnHoras } from "../content/contadorhoras"

export const Home = () => {
    const { reais } = useContext(ReaisContext);
    const { Distancia } = useContext(DistanciaContext);
    const { Corridas } = useContext(CorridasContext);
    const { combustivel, gastosExtras } = useContext(GastosContext);

    return (
        <>
            <Header />
            <div className="boddy">
                <PainelBar
                    h2={reais.toFixed(2)}
                />
                <p>Resumo Diario:</p>
                <section className="cards">
                    <Boxcard
                    id="reaisInput"
                    imagem="km.png"
                    valor={Distancia.toFixed(2)}
                    legenda="Kms pecorridos"
                    />
                    <Boxcard
                    id="distanciaInput"
                    imagem="corridas.png"
                    valor={Corridas}
                    legenda="corridas realizadas"
                    />
                    <Boxcard
                    imagem="combustivel.png"
                    valor={combustivel.toFixed(2)}
                    legenda="Combustivel"
                    />
                    <Boxcard
                    imagem="extras.png"
                    valor={gastosExtras.toFixed(2)}
                    legenda="gastos extras"
                    />
                </section>
                <ButtnHoras />
                <ResumeBox />
            </div>
            <NavBar />
        </>
    )
}