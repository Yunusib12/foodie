import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PizzaBoy from "./PizzaBoy";
import SearchBox from "./SearchBox";
import Filters from "./Filters/";



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "0 auto",
        marginTop: "2.15rem",
        padding: "0.5rem",
        maxWidth: "1465px",
    },
    navBarContent: {
        margin: "0 auto",
        marginLeft: "1rem",
        maxWidth: "1465px",
        // backgroundColor: "#b2b2b2",
    },
    searchFilterMainContainer: {
        margin: "0 auto",
        maxWidth: "1167px",
        alignItems: "center",

    },
}));


function Nav() {

    const classes = useStyles();


    return (
        <div className={classes.mainContainer}>
            <div className={classes.navBarContent}>
                <Grid container direction="column">
                    <Grid item>
                        <PizzaBoy />
                    </Grid>
                    <Grid id="searchBoxFilter" container item className={classes.searchFilterMainContainer}>
                        <Grid item xs={12} sm={3}>
                            <SearchBox />
                        </Grid>
                        <Grid item xs={12} sm={3} md={9}>
                            <Filters />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Nav
