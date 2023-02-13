import {FC, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type HomeScreenProps = {};

const HomeScreen: FC<HomeScreenProps> = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Hi, I'm Lantz</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f40',
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: '#000',
  },
});
