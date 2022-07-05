import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import "./PleaseWaitBox.scss"


const PleaseWaitBox = ({text}) => {
    return <>
        <div className="please-wait">
            <h2 className="please-wait__h2">{text}</h2>
            <ProgressBar/>
        </div>
    </>
}

export default PleaseWaitBox