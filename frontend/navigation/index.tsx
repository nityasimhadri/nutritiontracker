/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome5 } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import {NotFoundScreen, TabFiveScreen, TabFourScreen, TabTwoScreen, TabOneScreen, ModalScreen} from '../screens';
import { AddExcercise, AddRoutine, SearchRoutine, StartRoutine } from '../screens/Fitness';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 export function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
         <Stack.Screen name="Modal" component={ModalScreen} />
         <Stack.Screen name="AddRoutine" component={AddRoutine} />
         <Stack.Screen name="SearchRoutine" component={SearchRoutine} />
         <Stack.Screen name="StartRoutine" component={StartRoutine} />
         <Stack.Screen name="AddExcercise" component={AddExcercise} />
       </Stack.Group>
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].tint,
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
           title: 'User',
           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
           tabBarActiveTintColor: "#A8886C",
           tabBarInactiveTintColor: 'gray',
           tabBarActiveBackgroundColor: "white",
           tabBarInactiveBackgroundColor: "white",
           headerRight: () => (
             <Pressable
               onPress={() => navigation.navigate('Modal')}
               style={({ pressed }) => ({
                 opacity: pressed ? 0.5 : 1,
               })}>
               <FontAwesome5
                 name="info-circle"
                 size={25}
                 color={Colors[colorScheme].text}
                 style={{ marginRight: 15 }}
               />
             </Pressable>
           ),
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoScreen}
         options={{
           title: 'Food',
           tabBarIcon: ({ color }) => <TabBarIcon name="apple" color={color} />,
           tabBarActiveTintColor: "#A8886C",
           tabBarInactiveTintColor: 'gray',
           tabBarActiveBackgroundColor: "white",
           tabBarInactiveBackgroundColor: "white",
         }}
       />
       <BottomTab.Screen
         name="TabThree"
         component={ModalScreen}
         options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
           title: '',
           tabBarIcon: ({ color }) => 
           <Pressable
             onPress={() => navigation.navigate('Modal')}
             style={({ pressed }) => ({
               opacity: pressed ? 0.5 : 1,
           })}>
           <FontAwesome5
             name="plus"
             size={35}
             color='black'
             style={{ marginRight: 15 }}
           />
         </Pressable>
           
         })}
       />
        <BottomTab.Screen
         name="TabFour"
         component={TabFourScreen}
         options={{
          headerShown: false,
           title: 'Activity',
           tabBarIcon: ({ color }) => <FontAwesome5 name="dumbbell" size={24} color={color} />,
           tabBarActiveTintColor: "#A8886C",
           tabBarInactiveTintColor: 'gray',
           tabBarActiveBackgroundColor: "white",
           tabBarInactiveBackgroundColor: "white",
         }}
       />
        <BottomTab.Screen
         name="TabFive"
         component={TabFiveScreen}
         options={{
           title: 'Charts',
           tabBarIcon: ({ color }) => <FontAwesome5 name="chart-area" size={24} color={color} />,
           tabBarActiveTintColor: "#A8886C",
           tabBarInactiveTintColor: 'gray',
           tabBarActiveBackgroundColor: "white",
           tabBarInactiveBackgroundColor: "white",
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome5>['name'];
   color: string;
 }) {
   return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 
 