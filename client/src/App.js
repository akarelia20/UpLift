import React from 'react'
import { Typography, AppBar } from '@mui/material'
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { makeStyles } from 'tss-react/mui'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notification from './components/Notification'

const useStyles = makeStyles()((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },

}))

function App() {
    const{classes}  = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant='h4' align="center" fontFamily={"Raleway"} color="#b388ff"> <Diversity1Icon fontSize='inherit' color='info' align="center"/> UpLift </Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    )
}

export default App