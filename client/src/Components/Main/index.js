import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header";
import Nav from "../Nav";
import RestaurantList from "../Restaurant";
import RestaurantMap from "../Map";



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "0 auto",
        maxWidth: "1469px",
        // backgroundColor: "#1976d2",
    }
}));


function Main() {

    const classes = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item>
                <Nav />
            </Grid>
            <Grid item container className={classes.mainContainer}>
                <Grid item container >
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <RestaurantList />
                    </Grid>
                    <Grid item xs={false} md={6} lg={3} xl={6}>
                        <RestaurantMap />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Main
