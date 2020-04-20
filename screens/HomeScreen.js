import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://italyculturalfitness.it' }} style={{ marginTop: -120 }} />
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
