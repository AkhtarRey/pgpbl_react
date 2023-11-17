import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Countnumber = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)}></Button>
      <Button title="Reset" onPress={() => setNumber(0)} color={'red'}></Button>
    </View>
  );
};

export default Countnumber;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
