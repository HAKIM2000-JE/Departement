import React, {useEffect, useState} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {ListSubheader} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import pdfFile from '../assets/ELFaddouli_Gestion_du_département.pdf';
import CommentForm from "./CommentForm";

function NoteDetails() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/notes")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (

            <Container>
                        <div>
                            <Typography color="textPrimary" gutterBottom variant="h5" align="center" style={{ marginTop: "30px"}}>
                                Rattrapage de compilation
                            </Typography>
                            <div style={{
                                borderRadius: '15px',
                                border: 'solid',
                                borderWidth: 'thin',
                                borderColor: '#000000',
                                maxWidth: 600,
                                boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                                backgroundColor: "#f2f2f2",
                                align: "center",
                                margin: "auto",
                                marginBottom: '20px'
                            }}>

                                <div>
                                    <List className>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                                <AccountCircleSharpIcon color="disabled" style={{fontSize: "50"}}/>
                                            </ListItemAvatar>
                                            <ListItemText>
                                                <Typography color="textPrimary" variant="subtitle1">
                                                    Fatima Zahra BELOUADHA
                                                </Typography>
                                                <Typography color="textSecondary" variant="subtitle2">
                                                    Chef de département
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                    <div style={{ marginLeft: '50px', marginRight: '20px', backgroundColor: "#fff"}}>

                                        <CardContent>
                                            <Typography component="p">Bonjour,Voici ci-joint une note concernant le rattrapage de compilation. Amicalement!</Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography>Pieces jointes</Typography>
                                            <List>
                                                <ListItem>
                                                    <ListItemAvatar>
                                                        <PictureAsPdfIcon color="secondary" fontSize="large"/>
                                                    </ListItemAvatar>
                                                    <listItemText>
                                                        <Link component="button" color="primary"><a
                                                            href={pdfFile}>Rattrapage de compilation</a></Link>
                                                    </listItemText>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                    </div>
                                </div>
                                    <div>
                                        <List component="nav">
                                            <ListSubheader component="div" style={{ marginLeft: '50px'}}>
                                                Commentaires
                                            </ListSubheader>

                                                <ListItem alignItems="flex-start" style={{marginLeft: '70px'}}>
                                                    <ListItemAvatar>
                                                        <AccountCircleSharpIcon color="disabled"
                                                                                style={{fontSize: "50"}}/>
                                                    </ListItemAvatar>
                                                    <ListItemText primary="Yasmine KONATE" secondary="Bien reçu! Merci"/>
                                                </ListItem>
                                        </List>
                                        <div style={{ marginLeft: '50px', marginBottom: '30px'}}>
                                            <CommentForm/>
                                        </div>
                                    </div>
                            </div>
                        </div>
            </Container>
    );
}

export default NoteDetails;
