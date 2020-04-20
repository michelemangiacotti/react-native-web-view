import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://italyculturalfitness.it/contatti-2/' }} style={{ marginTop: 20 }} />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
