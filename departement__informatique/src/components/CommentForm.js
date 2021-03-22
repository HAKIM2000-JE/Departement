import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {FormControl} from "@material-ui/core";
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: 'Yasmine KONATE',
            comment: '',
            date: ''
        };

    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=(event)=>{
        console.log(this.state)
        fetch('http://localhost:3000/notes', {
            method: 'post',
            body: JSON.stringify(this.state)
        })
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .catch(error=>{
                console.log(error)
            });
        event.preventDefault();

    }

    render() {
        return (
                <FormControl noValidate onSubmit={this.handleSubmit}>
                    <textarea rows="12"
                              value={this.state.value}
                              placeholder="Laisser un commentaire" style={{width: "400px"}}
                               onChange={this.handleChange}
                              required
                    />
                    <Button type="submit" style={{background: "#AAAAAA",}} value="Submit">Publier</Button>
                </FormControl>
        );
    }
}

export default CommentForm;
