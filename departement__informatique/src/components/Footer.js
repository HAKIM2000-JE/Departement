import React from 'react'
import '../Style/Footer.css'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import EMIlogo from '../images/EMILogo.gif'
import LanguageIcon from '@material-ui/icons/Language';

function Footer() {
    return (<div>
        <div className="footer">
            <div className="footer__left">
                <div className="footer__logo">
                    <img src={EMIlogo} alt="emilogo" />
                </div>
                <span> &copy; Département Informatique</span>
            </div>
            <div className="footer__right">
                <h1>CONTACT</h1>
                <div className="footer__adress">
                    <h4>BP 765, Avenue Ibn Sina Agdal Rabat Maroc</h4>
                </div>
                <div className="footer__phone">
                    <PhoneIcon color="white"></PhoneIcon>
                    <h4>Phone: (+212) 684 25 78 02</h4>
                </div>
                <div className="footer__mail">
                    <MailIcon color="white"></MailIcon>
                    <h4>Email: ginf@emi.ac.ma</h4>
                </div>
                <div className="footer__website">
                    <LanguageIcon color="white"></LanguageIcon>
                    <h4>Site web : info.emi.ac.ma</h4>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
