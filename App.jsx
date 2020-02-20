
import React from 'react';

import { View, AsyncStorage } from 'react-native';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

// import { persistCache } from 'apollo-cache-persist';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
// import LoggedIn from './src/screens/LoggedIn';
// import Signup from './src/screens/Signup';
// import QueryTest from './src/screens/QueryTest';
import styles from './src/styles/Styles';
import { AUTH_TOKEN, URL } from './src/constants';
import Login from './src/screens/Login';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: URL,
});

const authLink = setContext((_, { headers }) => AsyncStorage.getItem(AUTH_TOKEN).then((token) => {
  console.log('token: ', token);
  return ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      // Authorization: token || '',
    },
  });
}));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => console.log(
      `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
    ));
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(errorLink.concat(link)),
});

export default function App() {
  // useEffect(() => {
  //   const setup = async () => {
  //     console.log('SETTING UP BITCH');
  //     try {
  //       // See above for additional options, including other storage providers.
  //       await persistCache({
  //         cache,
  //         storage: AsyncStorage,
  //       });
  //     } catch (error) {
  //       console.error('Error restoring Apollo cache', error);
  //     }
  //   };
  //   setup();
  // }, []);

  return (
    <ApolloProvider client={client}>
      {/* <LoggedIn /> */}
      {/* <NavigationContainer> */}
      {/*  {tabNavigator} */}
      {/* </NavigationContainer> */}

      {/* If testing your own screens, an option to test is to comment out
            the NavigationContainer above and to use the commented out <View> and
            uncomment the required imports up top instead */}

      <View style={styles.container}>
        <Login />
        {/* <Signup /> */}
        {/* <QueryTest /> */}
      </View>
    </ApolloProvider>
  );
}
