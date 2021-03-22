import { Button } from '@material-ui/core'
import React from 'react'
import '../Style/Notemini.css'
import {Link} from "react-router-dom";
import NoteDetails from "./noteDetails";
function Notemini() {
    return (

        <div className="notemini" >
            <div className="notemini__cadre">
                <div className="notemini__titre">
                    <h1>Rattrapage Compilation</h1>
                    <span>Publié le 13/03/2021 à 10:00</span>
                </div>
                <div className="notemini__contenu">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit quia. Ipsam, nostrum nam aspernatur dolores accusantium soluta numquam expedita unde, aperiam, vitae autem ipsa at doloremque repellat eveniet asperiores!</p>
                </div>
                <div className="notemini__btns">
                    <button className="btn__modifier">Modifier</button>
                    <button className="btn__supprimer">Supprimer</button>
                </div>
            </div>
            <div></div>
            <Link className="btn__read" to={"/NoteDetails"} component={Button} variant="contained" color='primary'
            style={{background: '#1899DA',
                border: '1px solid',
                marginTop: '10px',
                color: '#fff',
                fontSize: 'large',
                width: '150px',
                height: '50px',
                textTransform: 'none',
                borderRadius: '10px'}}
            >Lire la suite</Link>
        </div>

    )
}

export default Notemini
