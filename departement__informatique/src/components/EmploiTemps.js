import axios from 'axios';
import React,{useState} from 'react'
import DocumentD from './Document'

const EmploiTemps = (props) => {
    const [promotion, setPromotion] = useState("Premiere Annee");
    const [nomDocument, setNomDocument] = useState(null);

    
    const afficherDocument =  (e) => {
        axios.get('https://dept-info.herokuapp.com/document', {
            params: {
              promotion: promotion,
              document: "EMPLOI_DU_TEMPS",
            }
          }).then(res => {
            //console.log(res.data[0].titre);
            //Parse if it a json object
            const noms = [];
            res.data.forEach((doc) => noms.push(doc.titre));
            console.log(noms);
            setNomDocument(noms);

          });
    }

   
    return (
        <div className="content">
            <div className="row">
                <div className="col-10">
                    <label htmlFor="promotion">Promotion</label>
                </div>
                <div className="col-10">
                    <select id="promotion" name="promotion" onChange={
                        (e) =>{
                            const selectedPromotion = e.target.value;
                            setPromotion(selectedPromotion);
                        }
                    }>
                    <option value="Premiere Annee">Premiere Annee</option>
                    <option value="Deuxieme Annee">Deuxieme Annee</option>
                    <option value="Troisieme Annee">Troisieme Annee</option>
                    </select>
                </div>
                <div className="col-10">
                    <input type="button" className="submit" onClick={afficherDocument} value="Afficher"/>
                </div>
                
                
                
                
            </div>
            <div>
                {
                    nomDocument && nomDocument.map((nom) => {
                        return (<DocumentD  key={Math.random().toString(36).substring(2)} nomDocument={nom}  />)
                    })
                }
            </div>
            
        </div>
        
    )
}

export default EmploiTemps