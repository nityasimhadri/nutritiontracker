import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View} from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import { Stack, Button, TextArea, Box, Divider, VStack } from 'native-base';

export default function AddRoutine({ navigation }: RootTabScreenProps<'AddRoutine'>) {
  return (
    <View style={styles.container}>
      <VStack alignItems={'center'} space='4'>
      <Box alignItems="center" w="100%">
      <TextArea fontSize="2xl" h={12} autoCompleteType='off' placeholder="Routine Name" w="100%"/>
    </Box>
    <Button variant="outline" endIcon={<FontAwesome5 textAlignVertical='center' name="plus" size={12} />} onPress={() => navigation.navigate('AddExcercise')}>
    Add Excercise
    </Button>
    </VStack>



     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,c255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

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
});
