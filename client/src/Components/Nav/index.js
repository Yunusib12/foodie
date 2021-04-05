import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import PizzaBoy from "./PizzaBoy";
import SearchBox from "./SearchBox";
import Filters from "./Filters/";



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: "0 auto",
        marginTop: "4.15rem",
        padding: "0.5rem",
        maxWidth: "1465px",
    },
    navBarContent: {
        margin: "0 auto",
        marginLeft: "1rem",
        maxWidth: "1465px",
        // backgroundColor: "#b2b2b2",
    },
    navTitleSection: {
        display: "flex",
        marginTop: "0.35rem",
        marginBottom: "0.8rem",
        alignItems: "center",
    },
    searchFilterMainContainer: {
        margin: "0 auto",
        maxWidth: "1167px",
        alignItems: "center",

    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '95%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    filterContainer: {
        marginLeft: "3rem",
    }
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
                    <Grid container item className={classes.searchFilterMainContainer}>
                        <Grid item xs={12} sm={3}>
                            <SearchBox />
                        </Grid>
                        <Grid item xs={12} sm={3} md={6}>
                            <Filters />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Nav
