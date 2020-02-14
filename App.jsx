import React, { Component } from 'react';
//import { Text, View } from 'react-native';
import { StyleSheet, View, Text, Image, Switch, TextInput, Button } from "react-native";
/*import Light from "../components/Light";
import WhitePanel from "../components/WhitePanel";
import CupertinoButtonGrey from "../components/CupertinoButtonGrey";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialFixedLabelTextbox3 from "../components/MaterialFixedLabelTextbox3";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
*/
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

//import styles from './src/styles/Styles';
import { URL } from './src/constants';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: URL,
});

const client = new ApolloClient({
  cache,
  link,
});

class SetFuse extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.loremIpsum}>&lt;</Text>
        <Text style={styles.set}>SET</Text>
        <TextInput
          style={styles.nameInput}
          placeholder="Event Name"
        />
        <TextInput
        style={styles.nameInput}
        placeholder="Event Description"
        />
        <TextInput
        style={styles.nameInput}
        placeholder="Event Invite Group"
        />
        <View style={styles.switch}>
          <Text>Send Notifications?</Text>
          <Switch
            value={true}
            disabled={false}
            trackColor={{ true: "rgba(230, 230, 230,1)" }}
          ></Switch>
        </View>
        <View style={styles.deadline}>
          <Image
            source={require("./assets/icon.png")}
            resizeMode="contain"
            style={{width: 40, height: 40}}
          />
          <TextInput
          placeholder="Event Deadline"
          style={{height:40, left: 40}}
          />
        </View>
        <View style={styles.button}>
          <Button
          title="Submit"/>
        </View>
        <Image
          source={require("./assets/icon.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8
  },
  loremIpsum: {
    top: 46,
    left: 30,
    width: 34,
    height: 50,
    color: "rgba(218,209,209,1)",
    position: "absolute",
    fontSize: 50,
    fontFamily: "courier-regular"
  },
  nameInput: {
    height: 60,
    top: 142,
    left: 35,
    position: "relative"
  },
  set: {
    top: 55,
    left: 165,
    alignSelf: "center",
    color: "rgba(218,209,209,1)",
    position: "absolute",
    fontSize: 30,
    fontFamily: "alata-regular"
  },
  image: {
    top: 661,
    left: 255,
    width: 88,
    height: 78,
    position: "absolute",
    transform: [
      {
        rotate: "15.00deg"
      }
    ]
  },
  switch: {
    flex: 1, 
    flexDirection: 'row', 
    width: 300,
    justifyContent: 'space-between', 
    top: 200,
    left: 35
  },
  deadline: {
    flex: 1, 
    flexDirection: 'row', 
    width: 300,
    top: 80,
    left: 35
  },
  button:{
    left: 43, 
    width: 300
  }
  
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <SetFuse></SetFuse>
      </View>
    </ApolloProvider>
  );
}
