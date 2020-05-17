import React, { Component } from 'react';
import uuid from 'react-uuid'

import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import CustomList from './CustomList';

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
            items: [...this.state.items, {id: uuid(), term: this.state.term, checked: false}]
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
                <CustomList items={this.state.items} checkedItemHandler={this.checkedItemHandler} deleteItemHandler={this.deleteItemHandler} />
            </Auxiliary>
        );
    }
}

export default TodoList;