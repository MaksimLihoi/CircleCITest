import React from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

const App = () => {
  const [message, setMessage] = React.useState();

  return (
    <View>
      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage('Hello Tester');
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
      <Text testID="new-text">Some new text</Text>
      <Text>Some new text 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: 'Arial',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
