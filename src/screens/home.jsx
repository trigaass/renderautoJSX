import { useContext, useEffect, useState } from "react"
import { Boxcard, ResumeBox } from "../content/card"
import { Header } from "../content/header"
import { NavBar } from "../content/navbar"
import { PainelBar } from "../content/painel"
import { ReaisContext } from "../contexts/reais"
import { DistanciaContext } from "../contexts/distancia"
import { CorridasContext } from "../contexts/corridas"
import { GastosContext } from "../contexts/gastos"
import { ButtnHoras, ContadorHoras } from "../content/contadorhoras"

export const Home = () => {
    const { reais } = useContext(ReaisContext);
    const { Distancia } = useContext(DistanciaContext);
    const { Corridas } = useContext(CorridasContext);
    const { combustivel, gastosExtras } = useContext(GastosContext);
    const [contando, setContando] = useState(false);
    const [lucrobruto, setLucrobruto] = useState(0)
    const [lucropcorrida, setLucropcorrida] = useState(0)
    const [lucropquilometro, setLucropquilometro] = useState(0)
    const [lucrophora, setLucrophora] = useState(0)
    const [horasTrabalhadas, setHorasTrabalhadas] = useState(0);

    const calcs = () => {
        const lucrob = reais - (combustivel + gastosExtras)
        setLucrobruto(lucrob)
        //distancia
        if (Distancia > 0) {
            const lucropkm = (reais - (combustivel + gastosExtras)) / Distancia
            setLucropquilometro(lucropkm)
        } else {
            const lucropkm = 0
            setLucropquilometro(lucropkm)
        }
        //corridas
        if (Corridas > 0) {
            const lucropco = (reais - (combustivel + gastosExtras)) / Corridas
            setLucropcorrida(lucropco)
        } else {
            const lucropco = 0
            setLucropcorrida(lucropco)
        }
        //hora
        if (horasTrabalhadas > 0){
            const lucroph = (reais - (combustivel + gastosExtras)) / <ContadorHoras/>
            setLucrophora(lucroph)
        }else{
            const lucroph = 0
            setLucrophora(lucroph)
        }
    };

    useEffect(() => {
        calcs();
    }, [reais, combustivel, gastosExtras, Corridas, Distancia]);

    const iniciarContagem = () => setContando(true);
    const pararContagem = () => setContando(false);
    const resetarContagem = () => {
        setContando(false);
        setHorasTrabalhadas(0);
    };

    return (
        <>
            <Header />
            <div className="boddy">
                <PainelBar
                    h2={reais.toFixed(2)}
                    horas={<ContadorHoras contando={contando} setContando={setContando} />}
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
                <div className="resumes">
                    <h1>Parametro Geral:</h1>
                    <ResumeBox
                        legenda="Lucro:"
                        valor={lucrobruto.toFixed(2)}
                    />
                    <ResumeBox
                        legenda="Lucro por distancia:"
                        valor={lucropquilometro.toFixed(2)}
                    />
                    <ResumeBox
                        legenda="Lucro por hora:"
                        valor={lucrophora.toFixed(2)}
                    />
                    <ResumeBox
                        legenda="Lucro por corrida:"
                        valor={lucropcorrida.toFixed(2)}
                    />
                </div>
                <ButtnHoras
                    contando={contando}
                    iniciar={iniciarContagem}
                    parar={pararContagem}
                    resetar={resetarContagem}
                />
            </div>
            <NavBar />
        </>
    )
}