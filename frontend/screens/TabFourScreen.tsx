import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Text, Box, Pressable, HStack, VStack } from 'native-base';
import { View } from '../components/Themed';


export default function TabFourScreen() {
  return (
    <View style={styles.container}>
    <VStack space={4} alignItems="center" width="90%" >
    <VStack space={4} alignItems="center">
    <Box alignItems="center">
      <Pressable>
        {({
        isHovered,
        isPressed
      }) => {
        return <Box width='90%' borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
          <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Quick Start
              </Text>
              <FontAwesome name="play" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Start an empty workout
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
    <HStack width="90%" space={4} alignItems="center">
      <Box alignItems="center">
      <Pressable>
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
                New Routine
              </Text>
              <FontAwesome name="plus" size={24} color="black" />
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
        return <Box borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
            <HStack space={4}>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Search Routines
              </Text>
              <FontAwesome name="search" size={24} color="black" />
              </HStack>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Search saved routines
              </Text>

            </Box>;
      }}
      </Pressable>
    </Box>
      </HStack>
    </VStack>
    </VStack>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

