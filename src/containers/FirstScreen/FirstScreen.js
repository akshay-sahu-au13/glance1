import React from 'react'
import "./firstscreen.scss";
import GlanceLogo from "../../images/White_Glance_Logo.png"
function FirstScreen() {
    return (
        <div className="container">
            <div className="date-time">
                <h1><span className="time">12:30</span> <span className="date">Friday 23/07</span> </h1>
            </div>
            <div className="updates">
                <div className="updates-score">
                    <div className="update-score-title">Current: CSK needs 43 runs on 18 balls!</div>
                    <div className="glance-logo">
                        <img src={GlanceLogo} alt="Glance logo" className="glance-logo"/>
                    </div>
                </div>


                <div className="updates-see-more">
                    <button>See more</button>
                </div>

            </div>
        </div>
    )
}

export default FirstScreen
