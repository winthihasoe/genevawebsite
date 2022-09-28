import React from 'react'
import Address from "./Address";
import ElderAge from "./ElderAge";
import ElderCareTopics from "./ElderCareTopics";
import Duration from "./Duration";
import { useForm } from "@inertiajs/inertia-react";

export default function ElderFormNew() {
    const [data, setData, post, error] = useForm({
        step: 1,
        address: "",
        city: "",
        phone: "",
        startDate: null,
        endDate: "",
        dutyAssign: "",
        elderAge: "",
        elderCareTopics: [],
        care: 'elder',
    })
    

    // Proceed to next step
    const nextStep = () => {
        setData({
            ...data, step: step+1,
        });
    };
    // Go back to prev step
    const prevStep = () => {
        setData({
            ...data, step: step-1,
        })
    };

    // Handle fields change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({ ...data, [name]: value });
    };

    // Handle date change
    const handleDate = (e) => {
        const {name, value} = e.target;
        setData({ ...data, [name]: value });
    };

    // Handling The topics choose by customer
    const handleCareTopics = (e) => {
        const {name, value} = e.target;
        const elderCareTopics = data.elderCareTopics;
        const index = elderCareTopics.indexOf(e.target.value);
        if (index === -1) {
            setData({ ...data, [name]: [...elderCareTopics, value] });
        } else {
            setData({
                ...data, [name]: elderCareTopics.filter(
                    (topic) => topic !== value
                ),
            });
        }
    };
    const hanadleSubmit = (e) => {
        e.preventDefault();
        post(route('storeBooking'), data);
    }
    console.log(data);

    

    switch (data.step) {
        case 1:
            return (
                <Address
                    nextStep={nextStep}
                    handleChange={handleChange}
                    data={data}
                />
            );
        case 2:
            return (
                <Duration
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    handleDate={handleDate}
                    data={data}
                />
            );

        case 3:
            return (
                <ElderAge
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    data={data}
                />
            );

        case 4:
            return (
                <ElderCareTopics
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleChange={handleChange}
                    handleCareTopics={handleCareTopics}
                    data={data}
                    hanadleSubmit = {hanadleSubmit}
                />
            );
    }

  
}
