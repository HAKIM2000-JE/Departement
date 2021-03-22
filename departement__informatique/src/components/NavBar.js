import React from 'react'
import EMIlogo from '../images/EMILogo.gif'
import LoginImg from '../images/login__img.png'
import '../Style/navbar.css';
import Button from '@material-ui/core/Button';
import {Link, BrowserRouter as Router} from 'react-router-dom';


function Navbar() {
    return (
        <Router>
        <div className="navbar" >
            <div className="navbar__logo">
                <img src={EMIlogo} alt="" />
            </div>

            <div className="navbar__menu">
                <Link to="/Home" className="nav-link" component={Button}>Accueil</Link>
                <Link to="/departement_informatique" component={Button} className="nav-link">Département Informatique</Link>
                <Link to="/TableauAffichage" component={Button} className="nav-link">Tableau d'affichage</Link>
                <Link to="/" component={Button} className="nav-link">Documents administratifs</Link>
                <Link to="/" component={Button} className="nav-link">stage</Link>

            </div>

            <div className="navbar__SearchAavatar">
                <input  placeholder="Search ..." type="text"/>
                <img src={LoginImg} alt=""/>
            </div>


        </div>
        </Router>
    )
}

export default Navbar
