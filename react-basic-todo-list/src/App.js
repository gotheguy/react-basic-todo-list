import React, { Component } from 'react';

import Layout from './containers/Layout/Layout';
import TodoList from './containers/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <TodoList />
        </Layout>
      </div>
    );
  }
}

export default App;
