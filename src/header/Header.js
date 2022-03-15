import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    button: {
        color: "white",
        fontSize: "15px",
        fontWeight: "bold",
    },
    title: {
        flexGrow: 1,
    },
    spacer: {
        paddingLeft: "300px",
    },
}));
export default function Header() {

    const classes = useStyles();
    return (
        <div classesName={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        WW Bank
                    </Typography>
                    <Button className={classes.button}>ABOUT US</Button>
                    <Button className={classes.button}>PRODUCT</Button>
                    <Button className={classes.button}>PACKAGE</Button>
                    <Button className={classes.button}>CONTACT</Button>
                    <div className={classes.spacer}></div>
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__lineOne">Hello</span>
                            <span className="header__lineTwo ">Sign In</span>
                        </div>
                    </Link>

                    <Link to="/register" className="header__link">
                        <div className="header__option">
                            <span className="header__lineOne">New User</span>
                            <span className="header__lineTwo ">Register</span>
                        </div>
                    </Link>

                </Toolbar>


            </AppBar>
        </div>
    );
}