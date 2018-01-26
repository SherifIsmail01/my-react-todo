import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
      	<div>
        	<Link to={'/'}>Home</Link>
        </div>
        <div>
        	<Link to={'/todos'}>Todos</Link>
        </div>
      </header>
    )
  }
}

export default Header