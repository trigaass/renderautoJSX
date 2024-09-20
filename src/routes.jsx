import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddRun } from "./screens/addrun"
import { Home } from "./screens/home"
import { ReaisProvider } from "./contexts/reais"
import { DistanciaProvider } from "./contexts/distancia"
import { CorridasProvider } from "./contexts/corridas"
import { AddSpend } from "./screens/addspend"
import { GastosProvider } from "./contexts/gastos"
import { Login } from "./screens/login"

export const AppRoutes = () => {
    return (
        <GastosProvider>
            <CorridasProvider>
                <DistanciaProvider>
                    <ReaisProvider>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/addrun" element={<AddRun />} />
                                <Route path="/addespend" element={<AddSpend />} />
                            </Routes>
                        </BrowserRouter>
                    </ReaisProvider>
                </DistanciaProvider>
            </CorridasProvider>
        </GastosProvider>
    )
}