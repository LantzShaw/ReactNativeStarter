import {FC, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type SignInScreenProps = {};

const SignInScreen: FC<SignInScreenProps> = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
