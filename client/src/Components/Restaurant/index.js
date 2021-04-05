import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RestaurantCard from "./RestaurantCard";



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: "0.5rem",
        justifyContent: "center",
        // backgroundColor: "#ff00ff",
    }
}));

function RestaurantList() {

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.mainContainer}>
            <Grid item  >
                <RestaurantCard />
            </Grid>
            <Grid item>
                <RestaurantCard />
            </Grid>
            <Grid item >
                <RestaurantCard />
            </Grid>
            <Grid item>
                <RestaurantCard />
            </Grid>
            <Grid item >
                <RestaurantCard />
            </Grid>
            <Grid item>
                <RestaurantCard />
            </Grid>
            <Grid item >
                <RestaurantCard />
            </Grid>
            <Grid item>
                <RestaurantCard />
            </Grid>
        </Grid>
    )
}

export default RestaurantList
