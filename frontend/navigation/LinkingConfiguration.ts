/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'four',
            },
          },
          TabFive: {
            screens: {
              TabFiveScreen: 'five',
            },
          },
        },
      },
      Modal: 'modal',
      AddRoutine: 'add',
      AddExcercise: 'exc',
      StartRoutine: 'start',
      SearchRoutine: 'search',
      NotFound: '*',
    },
  },
};

export default linking;
