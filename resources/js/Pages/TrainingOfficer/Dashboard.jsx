import React from "react";
import TrainingOfficer from "@/Layouts/TrainingOfficer";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <TrainingOfficer
            auth={props.auth}
            errors={props.errors}
            // header={
            //     <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            //         Welcome to Geneva ❤️
            //     </h2>
            // }
        >
            <Head title="Dashboard" />
        </TrainingOfficer>
    );
}
