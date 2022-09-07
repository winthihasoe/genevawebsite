import React, { Component } from "react";
import Address from "./Address";
import ChildAge from "./ChildAge";
import ChildCareTopics from "./ChildCareTopics";
import Duration from "./Duration";

export class BabyForm extends Component {
    state = {
        step: 1,
        address: "",
        city: "",
        phone: "",
        startDate: null,
        endDate: "",
        dutyAssign: "",
        childAge: null,
        childCareTopics: [],
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
        const childCareTopics = this.state.childCareTopics;
        const index = childCareTopics.indexOf(e.target.value);
        if (index === -1) {
            this.setState({ [input]: [...childCareTopics, e.target.value] });
        } else {
            this.setState({
                [input]: childCareTopics.filter(
                    (topic) => topic !== e.target.value
                ),
            });
        }
    };

    render() {
        const { step } = this.state;
        const {
            address,
            city,
            phone,
            startDate,
            endDate,
            dutyAssign,
            childAge,
            childCareTopics,
        } = this.state;
        const values = {
            address,
            city,
            phone,
            startDate,
            endDate,
            dutyAssign,
            childAge,
            childCareTopics,
        };

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

export default BabyForm;
