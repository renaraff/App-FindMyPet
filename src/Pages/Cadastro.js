import { Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Cadastro() {
    const { setLogin, setCadastro } = useContext(AuthContext);

    const [nome, setNome]  = useState();
    const [telefone, setTelefone]  = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
  

    async function postUser() {     
        
        if (!nome || !telefone || !email || !senha ) {
            Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
            return;
        }
        setCadastro(false);
        setLogin(false);
        fetch('http://10.139.75.47:5251/api/Usuarios/CreateUser', {
          method: 'POST',
          body: JSON.stringify({
            UsuarioNome: nome,
            UsuarioTelefone: telefone,
            UsuarioEmail: email,
            UsuarioSenha: senha
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));    
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            <Text style={css.title}>Perdeu o seu pet e deseja encontra-lo</Text>
            <Text style={css.title}>o mais rápido possível? </Text>
            <Text style={css.subtitle}>Crie uma conta para acessar o painel de busca de pets</Text>
            <TextInput
             placeholder="Nome Completo"
             placeholderTextColor="black"
              style={css.input}
              value={nome}
              onChangeText={(digitado) => setNome(digitado)}
              ></TextInput>

            <TextInput
            placeholder="Telefone"
            placeholderTextColor="black"
            style={css.input}
            value={telefone}
            onChangeText={(digitado) => setTelefone(digitado)}
            ></TextInput>

            <TextInput
            placeholder="E-mail"
            placeholderTextColor="black"
            style={css.input}
            value={email}
            onChangeText={(digitado) => setEmail(digitado)}
            ></TextInput>

            <TextInput
            placeholder="Senha"
            secureTextEntry
            placeholderTextColor="black"
            style={css.input}
            value={senha}
            onChangeText={(digitado) => setSenha(digitado)}
            ></TextInput>

            <TouchableOpacity style={css.button} onPress={postUser}>
                <Text style={css.btnText}>CADASTRAR</Text>
            </TouchableOpacity>

            <Text style={css.cadastroText} onPress={() => { setCadastro(true); setLogin(false); }}>Já possui uma conta? Entre</Text>

        </ScrollView>
    )
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title:{
        fontWeight: '500',
        fontSize: 16
    },
    subtitle:{
        fontSize: 13.5,
        marginTop: 14,
        fontWeight: '400',
        marginBottom: 10,
        color: '#727272'
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
    cadastroText: {
        color: "#727272",
        marginTop: 11,
    },
})