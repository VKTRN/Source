import React from 'react'
import reactDom from 'react-dom'

function PortalDemo(){
    const element = <h1>PortalDemo</h1>
    return ReactDOM.createPortal(element, document.getElementById('portal-root'))
}

export default PortalDemo