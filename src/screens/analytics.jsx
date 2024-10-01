import React, { useState, useEffect, useContext } from 'react';
import { Header } from "../content/header"
import { NavBar } from "../content/navbar"
import { Chart } from 'primereact/chart';
import { ReaisContext } from '../contexts/reais';
import { DistanciaContext } from '../contexts/distancia';
import { CorridasContext } from '../contexts/corridas';
import { GastosContext } from '../contexts/gastos';

export const Analytics = () =>{
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const { reais } = useContext(ReaisContext);
    const { Distancia } = useContext(DistanciaContext);
    const { Corridas } = useContext(CorridasContext);
    const { combustivel, gastosExtras } = useContext(GastosContext);
    const [lucrobruto, setLucrobruto] = useState(0)

    const calcs = () => {
        const lucrob = reais - (combustivel + gastosExtras)
        setLucrobruto(lucrob)
    }

    useEffect(()=>{
        calcs();
    }, [reais, combustivel, gastosExtras, Corridas, Distancia]);

    useEffect(() => {
        const data = {
            labels: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
            datasets: [
                {
                    label: 'Sales',
                    data: [lucrobruto, 50, 30, 20],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                      ],
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
        return (
            <>
                <Header />
                    <div className="graficolucro">
                        <Chart type="bar" data={chartData} options={chartOptions} />
                    </div>
                <NavBar />
            </>
        )
    }
