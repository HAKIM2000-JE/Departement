import React, {Component} from 'react';
import EMIImage from '../images/EMI__Image.jpg';
class Home extends Component {
    render() {
        return (
            <div>
                <img src={EMIImage} style={{width: '100%', height: 'auto'}} alt=""/>
                <div style={{borderRadius: '15px',
                    border: 'solid',
                    borderColor: '#F59A23',
                    maxWidth: 600,
                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#d7d7d7",
                    align: "center",
                    margin: "auto",
                    marginBottom: '100px',
                    marginTop: '100px'
                }}>
                    <p style={{textAlign: 'center'}}>
                        Bienvenue sur la plateforme de gestion du département génie
                        informatique de l’Ecole Mohammadia d’Ingenieurs
                        Cette plateforme sert de communication et d’echange de
                        documents entre les differents  membres du departement
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
