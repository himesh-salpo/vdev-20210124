import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  useEffect(() => {
    if (!email) {
      setIsValidEmail(false);
    } else {
      if (validateEmail(email)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }

    if (!password) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }

    if (email && password && validateEmail(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleOnPress = () => {
    Alert.alert('Done');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>{'Email'}</Text>
        <View style={[styles.inputContainer, { marginLeft: 34, }]}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
            autoCapitalize="none"
          />
        </View>
      </View>
      {!isValidEmail ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{'Email is invalid.'}</Text>
        </View>
      ) : <></>}
      <View style={styles.field}>
        <Text style={styles.label}>{'Password'}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            defaultValue={password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
      </View>
      {!isValidPassword ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{'Password is invalid.'}</Text>
        </View>
      ) : <></>}
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity style={styles.button} onPress={handleOnPress} disabled={isDisabled}>
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
    marginBottom: 10,
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
    marginTop: 10,
  },
  errorContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default SignIn;