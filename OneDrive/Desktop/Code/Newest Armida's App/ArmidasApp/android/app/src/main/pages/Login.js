import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {
    render() {
      return (
          <ScrollView style={styles.scroll}>
    scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
},
          </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
 
});

<Container>
    <Button 
        label="DJ Login"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
    label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
</Container>

<Container>
    <Label text="First Name" />
    <TextInput
        style={styles.textInput}
    />
</Container>
<Container>
    <Label text="Last Name or Last Initial" />
    <TextInput
        style={styles.textInput}
    />
</Container>
<Container>
    <Label text="Email" />
    <TextInput
        style={styles.textInput}
    />
</Container>
<Container>
    <Label text="Password" />
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
    />
</Container>
