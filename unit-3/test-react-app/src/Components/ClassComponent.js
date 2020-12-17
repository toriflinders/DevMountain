// Old way of importing 
import React, {Component} from 'react';

// import {Component} from 'react';
import FuncComponent from './FuncComponent';

class ClassComponent extends Component {
  constructor(){
    super();
    this.state = {
      username: 'Tori',
      age: 23,
      friends: [],
      picture: '',
      name: '' 
    }
    this.addFriend = this.addFriend.bind(this);
  }

  handlePictureChange(event){
    this.setState({
      picture: event.target.value,
    })
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }
  
  addFriend(){
    const {picture, name} = this.state;

    const newFriend = {picture: picture, name: name};
    const copyFriendArr = this.state.friends.slice();
    copyFriendArr.push(newFriend);

    this.setState({
      friends: copyFriendArr
    })
  }

  render(){
    // console.logs to see state changes should be between render and return
    // console.log('Picture:', this.state.picture)
    // console.log('Name:', this.state.name)
    // console.log('Friends:', this.state.friends)
    const mappedFriends = this.state.friends.map((element, i) => (
      <section key={i}>
        <img scr={element.picture} alt={element.name} />
        <p>{element.name}</p>
      </section>
    ))

    return (
      <section>
        <p>{this.state.username} is {this.state.age}</p>
        <label>Picture:</label>
        <input value={this.state.picture} onChange={event => this.handlePictureChange(event)}/>
        <label>Name:</label>
        <input value={this.state.name} onChange={e => this.handleNameChange(e)}/>
        <button onClick={this.addFriend}>Add Friend</button>
        {mappedFriends}
        <FuncComponent />
      </section>
    )
  }

}

export default ClassComponent;