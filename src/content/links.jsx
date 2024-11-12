import { NavLink } from "react-router-dom"

export const TopLinks = () => {
    return (
        <div className="links">
            <NavLink to="/addrun" className={({ isActive }) => isActive ? 'link active' : 'link'}> Corridas </NavLink>
            <NavLink to="/addespend" className={({ isActive }) => isActive ? 'link active' : 'link'}> Gasto </NavLink>
        </div>
    )
}