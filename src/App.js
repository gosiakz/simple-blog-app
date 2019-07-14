import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './routes/home';
import Article from './routes/article';
import Author from './routes/author';
import Contact from './routes/contact';
import Header from './components/Header';
import styled, { css } from 'styled-components';

const SiteWrapper = styled.div`
  font-family: 'Arial';
`

class App extends Component {
  render() {
    return (
      <Router>
        <SiteWrapper>
          <header>
            <Header />
          </header>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="/author/" component={Author} />
            <Route path="/contact/" component={Contact} />
          </div>
        </SiteWrapper>
      </Router>
    );
  }
}

export default App;