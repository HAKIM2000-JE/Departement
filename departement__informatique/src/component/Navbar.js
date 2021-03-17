import React from 'react'
import EMIlogo from '../images/EMILogo.gif'
import LoginImg from '../images/login__img.png'
import '../Style/navbar.css'


function Navbar() {
    return (
        <div className="navbar" >
             <div className="navbar__logo">
                 <img src={EMIlogo} alt="" />
             </div>

             <div className="navbar__menu">
                <h4>Accueil</h4>
                <h4>Departement Informatique </h4>
                <h4>Tableau D'affichage</h4>
                <h4>Documents administratis</h4>
                <h4>Stage</h4>

             </div>

             <div className="navbar__SearchAavatar">
                  <input  placeholder="Search ..." type="text"/>
                  <img src={LoginImg} alt=""/>

                  
             </div>

            
        </div>
    )
}

export default Navbar
