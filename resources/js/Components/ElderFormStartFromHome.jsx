import React, { Component } from "react";
import AddressStartFromHome from "./AddressStartFromHome";
import ElderAge from "./ElderAge";
import ElderCareTopicsStartFromHome from "./ElderCareTopicsStartFromHome";
import Duration from "./Duration";

export class ElderFormStartFromHome extends Component {
    
    state = {
        step: 1,
        patient_name: "",
        address: "",
        city: '',
        phone: "",
        startDate: null,
        endDate: "",
        dutyAssign: "",
        patientAge: "",
        needs: [],
        care: 'elder',
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };
    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    // Handle fields change
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    // Handle date change
    handleDate = (input) => (e) => {
        this.setState({ [input]: e });
    };

    // Handling The topics choose by customer
    handleCareTopics = (input) => (e) => {
        const needs = this.state.needs;
        const index = needs.indexOf(e.target.value);
        if (index === -1) {
            this.setState({ [input]: [...needs, e.target.value] });
        } else {
            this.setState({
                [input]: needs.filter(
                    (topic) => topic !== e.target.value
                ),
            });
        }
    };

   
    render() {
        const { step } = this.state;
        const skillTopics = this.props.careTopics;
        const careTopics = skillTopics.map(topic=>(
            topic.topic
        ));
        const {      
            patient_name,
            address,
            city,
            phone,
            startDate,
            endDate,
            dutyAssign,
            patientAge,
            care,
            needs,
        } = this.state;
        const values = {
            patient_name,
            address,
            city,
            phone,
            startDate,
            endDate,
            dutyAssign,
            patientAge,
            needs,
            careTopics,
            care
        };
        
        
        switch (step) {
            case 1:
                return (
                    <AddressStartFromHome
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Duration
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleDate={this.handleDate}
                        values={values}
                    />
                );

            case 3:
                return (
                    <ElderAge
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 4:
                return (
                    <ElderCareTopicsStartFromHome
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleCareTopics={this.handleCareTopics}
                        values={values}
                    />
                );
        }
    }
}

export default ElderFormStartFromHome;
