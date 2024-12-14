import React from 'react'

export default function Alert(props) {
    return (
        // <div className={`alert alert-${props.alertType} mb-0`} style={{ position: "absolute" }} role="alert">
        //     <strong> Success: </strong>{props.alertMessage}
        // </div>

        <div style={{ ...props.modeChoice, height: "50px" }}>
            {
                props.alert && <div className={`alert alert-${props.alert.alertType} mb-0`} role="alert">
                    <strong> Success: </strong>{props.alert.alertMessage}
                </div>
            }
        </div >

    )
}
