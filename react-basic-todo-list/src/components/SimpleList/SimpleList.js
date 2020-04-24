import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 570,
    backgroundColor: theme.palette.background.paper,
    marginTop: 30,
  },
  grid: {
    maxWidth: 'none'
  }
}));

const CustomCheckbox = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#00bcd4',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const SimpleList = (props) => {
  const classes = useStyles();
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <div className={classes.root}>
        <Grid item xs={12} md={6} className={classes.grid}>
          <Typography variant="h6" className={classes.title}></Typography>
          <div className={classes.demo}>
            <List>
            { props.items.map((item, index) => 
                <ListItem>
                  <ListItemIcon>
                    <CustomCheckbox size="small" />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
              </ListItem>
            )}
            </List>
          </div>
        </Grid>
    </div>
  );
}

export default SimpleList;