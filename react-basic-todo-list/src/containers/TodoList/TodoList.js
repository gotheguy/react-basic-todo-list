import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../components/UI/Button/Button';
import SimpleList from '../../components/SimpleList/SimpleList';
import Input from '../../components/UI/Input/Input';
import './TodoList.css';

class TodoList extends Component {
    state = {
        term: '',
        items: []
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    addItemHandler = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
    }

    render() {
        return (
            <Auxiliary>
                <Input value={this.state.term} onChange={this.onChange} />
                <Button clicked={this.addItemHandler} />
                <SimpleList items={this.state.items} /> 
            </Auxiliary>
        );
    }
}

export default TodoList;