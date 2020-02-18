import React from 'react';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/AppRouter';

import { URL } from './src/constants';

// import { Text, View } from 'react-native';
// import styles from './src/styles/Styles';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: URL,
});

const client = new ApolloClient({
  cache,
  link,
});

export default function App() {
  const tabNavigator = TabNavigator();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {tabNavigator}
      </NavigationContainer>

      {/* If testing your own screens, an option to test is to comment out
      the NavigationContainer above and to use the commented out <View> and
      uncomment the required imports up top instead */}

      {/* <View style={styles.container}>
        <Text>
          {'\n\n\n'}
          Replace this with the component you are testing
        </Text>
      </View> */}
    </ApolloProvider>
  );
}
