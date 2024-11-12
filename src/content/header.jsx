import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <Link to="/home">
                <img className="logoimg" src="/Render-Auto-logo (2).png" />
                <img className="logoname" src="/Render-Auto-nome-branco.png" />
            </Link>
        </div>
    )
}