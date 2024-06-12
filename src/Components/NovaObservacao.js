import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function NovaObservacao() {

    const [descricao, setDescricao] = useState("");
    const [local, setLocal] = useState("");
    const [data, setData] = useState("");

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Descrição da observação"
                style={styles.input}
                value={descricao}
                onChangeText={(digitado) => setDescricao(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                placeholder="Local da observação"
                style={styles.input}
                value={local}
                onChangeText={(digitado) => setLocal(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                placeholder="Data da observação"
                style={styles.input}
                value={data}
                onChangeText={(digitado) => setData(digitado)}
                placeholderTextColor="black"
            />
            <TouchableOpacity>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center'
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
        bordercolor: '#FFC516',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})