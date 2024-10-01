import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AddRun } from "../screens/addrun"
import { Home } from "../screens/home"
import { AddSpend } from "../screens/addspend"
import { Login } from "../screens/login"
import { Analytics } from "../screens/analytics"
import { AppProviders } from "../contexts/contextsprovider"

export const AppRoutes = () => {
    return (
        <AppProviders>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addrun" element={<AddRun />} />
                    <Route path="/addespend" element={<AddSpend />} />
                </Routes>
            </BrowserRouter>
        </AppProviders>
    )
}