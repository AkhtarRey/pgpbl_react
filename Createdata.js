import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';

const Createdata = () => {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [kelas, setKelas] = useState('');
  const [jeniskelamin, setJeniskelamin] = useState('');
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');

  const submit = () => {
    const data = {
      nama: nama,
      nim: nim,
      kelas: kelas,
      jeniskelamin: jeniskelamin,
      color: color,
      icon: icon,
    };
    fetch('http://10.0.2.2:3000/mahasiswa', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert('Data tersimpan');
        setNama('');
        setNim('');
        setKelas('');
        setJeniskelamin('');
        setColor('');
        setIcon('');
      });
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Tambah Data Mahasiswa</Text>
        <ScrollView style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            value={nama}
            onChangeText={value => setNama(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="NIM"
            value={nim}
            onChangeText={value => setNim(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Kelas"
            value={kelas}
            onChangeText={value => setKelas(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Jenis Kelamin"
            value={jeniskelamin}
            onChangeText={value => setJeniskelamin(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Warna (HEX)"
            value={color}
            onChangeText={value => setColor(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Icon (Fontawesome 5)"
            value={icon}
            onChangeText={value => setIcon(value)}
          />
          <Button title="Simpan" style={styles.button} onPress={submit} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  title: {
    paddingVertical: 12,
    backgroundColor: '#333',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 10,
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    padding: 8,
    width: '100%',
    marginVertical: 5,
  },
  button: {
    marginVertical: 10,
  },
});
