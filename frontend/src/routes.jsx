import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./screens/login"
import { Analytics } from "./screens/analytics"
import { Home } from "./screens/home"
import { AddRun } from "./screens/addrun"
import { AddSpend } from "./screens/addspend"
import { AppProviders } from "./contexts/contextsprovider"
import { Cadastro } from "./screens/register"

export const AppRoutes = () => {
    return (
        <AppProviders>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Cadastro />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addrun" element={<AddRun />} />
                    <Route path="/addespend" element={<AddSpend />} />
                </Routes>
            </BrowserRouter>
        </AppProviders>
    )
}