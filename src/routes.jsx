import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./screens/login"
import { Analytics } from "./screens/analytics"
import { Home } from "./screens/home"
import { AddRun } from "./screens/addrun"
import { AddSpend } from "./screens/addspend"
import { AppProviders } from "./contexts/contextsprovider"
import { Cadastro } from "./screens/register"
import { Verify } from "./screens/virify"
import { Resend } from "./screens/resend"

export const AppRoutes = () => {
    return (
        <AppProviders>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Cadastro />} />
                    <Route path="/verify" element={ <Verify />} />
                    <Route path="/resend" element={<Resend />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addrun" element={<AddRun />} />
                    <Route path="/addespend" element={<AddSpend />} />
                </Routes>
            </BrowserRouter>
        </AppProviders>
    )
}