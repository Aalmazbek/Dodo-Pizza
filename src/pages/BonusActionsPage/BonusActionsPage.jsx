import React from 'react'
import { useEffect } from 'react'

function BonusActionsPage({ setPath }) {

    useEffect(() => {
        setPath('/bonus-actions')
    })


    return (
        <div>BonusActionsPage</div>
    )
}

export default BonusActionsPage