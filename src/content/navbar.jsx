import { Link } from 'react-router-dom';

export const NavBar = () =>{
    return(
        <div className="nbar">
            <Link to="/*"> <img src="/gráficos.png"/></Link>
            <Link to="/home"> <img src="/menu.png"/></Link>
            <Link to="/addrun"> <img src="/add.png"/></Link>
        </div>
    )
}