import React, { useState } from 'react';
import style from './assets/styles/autstyle';

import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const AuthScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isEmailvalid = (email: string)=>{
    return email.endsWith('@giua.edu.it');
  };

  const areFieldsEmpty = () =>{
    if(!email || !password){
      setError('Compila tutti i campi');
      return;
    }

    if(!isEmailvalid(email)){
      setError('Email non valida');
      return;
    }

    setError('');
    console.log('Email', email);
    console.log('Password', password);
  };

  return(
    <View style={style.authContainer}>
      <Text style={style.titleAut}>Login</Text>
      <Text style={style.labelAuth}>Email</Text>
      <TextInput
        style={style.inputAuth}
        placeholder='Inserisci la tua email'
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <Text style={style.labelAuth}>Password</Text>
      <TextInput
        style={style.inputAuth}
        placeholder='Inserisci la tua password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      {error ? <Text style={style.errorAuth}>{error}</Text> : null}

      <TouchableOpacity style={style.buttonAuth} onPress={areFieldsEmpty}>
        <Text style={style.textAuth}>Login</Text>
      </TouchableOpacity>

    </View>
  );

};

export default AuthScreen;