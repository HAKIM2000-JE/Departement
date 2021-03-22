import React, {Component} from 'react';
import Notemini from "./Notemini";
import Link from '@material-ui/core/Link';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import pdfFile from "../assets/ELFaddouli_Gestion_du_département.pdf";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';

class Notes extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 style={{marginLeft: '20px'}}>Notes</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px'}}>
                    <Select  native style={{ marginRight: '20px'}}>
                        <option value="">Repport de cours</option>
                        <option>Note d'examen</option>
                        <option>Sortie ou visite</option>
                        <option>Seminaire</option>
                        <option>Evenement</option>
                    </Select>
                    <div>
                        <Button size="medium"
                            color="primary"
                            startIcon={<AddIcon/>}
                        >
                            Nouvelle note
                        </Button>
                    </div>

                </div>
            <div style={{display: 'flex', marginBottom: '20px'}}>
                <Notemini/>
                <Notemini/>
                <Notemini/>
            </div>
            </div>
        );
    }
}

export default Notes;
