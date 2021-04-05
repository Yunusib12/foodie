import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import RotateLeftRoundedIcon from '@material-ui/icons/RotateLeftRounded';
import { IconButton } from '@material-ui/core';
import DishesDrinks from './DishesDrinks';
import Newest from './Newest';


const useStyles = makeStyles((theme) => ({
    filterContainer: {
        display: "flex",

        marginLeft: "3rem",
    },
}));



function Filters() {

    const classes = useStyles();

    return (
        <div className={classes.filterContainer} >
            <DishesDrinks />
            <Newest />
            <IconButton color="primary" aria-label="Reset search" >
                <RotateLeftRoundedIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Filters
