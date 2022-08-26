import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import axios from "axios";
import {
  Center,
  Heading,
  Stack,
  Button,
  TextArea,
  Pressable,
  Box,
  Divider,
  VStack,
  Input,
  Icon,
  ScrollView,
  HStack,
  Image,
} from "native-base";
import React, { useState, useEffect } from "react";
import { isTerminatorless } from "@babel/types";

export default function AddExcercise({
  navigation,
}: RootTabScreenProps<"AddExcercise">) {
  const options = {
    method: "GET",
    url: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
      "X-RapidAPI-Key": "8358bc6afcmshadefcae87bc73dap1134cdjsn44f6765b128f",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
  const [excercises, setExcercises] = useState([]);
  useEffect(() => {
    fetchExcercises();
  }, []);
  useEffect(() => {
    //console.log(excercises)
  }, [excercises]);
  let isMounted = true;
  const fetchExcercises = async () => {
    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        if (isMounted) {
          setExcercises(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //console.log(excercises);
  const names: JSX.Element[] = [];
  excercises.forEach(pusher);
  function pusher(item: any) {
    names.push(
      <Pressable onPress={() => navigation.navigate("AddRoutine")}>
        {({ isHovered, isPressed }) => {
          return (
            <Box
              borderWidth="1"
              borderColor="coolGray.300"
              shadow="3"
              bg={
                isPressed
                  ? "coolGray.200"
                  : isHovered
                  ? "coolGray.200"
                  : "coolGray.100"
              }
              p="5"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >

              {item.name}
              <Image source={{
      uri: item.gifUrl
    }} alt="Alternate Text" size="sm"/>
            </Box>
          );
        }}
      </Pressable>
    );
  }
  return (
    <View style={styles.container}>
      <VStack alignItems={"center"} space="4">
        <Input
          placeholder="Search Excercises"
          bg="#fff"
          width="100%"
          borderRadius={4}
          py={3}
          px={1}
          fontSize={14}
          _web={{
            _focus: {
              borderColor: "muted.300",
            },
          }}
          InputLeftElement={
            <Icon
              size="sm"
              m={2}
              color="gray.400"
              as={<FontAwesome5 name="search" />}
            />
          }
        />
      </VStack>
      <Center h="100%" w="100%">
        <ScrollView>
          <Stack>{names}</Stack>
        </ScrollView>
      </Center>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
