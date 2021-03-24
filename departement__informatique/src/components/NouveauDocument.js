import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import '../Style/NouveauDocument.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const NouveauDocument = (props) => {
    
    const [nouveauDocument, setNouveauDocument] = useState(false);
    const [promotions, setPromotions] = useState([]);
    const [typeDocument, setTypeDocument] = useState("");
    const [document, setDocument] = useState(null);
    const [titre, setTitre] = useState("");
    

    

    const openModal = () =>{
        setNouveauDocument(true);
    };
    const closeModal = ()=>{
        setNouveauDocument(false);
        setPromotions([
            {id: 1, value: "Premiere Annee", isChecked: false},
            {id: 2, value: "Deuxieme Annee", isChecked: false},
            {id: 3, value: "Troisieme Annee", isChecked: false},
        ]);
        setTypeDocument("");
        setDocument("");
        setTitre("");
    };
    useEffect(() => {
        Modal.setAppElement('body');
        let promotions = [
            {id: 1, value: "Premiere Annee", isChecked: false},
            {id: 2, value: "Deuxieme Annee", isChecked: false},
            {id: 3, value: "Troisieme Annee", isChecked: false},
          ];
      
          setPromotions(
            promotions.map(d => {
              return {
                select: false,
                id: d.id,
                value: d.value,
                isChecked: d.select,
              };
            })
          );
    }, []);
    
    
    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        if (name === "document"){
            const value = target.files[0];
            setDocument(value);
        }else{
            const value = target.value;
            name === "typeDocument" ? setTypeDocument(value) : setTitre(value);
        }
    };

    const addDoc = (event)=>{
        
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("file",document);
        formData.append('titre', titre);
        formData.append("typeDocument", typeDocument);
        formData.append("promotions", JSON.stringify(promotions));

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8081/upload/", formData);
        closeModal();
    };



    
        return (
            <div>
                <Button size="medium"
                            color="primary"
                            startIcon={<AddIcon/>}
                            onClick={openModal}
                >
                    Nouveau Document
                </Button>
                
                {
                    nouveauDocument && 
                    (<Modal  isOpen={true} onRequestClose={closeModal}>
                        <div className="modal-add-doc">
                            <div className="header-add-doc">
                                <AddIcon/>{" "}<h2>Nouveau Document</h2>
                            </div>
                            <hr/>
                            <div className="content">
                                
                                <form>
                                    <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="promotion">Promotion</label>
                                    </div>
                                    <div className="col-75">
                                        <div className="row">
                                    {promotions.map((d, i) => (
                                        <div className="col-25" key={d.id}>
                                            <input
                                            onChange={event => {
                                                let checked = event.target.checked;
                                                setPromotions(
                                                    promotions.map(data => {
                                                    if (d.id === data.id) {
                                                        data.select = checked;
                                                        data.isChecked = checked;
                                                    }
                                                    return data;
                                                })
                                                );
                                            }}
                                            type="checkbox"
                                            checked={d.select}
                                            ></input>
                                            <label key={d.id} htmlFor={d.value}>{d.value}</label>
                                        </div>
                                    ))}
                                        {/* {
                                        promotions.map((promotion) => {
                                            return (<CheckBox handleCheckElement={handleCheckElement}  {...promotion} />)
                                        })
                                        } */}
                                        </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="titre">Titre</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="text" id="titre" name="titre" placeholder="Titre" onChange={handleChange} required/>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="typeDocument">Type du document</label>
                                    </div>
                                    <div className="col-75">
                                        <select id="typeDocument" name="typeDocument" onChange={handleChange} required>
                                        <option value="AUTRE">Autre</option>
                                        <option value="EMPLOI_DU_TEMPS">Emploi du temps</option>
                                        <option value="NOTES_SEMINAIRE">Note de seminaire</option>
                                        <option value="NOTES_EVENEMENT">Note d'evenement</option>
                                        <option value="NOTES_DE_SORTIE">Note de sortie</option>
                                        <option value="REPPORT_DU_COURS">Repport du cours</option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="document">Document</label>
                                    </div>
                                    <div className="col-75">
                                        <input type="file" name="document" onChange={handleChange} required/>
                                    </div>
                                    <hr/>
                                    </div>
                                    <div className="row">
                                    <input type="button" className="submit" onClick={addDoc} value="Ajouter"/>
                                    <input type="button" className="annuler" onClick={closeModal} value="Annuler"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>)
                }
                
            </div>

        )
    
}

export default NouveauDocument;