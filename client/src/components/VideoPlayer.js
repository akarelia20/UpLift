import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles()((theme) => ({
    video: {
        width: '700px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        margin: '10px',
    },
}));

function VideoPlayer() {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    const { classes } = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {/* Own video */}
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>
                                {name || 'Name'}
                            </Typography>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }

            {/* User video */}
            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>
                                {call.name || 'Name'}
                            </Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }
        </Grid>
    )
}

export default VideoPlayer