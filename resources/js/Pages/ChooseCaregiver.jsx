import React from "react";

export default function ChooseCaregiver({desiredCaregivers}) {
    return <div>ChooseCaregiver
        {desiredCaregivers.map(caregiver=>(caregiver))}
    </div>;
}
