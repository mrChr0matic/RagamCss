import './styles.scss'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Navbar(){
    const style={
        "text-decoration":"none",
        "color":"#000"
    }
    return (
        <div className="navbar">
            <Logo/>
            <div className="navbar-items">
                <Link to='/' style={style}>HOME</Link>
                <Link to='/contact' style={style}>CONTACT US</Link>
            </div>
        </div>
    )
}