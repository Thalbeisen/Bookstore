import * as React from "react";
import { Header, Icon } from "react-native-elements";
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import EditScreen from './src/screens/EditScreen';

export default () => {
  return (
    <SafeAreaView style={styles.appHome}>
    <EditScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appHome: {
    flex: 1,
    backgroundColor: '#765A56'
  }
})