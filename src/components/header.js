import React from 'react';
import {NavLink} from 'react-router-dom';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen : false
    }
  }
  showMenu = (e)=>{
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })

  }

  render(){
    return(
      <section>
        <div className="nav d-flex">
          <h3 className="align-self-center"><NavLink className="navbar-brand" exact to="/">Redux Basic</NavLink></h3>
          <ul className="nav-ul d-flex align-items-center">
            <div className={`hb-menu ${this.state.isMenuOpen ? '' : 'san'}`} onClick={(e)=>this.showMenu(e)}>&#9776;</div>
            <div className={`d-flex ${this.state.isMenuOpen ? 'ul-div' : ''} `}>
              <li><NavLink className="nav-li" activeClassName="active" to="/user-form">User Form</NavLink></li>
              <li><NavLink className="nav-li" to="/users-list">User List</NavLink></li>
            </div>
          </ul>

        </div>
      </section>
    )
  }
}

export default Header;
