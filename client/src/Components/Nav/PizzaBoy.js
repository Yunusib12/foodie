import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import PizzaBoyImage from "../../assets/images/pizza-boy.png";
import Cities from './Filters/Cities';



const useStyles = makeStyles((theme) => ({
    navTitleSection: {
        display: "flex",
        marginLeft: " 3.5rem",
        alignItems: "center",
    },
    PizzaBoyText: {
        fontFamily: "Oswald",
        fontWeight: 600,
        fontSize: "3.6rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px",
        }

    },
    pizzaBoy: {
        height: "100px",
        // [theme.breakpoints.down('sm')]: {
        //     paddingRight: "5px",
        // }
    }
}));

function PizzaBoy() {

    const classes = useStyles();


    return (
        <div className={classes.navTitleSection}>
            <div>
                <img src={PizzaBoyImage} alt="Foodie - Pizza Boy" className={classes.pizzaBoy} />
            </div>
            <h3 className={classes.PizzaBoyText}>
                Find your happy place <span style={{ fontSize: "30px", fontWeight: "100" }}>in</span>
            </h3>
            <Cities />
        </div>
    )
}

export default PizzaBoy
