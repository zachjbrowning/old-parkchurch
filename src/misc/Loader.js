import React from 'react'

export default function Loader() {
    return (
        <div className="loader-holder">
            <div className="loader-box">
                <svg className="loader-icon" x="0px" y="0px" viewBox="0 0 8192 8192">
                    <path fill="none" stroke="#594E4A" strokeWidth="400" d="M4443.3,5001.2c0,0-166,808.2,543.9,841.3"/>
                    <path fill="none" stroke="#594E4A" strokeWidth="400" d="M3763.3,4996.9c0,0,166,808.2-543.9,841.3"/>
                    <path fill="none" stroke="#7D9C7C" strokeWidth="400" strokeMiterlimit="10" d="M5417.1,3778.6c0.8-358.5-288.9-649.9-647.4-651.2h-24c-3.5-15.8-4.8-32-3.8-48.2 c-9.8-361.7-311-646.9-672.6-637.1c-347.9,9.5-627.7,289.2-637.1,637.1c0,13.5,0,27.5,0,41v5.8h-32.8 c-359.1,19.6-634.4,326.6-614.9,685.7c18,331.8,283.1,596.8,614.9,614.9h31.8v10.6c0,4.8,0,9.1,0,13.9 c9.8,361.7,311,646.9,672.6,637.1c347.9-9.5,627.7-289.2,637.1-637.1c0-4.8,0-9.1,0-13.9v-5.3c8.5-3.7,17.7-5.3,27-4.8 C5126,4426.7,5416.3,4136.7,5417.1,3778.6z"/>
                
                </svg>
                    <svg id="loader-rotate" className="loader-icon" x="0px" y="0px" viewBox="0 0 8192 8192">
                    <circle className="spin-cycle" cx="4095.4" cy="1319.7" r="225"/>
                    <circle opacity="0.95" className="spin-cycle" cx="2913.2" cy="1585.9" r="225"/>
                    <circle opacity="0.9" className="spin-cycle"  cx="2047.4" cy="2221.8" r="225"/>
                    <circle opacity="0.85" className="spin-cycle"  cx="1505.2" cy="3098.8" r="225"/>
                    <circle opacity="0.8" className="spin-cycle"  cx="1320.1" cy="4096" r="225"/>
                    <circle opacity="0.75" className="spin-cycle"  cx="1513.9" cy="5119.1" r="225"/>
                    <circle opacity="0.7" className="spin-cycle"  cx="2066.5" cy="5985.3" r="225"/>
                    <circle opacity="0.6" className="spin-cycle"  cx="2960.9" cy="6632.1" r="225"/>
                    <circle opacity="0.5" className="spin-cycle"  cx="4100.3" cy="6871.9" r="225"/>
                    <circle opacity="0.4" className="spin-cycle"  cx="5272.7" cy="6607.7" r="225"/>
                    <circle opacity="0.3" className="spin-cycle"  cx="6123" cy="5989.6" r="225"/>
                    <circle opacity="0.2" className="spin-cycle"  cx="6675.4" cy="5119.1" r="225"/>
                    <circle opacity="0.1" className="spin-cycle"  cx="6871.9" cy="4117.2" r="225"/>
                </svg>
            </div>
        </div>
    )
}
