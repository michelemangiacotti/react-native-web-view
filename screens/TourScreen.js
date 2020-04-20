import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class LinksScreen extends React.Component {
  render() {    
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://italyculturalfitness.it/tour-florence/' }} style={{ marginTop: -120 }}/>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
