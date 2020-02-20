// import React, { useEffect } from 'react';
// import {
//   View, StyleSheet, Dimensions,
// } from 'react-native';
// import { Query } from 'react-apollo';
// // import {useMutation, useQuery} from '@apollo/react-hooks';
//
// import gql from 'graphql-tag';
// import { Text } from 'react-native-svg';
// import { useQuery } from '@apollo/react-hooks';
// import CupertinoButtonGrey from '../components/buttons/CupertinoButtonGrey';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: Math.round(Dimensions.get('window').width),
//     backgroundColor: 'rgba(247,243,243,1)',
//   },
//   cupertinoButtonGrey1: {
//     width: 183,
//     height: 41,
//     backgroundColor: 'rgba(237,92,69,1)',
//     marginTop: 24,
//     alignSelf: 'center',
//   },
// });
//
// // const LOGIN_MUTATION = gql`
// //     mutation login($email: String!, $password: String!) {
// //         login(email: $email, password: $password) {
// //             token
// //             user {
// //                 email
// //                 name
// //             }
// //         }
// //     }
// // `;
//
// const PING_QUERY = gql`
//     query pingQuery {
//         ping
//     }
// `;
//
// export default function QueryTest() {
//   // const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);
//   // const { data, loading, error } = useQuery(PING_QUERY);
//
//   // const attemptLogin = () => {
//   //   // loginMutation({ variables: { email: 'aaron@berdy.com', password: '123456' } });
//   //   // console.log('logging in');
//   //   // try {
//   //   //   loginMutation();
//   //   //   console.log('done logging in');
//   //   // } catch (err) {
//   //   //   console.error(err);
//   //   // }
//   // };
//
//   // console.log(loading);
//   // console.log(data);
//   // console.log(error);
//
//   const { data, loading, error } = useQuery(PING_QUERY);
//
//   if (loading) return <View><Text> LOADING... </Text></View>;
//   if (error) return <View><Text> Error. </Text></View>;
//
//   // eslint-disable-next-line no-console
//   console.log(data);
//
//   return (
//     <View style={styles.container}>
//       <Text>hello</Text>
//     </View>
//   );
// }
