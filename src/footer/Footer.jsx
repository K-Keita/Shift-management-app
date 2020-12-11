import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {push} from 'connected-react-router';
import AppBar from '@material-ui/core/AppBar';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import blueGrey from '@material-ui/core/colors/blueGrey'

const useStyles = makeStyles((theme) => ({
  iconBox: {
    width: "20%",
    margin: 0,
  },
  icon: {
    width: "100%",
  },
  iconText: {
    textAlign: "center",
    margin: "-16px 0 0 0",
    fontSize: 10,
  },
  toolBar: {
    padding: 0,
    width: '100%',
  },
  appBar: {
    width: "100%",
    margin: 0,
    top: 'auto',
    bottom: 0,
    background: blueGrey[500]
  },
}));

const Footer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  const templatePage = [
    {icon: <PeopleIcon />, path: "/list", text: "メンバー"},
    {icon: <PlaylistAddIcon />, path: "/regist", text: "シフト登録"},
    {icon: <HomeIcon />, path: "/", text: "ホーム"},
    {icon: <ListAltIcon />, path: "/shift", text: "シフト一覧"},
    {icon: <SettingsIcon />, path: "/management", text: "設定"},
  ]

  const linkPage = (path) => {
    dispatch(push(path));
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        {templatePage.map((page,index) => {
          return (
            <div key={String(index)} className={classes.iconBox} >
            <IconButton key={String(index)} className={classes.icon} onClick={() => linkPage(page.path)} color="inherit">
              {page.icon}
            </IconButton>
          <p className={classes.iconText}>{page.text}</p>
            </div>
          )
        })}
      </Toolbar>
    </AppBar>
  );
}

export default Footer;