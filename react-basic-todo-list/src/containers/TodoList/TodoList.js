import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './TodoList.css';

const CustomCheckbox = withStyles({
    root: {
      color: 'rgba(0, 0, 0, 0.54)',
      '&$checked': {
        color: '#00bcd4',
      },
    },
    checked: { },
  })(props => <Checkbox color="default" {...props} />);

class TodoList extends Component {
    state = {
        items: []
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    addItemHandler = (event) => {
        event.preventDefault();
        this.setState({
            items: [...this.state.items, {term: this.state.term, checked: false}]
        });
    }

    deleteItemHandler = (index) => {
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({items: items});
    }

    checkedItemHandler = (index) => {
        const items = [...this.state.items];
        items[index] = { term: items[index].term, checked: items[index].checked ? false : true };
        this.setState({ items: items });
    }

    render() {
        return (
            <Auxiliary>
                <Input value={this.state.term} onChange={this.onChange} />
                <Button clicked={this.addItemHandler} />
                <div className="Root">
                    <Grid item xs={12} md={6} className="Grid" style={ this.state.items.length <= 0 ? { display: "none" }: {}}>
                        <Typography variant="h6"></Typography>
                        <div>
                        <List>
                        { this.state.items.map((item, index) => 
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <CustomCheckbox size="small" onChange={this.checkedItemHandler.bind(this, index)} />
                                </ListItemIcon>
                                <ListItemText style={ item.checked ? { color: "#989898", textDecoration: 'line-through' } : {}} primary={item.term} />
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon className="DeleteIcon" onClick={this.deleteItemHandler.bind(this, index)} />
                                </IconButton>
                            </ListItem>
                        )}
                        </List>
                        </div>
                    </Grid>
                </div>
            </Auxiliary>
        );
    }
}

export default TodoList;