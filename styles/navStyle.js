import { fade, makeStyles } from '@material-ui/core/styles';

// styles used for specific components

const navStyle = makeStyles((theme) => ({

  // styles used for navbar

  root: {
      flexGrow: 1,
      width: "100%"
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
    
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]:{
      display: 'block',
    },
  },

  // styles used for menu/drawer
  
  list: {
    width: 250,
  },
    
  fullList: {
    width: 'auto',
  },

  // styles used for links
  
  link: {
    textDecoration: 'none',
    fontFamily:'PT sans',
    fontWeight: 'Bold',
    '&:hover': {
      color: 'white',
      borderBottom: "4px solid #fff",
    },
  },

    // styles used for search bar

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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

  // styles used for displaying searched and category-specific news

  img: {
    height: 200,
    width: 200,
    marginBottom:55,
    [theme.breakpoints.down('sm')]: {
      height: 100,
      width: 100
    }
  },
  
  articleTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
    '&:hover': {
      textDecoration: 'underline'
    },
    color:"#fff"
  },

  description: {
    '&:hover': {
      textDecoration: 'underline'
    },
    color:"#fff"
  },

  //styles used for globe animation

  animation: {
    height: "100%",
    width: "100%",
    display: "fill",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain"
  },
    
  video:{
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "-1",
    left:"0",
    top:"0"
  },

  // styles used for heading on homepage
  
  heading:{
    fontFamily:'PT sans', 
    fontWeight: 'Medium', 
    fontSize: "35px", 
    color:'#FFF'
  }

}));

export default navStyle;