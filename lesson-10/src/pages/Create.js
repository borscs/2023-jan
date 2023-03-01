import React from 'react'
import {Container, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import {makeStyles} from "@material-ui/core";



export default function Create() {

    return (
        <Container size="lg">
            <Typography
                variant='h6'
                align='center'
                color='primary'
                component='h2'
                gutterBottom
            >
                Create a new notes
            </Typography>
            <Button
                onClick={() => console.log('WORKING')}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<AccessAlarmIcon/>}
            >
                Submit
            </Button>
            <br/>
            <AcUnitOutlinedIcon/>
            <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
            <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
            <AcUnitOutlinedIcon color="action" fontSize="small"/>
            <AcUnitOutlinedIcon color="error" fontSize="large"/>
            <AcUnitOutlinedIcon color="disabled" fontSize="small"/>
        </Container>
    )
}
