import React from 'react';
import {connect} from 'react-redux';
import {addUser, deleteUser, saveEditedUser} from '../actions/index';
import {bindActionCreators} from 'redux';
import {userSelector} from '../selectors/index';

class UsersList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      id:'',
      firstname: '',
      lastname: ''
    }
  }

  deleteUser = (i)=>{
    this.props.deleteUser(i);
  }
  editUser = (user)=>{
    this.setState({
      isEditing: true,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname
    })
  }
  cancelEdit = ()=>{
    this.setState({
      isEditing: false
    })
  }
  handleEditedUser = (e)=>{
    e.preventDefault();
    this.props.saveEditedUser(this.state);
    this.setState({
      isEditing: false
    })
  }

  render(){
    const {isEditing} = this.state;
    const {id} = this.state;
    const renderUsers = this.props.users.map((user, i)=>{
      return <div key={i}>
        {
          isEditing && id === user.id?
          <li className="list-group-item d-flex">
            <form className="d-flex form" onSubmit={e=>this.handleEditedUser(e)}>
            <input
               type="text"
               className="form-control edit-input"
               value={this.state.firstname}
               onChange={e =>this.setState({
                 firstname: e.target.value
               })}
             />
            <input
               type="text"
               className="form-control edit-input"
               value={this.state.lastname}
               onChange={e =>this.setState({
                 lastname: e.target.value
               })}
             />
            <input type="submit" className="btn btn-outline-primary edit-decide" value="cancel" onClick={()=>this.cancelEdit()}/>
            <input type="submit" className="btn btn-primary edit-decide" value="save"/>
          </form>
          </li> :
          <li className="list-group-item user-list d-flex justify-content-between">
            <div>{`${i+1}. `}{user.firstname} {user.lastname}</div>
            <div className="d-flex">
              <div className="edit-button" onClick={()=>this.editUser(user)}>&#x270E;</div>
              <div className="delete-button" onClick={()=>this.deleteUser(i)}>&#x2715;</div>
            </div>
          </li>
        }
    </div>
    });
    return(
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4>List of Users</h4>
              <ul className="list-group">
                {renderUsers}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    users: userSelector(state)
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators({addUser, deleteUser, saveEditedUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
