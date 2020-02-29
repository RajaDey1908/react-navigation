// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  * @flow
// //  */

// // import {
// //   SafeAreaView,
// //   StyleSheet,
// //   ScrollView,
// //   View,
// //   Text,
// //   StatusBar,
// // } from 'react-native';

// // import {
// //   Header,
// //   LearnMoreLinks,
// //   Colors,
// //   DebugInstructions,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // import 'react-native-gesture-handler';
// // import * as React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <>
// //         <StatusBar barStyle="dark-content" />
// //         <SafeAreaView>
// //           <ScrollView
// //             contentInsetAdjustmentBehavior="automatic"
// //             style={styles.scrollView}>
// //             <Header />
// //             {global.HermesInternal == null ? null : (
// //               <View style={styles.engine}>
// //                 <Text style={styles.footer}>Engine: Hermes</Text>
// //               </View>
// //             )}
// //             <View style={styles.body}>
// //               <View style={styles.sectionContainer}>
// //                 <Text style={styles.sectionTitle}>Step One</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                   screen and then come back to see your edits.
// //               </Text>
// //               </View>
// //               <View style={styles.sectionContainer}>
// //                 <Text style={styles.sectionTitle}>See Your Changes</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   <ReloadInstructions />
// //                 </Text>
// //               </View>
// //               <View style={styles.sectionContainer}>
// //                 <Text style={styles.sectionTitle}>Debug</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   <DebugInstructions />
// //                 </Text>
// //               </View>
// //               <View style={styles.sectionContainer}>
// //                 <Text style={styles.sectionTitle}>Learn More</Text>
// //                 <Text style={styles.sectionDescription}>
// //                   Read the docs to discover what to do next:
// //               </Text>
// //               </View>
// //               <LearnMoreLinks />
// //             </View>
// //           </ScrollView>
// //         </SafeAreaView>
// //       </>
// //     </NavigationContainer>
// //   );
// // }



// // const styles = StyleSheet.create({
// //   scrollView: {
// //     backgroundColor: Colors.lighter,
// //   },
// //   engine: {
// //     position: 'absolute',
// //     right: 0,
// //   },
// //   body: {
// //     backgroundColor: Colors.white,
// //   },
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //     color: Colors.black,
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //     color: Colors.dark,
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// //   footer: {
// //     color: Colors.dark,
// //     fontSize: 12,
// //     fontWeight: '600',
// //     padding: 4,
// //     paddingRight: 12,
// //     textAlign: 'right',
// //   },
// // });


// // In App.js in a new project

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // import HomeScreen from './src/screens/Home'
// // import DetailsScreen from './src/screens/Details'
// import { Ionicons } from '@expo/vector-icons';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function IconWithBadge({ name, badgeCount, color, size }) {
//   return (
//     <View style={{ width: 24, height: 24, margin: 5 }}>
//       <Ionicons name={name} size={size} color={color} />
//       {badgeCount > 0 && (
//         <View
//           style={{
//             // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//             {badgeCount}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// function HomeIconWithBadge(props) {
//   // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
//   return <IconWithBadge {...props} badgeCount={3} />;
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//       <Button
//         title="Go to Settings"
//         onPress={() => navigation.navigate('Settings')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator>
//     //     <Stack.Screen
//     //       name="Home"
//     //       component={HomeScreen}
//     //       options={{ title: 'Overview' }}
//     //     />
//     //     <Stack.Screen name="Details" component={DetailsScreen} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'gray',
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}