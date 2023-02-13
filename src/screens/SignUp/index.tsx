import {FC, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type SignUpScreenProps = {};

const SignUpScreen: FC<SignUpScreenProps> = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
