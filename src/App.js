import React from 'react';
import { MovieOpenOutline } from 'mdi-material-ui';
import { TelevisionClassic } from 'mdi-material-ui';
import { Menu } from 'mdi-material-ui';
import { ImageFilterCenterFocus } from 'mdi-material-ui';
//import { ArrowUpBold } from 'mdi-material-ui';
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Cinema from './Cinema';
import Tv from './Tv';
import './App.css';
import Only_Murders2 from './Only_Murders2'; 
import Clickbait from './Clickbait';
import decisaodepartir from './decisaodepartir';
import avatar2 from './avatar2';
import amsterdam from './amsterdam';
import dentecanino from './dentecanino';
import shrinking from './shrinking';
import mayans from './mayans';
import ninguempodesaber from './ninguempodesaber';
import achegada from './achegada.js';
import banshees from './bansheesinisherin';
import entrefacas from './entrefacas';
import experimenter from './experimenter';
import argentina from './argentina';
import ruptura from './ruptura';
import adaonegro from './adaonegro';



const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function PersistentDrawerRight() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  return (
   
    <Router >
      
      <Box >
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{background: "darkred"}} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              sx={{ marginRight: "auto" }}
            >
              <Menu/>
              <Typography
                variant="h4"
                noWrap
                sx={{ paddingLeft: "260px"}}
                component="div"   
                position={"fixed"}
              >
              <MovieOpenOutline sx={{ verticalAlign: "middle" }} /> Filminhos <TelevisionClassic sx={{ verticalAlign: "middle" }}/> 
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Main open={open}>
          <DrawerHeader />
          </Main>
          
          
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth
            }
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <Menu />
              ) : (
                <Menu />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Menu Principal","Cinema", "TV"].map((text, index) => (
               <ListItem
               key={text}
               disablePadding
               component={Link}
               to={
                 index === 0 ? "/app" :
                 index === 1 ? "/cinema" : "/tv"
               }
             >
               <ListItemButton>
                 <ListItemIcon>
                   {index === 0 ? <ImageFilterCenterFocus /> :
                    index === 1 ? <MovieOpenOutline /> :
                    <TelevisionClassic />}          
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItemButton>
             </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </Box>

      <Switch>
        <Route path="/cinema" component={Cinema} />
        <Route path="/tv" component={Tv} />
        <Route path="/Only_Murders2" component={Only_Murders2} />
        <Route path="/Clickbait" component={Clickbait} />
        <Route path="/decisaodepartir" component={decisaodepartir} />
        <Route path="/avatar2" component={avatar2} />
        <Route path="/amsterdam" component={amsterdam} />
        <Route path="/dentecanino" component={dentecanino} />
        <Route path="/shrinking" component={shrinking} />
        <Route path="/mayans" component={mayans} />
        <Route path="/ninguempodesaber" component={ninguempodesaber} />
        <Route path="/achegada" component={achegada} />
        <Route path="/entrefacas" component={entrefacas} />
        <Route path="/banshees" component={banshees} />
        <Route path="/experimenter" component={experimenter} />
        <Route path="/argentina" component={argentina} />
        <Route path="/ruptura" component={ruptura} />
        <Route path="/adaonegro" component={adaonegro} />
      </Switch>
    </Router>
  );
}
