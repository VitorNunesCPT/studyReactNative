import { StyleSheet, Text, View, Image } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import React from 'react';
import { Button } from 'native-base';
import { TextInput } from 'react-native-web';

import logo from './assets/logo.svg';
import icon_email from './assets/icon_email.svg';
import icon_password from './assets/icon_password.svg';

function acessarConta() {
  alert('Acessando conta...');
}

export default function App() {
  const [hidepass, setHidepass] = React.useState(true);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Box>
          <Image source={logo} style={styles.logo} />
        </Box>

        <Text style={styles.label}>Acesse sua conta</Text>

        <View>
          <View style={styles.input}>
            <Image source={icon_email} style={styles.icon} />
            <TextInput
              style={styles.inputText}
              placeholder="E-mail"
              keyboardtype="email-address"
              placeholderTextColor="#7C7C8A"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.input}>
            <Image source={icon_password} style={styles.icon} />
            <TextInput
              style={styles.inputText}
              placeholder="Senha"
              autoCapitalize="none"
              placeholderTextColor="#7C7C8A"
              secureTextEntry={hidepass}
            />
          </View>
        </View>

        <Button onPress={acessarConta} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo: {
    width: 150,
    height: 150,
  },
  label: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: '#E1E1E6',
    marginBottom: 24,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121214',
    borderRadius: 6,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  inputText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#E51C44',
    borderRadius: 6,
    marginTop: 32,
    paddingHorizontal: '30%',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
