import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import Logo from "./Logo";




const useStyles = makeStyles((theme) => ({
    appBar: {
        height: "4.5rem",
        backgroundColor: "#292a2a",
    },
}));

function Header() {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
                <Logo />
                <Button color="primary">Sign up</Button>
                <Button color="primary">Log in</Button>
            </Toolbar>
        </AppBar>

    )
}

export default Header
