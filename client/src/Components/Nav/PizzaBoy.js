import React from 'react'
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PizzaBoyImage from "../../assets/images/pizza-boy.png";



const useStyles = makeStyles((theme) => ({
    navTitleSection: {
        display: "flex",
        marginTop: "0.35rem",
        marginLeft: " 3.5rem",
        marginBottom: "0.8rem",
        alignItems: "center",
    }
}));

function PizzaBoy() {

    const classes = useStyles();


    return (
        <div className={classes.navTitleSection}>
            <div>
                <img src={PizzaBoyImage} alt="Foodie - Pizza Boy" style={{ height: "100px" }} />
            </div>
            <Typography variant="h3">
                Find your happy place <span style={{ fontSize: "30px", fontWeight: "100" }}>in</span> <span style={{ fontSize: "47px", fontWeight: "600", boxShadow: "inset 0 -2px 0 0 #fdd0cf", borderBottom: "1px solid #000000" }}>Boston</span>
            </Typography>
        </div>
    )
}

export default PizzaBoy
