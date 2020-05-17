import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 570,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
  }
}));

const CustomCheckbox = withStyles({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    '&$checked': {
      color: '#00bcd4',
    },
  },
  checked: { },
})(props => <Checkbox color="default" {...props} />);

const CustomList = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root} style={ props.items.length <= 0 ? { display: "none" }: {}}>
      {props.items.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem className={classes.listItem} key={value.id} dense>
            <ListItemIcon>
              <CustomCheckbox size="small" checked={value.checked} onChange={props.checkedItemHandler.bind(this, index)} />
            </ListItemIcon>
            <ListItemText id={labelId} style={ value.checked ? { color: "#989898", textDecoration: 'line-through' } : {}} primary={value.term} />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon className="DeleteIcon" onClick={props.deleteItemHandler.bind(this, index)} />
            </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default CustomList;