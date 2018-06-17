import React from 'react';
import {connect} from 'react-redux';
import {addUser} from '../actions/index';
import {bindActionCreators} from 'redux';

class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname: ''
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      firstname: '',
      lastname: ''
    })
  }

  render(){
    return(
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4>User Form</h4>
              <form onSubmit={e=>this.handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                     type="text"
                     placeholder="Enter firstname"
                     className="form-control"
                     id="firstname"
                     value={this.state.firstname}
                     onChange={e=>this.setState({firstname:e.target.value})}
                   />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">LastName</label>
                  <input
                     type="text"
                     placeholder="Enter lastname"
                     className="form-control"
                     id="lastname"
                     value={this.state.lastname}
                     onChange={e=>this.setState({lastname:e.target.value})}
                   />
                </div>
                <input type="submit" className="btn btn-primary" value="submit"/>
              </form>
              <hr/>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({addUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(UserForm);
