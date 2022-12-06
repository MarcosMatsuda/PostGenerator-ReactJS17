import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    main: {
        margin: theme.spacing(2)
    }
}));


const Header = () => {
    const classes = useStyles();
    return (<AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Blog Posts
            </Typography>
        </Toolbar>
    </AppBar>);
}

export default function Main(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    );
}
