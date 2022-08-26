import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Button, ScrollView, Text, Box, Pressable, HStack, Stack } from 'native-base';
import { View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

export default function TabFourScreen({ navigation }: RootTabScreenProps<'TabFour'>) {

  return (
    <View style={styles.container}>
    <HStack mb="2.5" mt="1.5" direction="column" space={3}>
    <Box alignItems="center" >
      <Pressable onPress={() => navigation.navigate('StartRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box 
         borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
          <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Quick Start
              </Text>
              <FontAwesome5 name="play" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Start an empty workout
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
      <Box alignItems="center">
      <Pressable onPress={() => navigation.navigate('AddRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box  borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                New Routine
              </Text>
              <FontAwesome5 name="plus" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700" >
                Add a new fitness plan
              </Text>

            </Box>;
      }}
      </Pressable >
    </Box>
    <Box alignItems="center">
      <Pressable onPress={() => navigation.navigate('SearchRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Find Routine
              </Text>
              <FontAwesome5 name="search" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Search saved routines
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
    </HStack>
    <HStack mb="2.5" mt="1.5" direction="column" space={3}>
    <Box alignItems="center" >
      <Pressable onPress={() => navigation.navigate('StartRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box 
         borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
          <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Quick Start
              </Text>
              <FontAwesome5 name="play" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Start an empty workout
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
      <Box alignItems="center">
      <Pressable onPress={() => navigation.navigate('AddRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box  borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                New Routine
              </Text>
              <FontAwesome5 name="plus" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700" >
                Add a new fitness plan
              </Text>

            </Box>;
      }}
      </Pressable >
    </Box>
    <Box alignItems="center">
      <Pressable onPress={() => navigation.navigate('SearchRoutine')}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Find Routine
              </Text>
              <FontAwesome5 name="search" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Search saved routines
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
    </HStack>
    
    </View>

  );
}

const styles = StyleSheet.create({

  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  
    
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    paddingTop: 150,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  fill: {
    flex: 0,
    height: '100%',
    position: 'absolute',
    left: 0,
    width: '100%',
    overflow: 'hidden',
},


});

