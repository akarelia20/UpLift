import React, { useContext } from 'react'
import { Button } from '@mui/material'

import { SocketContext } from '../SocketContext';

function Notification() {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h3>
                        {call.name} is calling:
                    </h3>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notification