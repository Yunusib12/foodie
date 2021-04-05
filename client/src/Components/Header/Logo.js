import React from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import foodieLogo from "../../assets/images/foodie-logo.png";

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: "4.5rem",
        backgroundColor: "#292a2a",
    },
    mainHeader: {
        flex: 1,
    },
    foodieLogo: {
        paddingTop: "0.5rem",
    },
}));



function Logo() {

    const classes = useStyles();

    return (
        <Typography className={classes.mainHeader}>
            <img src={foodieLogo} alt="Foodie Logo" className={classes.foodieLogo} />
        </Typography>
    )
}

export default Logo
