import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, VideoCall, PhoneDisabled } from '@mui/icons-material'

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles()((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '500px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 10px',
    },
}));


function Options({ children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idTocall, setIdToCall] = useState('')
    const { classes } = useStyles();

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>
                                Your Name
                            </Typography>
                            <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            {console.log(me, "hi",)}
                            <CopyToClipboard text={me} className={classes.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize='40'/>}>
                                    Copy your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>

                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography gutterBottom variant='h6'>
                                Make a call
                            </Typography>
                            <TextField label='Id to Call' value={idTocall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<PhoneDisabled color="white" fontSize='large' />}
                                    onClick={leaveCall}
                                    className={classes.margin}
                                >
                                    Hang up
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<VideoCall fontSize='large' />}
                                    fullWidth
                                    onClick={() => callUser(idTocall)}
                                    className={classes.margin}
                                >
                                    Call
                                </Button>
                            )
                            }
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options