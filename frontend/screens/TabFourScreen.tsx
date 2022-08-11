import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import Modal from 'react-native-modal';
import { Button, ScrollView, Text, Box, Pressable, HStack, VStack } from 'native-base';
import { View } from '../components/Themed';
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabFourScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
    <VStack space={4} alignItems="center">
    <Box alignItems="center">
      <Pressable onPress={() => setModalVisible(true)}>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box 
        width='90%' borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
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
      <Pressable>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box width="100%" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
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
      </Pressable>
    </Box>
    <Box alignItems="center">
      <Pressable>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box width="85%" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Search Routines
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
    </VStack>
    <Modal isVisible={modalVisible} animationIn='slideInUp' animationOut='slideOutDown' >
        <View style={styles.fill}>
          <Button onPress={() => setModalVisible(false)}>
            Close!
          </Button>
          <Text>Hello!</Text>
        </View>
      </Modal>

    </View>

  );
}

const styles = StyleSheet.create({
  // containerView: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection:'row',
  // },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
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

