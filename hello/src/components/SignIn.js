import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>{'Email'}</Text>
        <View style={[styles.inputContainer, { marginLeft: 34, }]}>
          <TextInput
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={text => console.log(text)}
            defaultValue={''}
          />
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>{'Password'}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={text => console.log(text)}
            defaultValue={''}
          />
        </View>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>{'Sign In'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 80,
    marginHorizontal: 30,
  },
  field: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  label: {
    marginTop: 8,
    marginRight: 20,
    fontSize: 18,
  },
  inputContainer: {
    width: '80%',
    height: 40,
    paddingRight: 30,
    alignItems: 'flex-end',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
  button: {
    width: 100,
    height: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
  },
});

export default SignIn;