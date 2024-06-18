import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, setCadastro, setLogin } = useContext(AuthContext);

    function RealizaLogin(){
      Login(email, senha)
    }

    const { error } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require("../../assets/logo.png")} style={styles.logo} />
            <Text style={styles.title}>Entre na sua conta para acessar o painel de busca</Text>
            <TextInput
                inputMode="email"
                placeholder="Email do Usuário"
                style={styles.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={styles.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="black"
            />
            <TouchableOpacity style={styles.button} onPress={() => RealizaLogin()}>
                <Text style={styles.btnText}>ENTRAR</Text>
            </TouchableOpacity>
              {error &&
                <View style={styles.error}>
                    <Text style={styles.errorText}>Email ou Senha incorretos.</Text>
                </View>
            }
            <Text style={styles.cadastroText} onPress={() => { setCadastro(true); setLogin(true); }}>Ainda não tem uma conta? Cadastre-se</Text>
          
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      logo: {
        width: 190,
        height: 190,
      },
      title:{
        fontSize: 13.5,
        marginBottom: 10,
        color: '#727272',
      },
      input: {
        width: '90%',
        height: 50,
        borderWidth: 2.5,
        borderColor: 'rgba(203, 108, 230, 0.24)',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontWeight: '400',
      },
      button: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFC516',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      errorText: {
        marginTop: 15,
        fontSize: 16
      },
    cadastroText: {
        color: "#727272",
        marginTop: 11,
    },

    });
    
