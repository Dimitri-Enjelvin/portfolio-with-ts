import React from 'react'

import TBubble from '../components/TBubble'
import TLink from '../components/TLink'


const THeader = () => {
    return (
        <div className="header_container">

            <div className="bubbles_container">
                <TBubble color="red" />
                <TBubble color="orange" />
                <TBubble color="green" />
            </div>

            <div className="link_container">
                <TLink />
            </div>

        </div>
    )
}

export default THeader