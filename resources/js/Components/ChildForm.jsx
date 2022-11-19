import React, { Component } from "react";
import Address from "./Address";
import ChildAge from "./ChildAge";
import ChildCareTopics from "./ChildCareTopics";
import Duration from "./Duration";

export class ChildForm extends Component {
    state = {
        step: 1,
        patient_name: "",
        address: "",
        city: this.props.city,
        phone: "",
        startDate: null,
        endDate: "",
        dutyAssign: "",
        patientAge: "",
        needs: [],
        care: 'child',
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
        const bookedCaregiver = this.props.bookedCaregiver;
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
            ...bookedCaregiver,
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
        console.log(values);
        switch (step) {
            case 1:
                return (
                    <Address
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
                    <ChildAge
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 4:
                return (
                    <ChildCareTopics
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

export default ChildForm;
