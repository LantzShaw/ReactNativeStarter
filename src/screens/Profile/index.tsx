import {FC, ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type ProfileScreenProps = {};

const ProfileScreen: FC<ProfileScreenProps> = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
