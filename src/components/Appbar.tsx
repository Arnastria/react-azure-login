import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Search } from '@material-ui/icons';
import { Button, Input, InputBase } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '../redux/reducers';
import { logoutUser } from '../redux/actions/auth';
import { Redirect } from 'react-router';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        Appbar: {
            backgroundColor: 'white',
            alignItems: 'center',
        },
        Slogan: {
            color: '#6c757d',
            fontSize: 14,
            margin: "0 8px 0 0"
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            color: '#6c757d',
            backgroundColor: '#eeecea',
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
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
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        buttonLogin: {
            backgroundColor: '#ff9900',
            color: 'white',
        },
    }),
);

export default function PoininAppBar(props: any) {
    const { searchFunction, searchFunctionTimeout } = props;
    const [searchValue, setSearchValue] = useState<String>("");
    const dispatch = useDispatch();
    const selector = useSelector((state: Rootstate) => state.auth);

    const classes = useStyles();
    const logout = () => {
        logoutUser(dispatch);
        sessionStorage.clear();
        // window.location.reload();
    }

    useEffect(() => {
        if (searchValue == '') {
            const timeOutSearch = setTimeout(() => {
                console.log('clearing query..')
                searchFunctionTimeout(searchValue, true);
            }, 2000);
            return () => clearTimeout(timeOutSearch);
        }
        if (searchValue.length > 3) {
            const timeOutSearch = setTimeout(() => {
                console.log('search..' + searchValue)
                searchFunctionTimeout(searchValue, false);
            }, 3000);
            return () => clearTimeout(timeOutSearch);
        }
    }, [searchValue])


    return (
        <div className={classes.grow}>
            <AppBar elevation={0} position="static" className={classes.Appbar}>
                <Toolbar>
                    <img style={{ maxWidth: 100 }} src="https://www.poinin.com/_next/image?url=%2Fassets%2Ficon%2Fpoinin_icon.png&w=3840&q=75" />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={(event) => searchFunction(event, searchValue)}
                        />
                    </div>
                    <div className={classes.Slogan}>
                        Cari Promo? di Poinin Aja
                    </div>
                    <div>
                        {selector.tokens != null ?
                            <Button onClick={logout} variant="outlined" color='secondary'>
                                Logout
                            </Button>
                            :
                            <></>
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
