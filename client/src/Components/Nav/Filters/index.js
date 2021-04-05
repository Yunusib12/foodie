import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import DishesDrinks from './DishesDrinks';
import Cities from "./Cities";


const useStyles = makeStyles((theme) => ({
    filterContainer: {
        display: "flex",
        marginLeft: "3rem",
    }
}));



function Filters() {

    const classes = useStyles();

    return (
        <div className={classes.filterContainer} >
            <DishesDrinks />
            <Cities />
        </div>
    )
}

export default Filters
