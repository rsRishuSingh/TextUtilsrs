import React from 'react'

export default function Footer(props) {
    return (
        <div className='container-fluid' style={props.modeChoice}>
            <footer className="py-3 pt-4">
                <hr />
                <div className='d-flex justify-content-evenly'>
                    <button type="button" className="btn btn-warning mx-2" onClick={props.yellowModeFxn} disabled={props.currentMode === "Yellow"}>Enable Yellow Mode</button>
                    <button type="button" className="btn btn-light mx-2" onClick={props.lightModeFxn} disabled={props.currentMode === "Light"}>Enable Light Mode</button>
                    <button type="button" className="btn btn-dark mx-2" onClick={props.darkModeFxn} disabled={props.currentMode === "Dark"}>Enable Dark Mode</button>
                </div>
                <p className="text-center text-secondary mt-3 mb-0 " >© 2024 Company, Inc</p>
            </footer>
        </div>
    )
}
