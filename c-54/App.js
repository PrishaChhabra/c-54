import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';



class AnyColorButton extends Component {

  displayAlert=()=>{
  alert("This is just a trial message");
  }
  render(){
    return(
      <Button color={this.props.mycolor} title="Click Me" onPress={this.displayAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyColorButton mycolor="purple"/>
        <Text>My First React Component</Text>
      </View>
    );
  }
}