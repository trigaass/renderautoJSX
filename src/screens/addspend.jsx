import { Buttn } from "../content/formbtn"
import { Header } from "../content/header"
import { NavBar } from "../content/navbar"
import { TextBox } from "../content/textbox"
import { TopLinks } from "../content/links"
import { useNavigate } from "react-router-dom"
import { CaTin, SelectionBox } from "../content/selectbox"
import { useContext, useState } from "react"
import { GastosContext } from "../contexts/gastos"

export const AddSpend = () => {
    const navigate = useNavigate();
    const { setCombustivel, setGastosExtras } = useContext(GastosContext);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [amount, setAmount] = useState("");

    const OnSave = (evento) => {
        evento.preventDefault(onsubmit)
        if (!selectedCategory || !amount) {
            return;
        }
        if (selectedCategory === "Combustivel") {
            setCombustivel(prev => prev + parseFloat(amount));
        } else if (selectedCategory === "Diversos") {
            setGastosExtras(prev => prev + parseFloat(amount));
        }
        navigate("/home")
    }

    return (
        <>
            <Header />
            <div className="boddy">
                <TopLinks />
                <form onSubmit={OnSave} className="addform">
                    <p>Adicionar Gasto:</p>
                    <SelectionBox
                        item={CaTin}
                        onChange={(value) => setSelectedCategory(value)}
                        value={selectedCategory}
                    />
                    <TextBox
                        label="adicione o valor"
                        type="number"
                        input="insira o valor"
                        valor={amount}
                        aoAlterado={(valor) => setAmount(parseFloat(valor) || 0)}
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