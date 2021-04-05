import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MapRestaurants from "../../assets/images/map-restaurants.png";


const useStyles = makeStyles((theme) => ({
    mapCard: {
        padding: "0.5rem",
        justifyContent: "center",
    },
}));



function RestaurantMap() {

    const classes = useStyles();

    return (
        <div className={classes.mapCard}>
            <img
                width="100%"
                src={MapRestaurants}
                alt="Boston Restaurants" />
        </div>
    )
}

export default RestaurantMap;
