import React from 'react'
import LoginImg from '../images/login__img.png'
import '../Style/sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
              <div className="sidebar__Account">
                  
                   <div className="container__img">
                       <img src={LoginImg}  alt=""/>
                      
                   </div>

                   <div className="container__text">
                    <h5>NOUR-EDDINE EL FADDOUL</h5>
                    <p>Professeur</p>
                    <span>Departement Informatique </span>

                   </div>
              </div>
              <div className="sidebar__Promotion">
                   <div className="sidebar__promotion__title">
                       <h5>Promtions</h5>
                   </div>
                   <hr/>
                   <div className="sidebar__promotion__text">
                        <span>Première année</span>
                        <span>Deuxième année</span>
                        <span>Troisième année</span>
                   </div>

                
              </div>
            <div className="sidebar__Note sidebar__Promotion">
                <div className="sidebar__Note__title sidebar__promotion__title">
                    <h5>Notes</h5>
                </div>
                <hr />
                <div className=" sidebar__Note__text sidebar__promotion__text">
                    <span>Rattrapage Compilation</span>
                    <span>Modification emploi du temps</span>
                    <span>Deliberation S3</span>
                </div>


            </div>
     
        </div>
    )
}

export default Sidebar
