import React, {useState,} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Menu as Menue} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.grey[500],
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  let [isMobile, setIsMobile] = useState(window.innerWidth<480);
  setIsMobile=null;
  const [toolbarMenuVisibility, setToolbarMenuVisibility]= useState(false);
  const handleManuClose = () => {
    setToolbarMenuVisibility(false);
  }
  const handleManuItemClick = () => {
    setToolbarMenuVisibility(false);
  }
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        {/*<Button size="small">Subscribe</Button>*/
        isMobile &&
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
        onClick={(e)=>{
          setToolbarMenuVisibility(!toolbarMenuVisibility);
        }}
        >
          <Menue/>
        </IconButton>
}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        <Toolbar>
        <StyledMenu
          id="customized-menu"
          //anchorEl={anchorEl}
          //keepMounted
          open={toolbarMenuVisibility}
          onClose={handleManuClose}
        > 
        {sections.map((section)=>(
          <StyledMenuItem
          onClick={handleManuItemClick}
          >
          <ListItemText primary={section.title}/>
        </StyledMenuItem>
        ))}
        </StyledMenu>
        </Toolbar>
      </Toolbar>
      { !isMobile &&
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
        </Toolbar>}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};