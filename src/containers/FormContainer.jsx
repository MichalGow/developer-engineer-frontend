import React, { Component } from "react";

/* Import Components */
import Button from "../components/Button";
import * as estimator from '../estimator';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class FormContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            engineer: false,
            newUser: {
                skills: []
            }
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleSkillsChange = this.handleSkillsChange.bind(this);
        this.skillOptions = ['Research', 'Team work', 'Business Processes Development', 'Collaboration', 'Bachelor degree', 'Cloud Computinng',
        'Managerial Experience', 'Agile', 'Requirements Elicitation', 'DevOps', 'Report Writing', 'Software Architecture', 'Masters Degree',
        'Documentation Writing', 'OOP', 'Self-Motivated', 'Product Management', 'Penetration Testing', 'ERP', 'CI/CD Tools',
        'Troubleshooting', 'Scripting Languages', 'Unit Testing', 'Operating Systems', 'Solution Architecture', 'Network Protocols']
      }

    handleFormSubmit(e) {
        e.preventDefault();
        
        var features = []

        this.skillOptions.forEach(element => {
            features.push(+ this.state.newUser.skills.includes(element))
        });
    
        this.setState({
            engineer: estimator.estimator(features),
        });
    }

    handleSkillsChange(e) {
        this.setState(prevState => ({
            newUser: { ...prevState.newUser, skills: e}
        }));
    }
    
    handleClearForm(e) {
        e.preventDefault();

        this.setState({
            engineer: false,
            newUser: {
                skills: []
            }
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={this.handleFormSubmit}>
                    <ToggleButtonGroup 
                        type='checkbox' 
                        name='skills'
                        className="mb-2"
                        style={blockStyle}
                        onChange={this.handleSkillsChange}
                        value={this.state.newUser.skills}
                    >
                        {this.skillOptions.map(option => {
                            return (
                                <ToggleButton key={option} value={option} style={toggleButonStyle}>{option}</ToggleButton>
                            );
                        })}
                    </ToggleButtonGroup>
                    {/* Skills, styling from https://react-bootstrap.github.io/components/buttons/
                        https://www.pluralsight.com/guides/working-with-react-bootstrap-buttons */}

                    <div className="text-center my-4">
                        <Button
                            action={this.handleFormSubmit}
                            type={"primary"}
                            title={"Submit"}
                            style={buttonStyle}
                        />
                        {/* Submit */}

                        <Button
                            action={this.handleClearForm}
                            type={"secondary"}
                            title={"Clear"}
                            style={buttonStyle}
                        />
                        {/* Clear the form */}
                    </div>
                </form>

                <h2 className="my-3 text-center text-secondary">Result</h2>

                <div className="results text-center my-3">
                        {this.state.engineer ? "You are engineer." : "You are developer."}
                </div>
                {/* Results */}
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

const blockStyle = {
    display: "block",
    textAlign: "center"
};

const toggleButonStyle = {
    margin: "0.5em"
};

export default FormContainer;