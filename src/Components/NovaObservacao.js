import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function NovaObservacao() {
    const [observacaoDescricao, setDescricao] = useState("");
    const [observacaoLocal, setLocal] = useState("");
    const [observacaoData, setData] = useState(new Date());
    const [animalId, setAnimalId] = useState("");
    const [usuarioId, setUsuarioId] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    async function SalvarObservacao() {

        if (!observacaoDescricao || !observacaoLocal || !observacaoData) {
            Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
            return;
        }

        await fetch('http://10.139.75.47:5251/api/Observacoes/CreateObservacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                observacaoDescricao: observacaoDescricao,
                observacaoLocal: observacaoLocal,
                observacaoData: observacaoData.toISOString(),
                animalId: animalId,
                usuarioId: usuarioId

            })
        })

            .then(res => res.json())
            .then(json => {
                setSucesso(true);
                setDescricao("");
                setLocal("");
                setData(new Date());
            })
            .catch(err => console.log(err));
    }

    const showDateTimePicker = () => {
        setShowDatePicker(true);
    };

    const onChangeDateTime = (event, selectedDate) => {
        const currentDate = selectedDate || observacaoData;
        setShowDatePicker(Platform.OS === 'ios');
        setData(currentDate);
    };


    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Descrição da observação"
                style={styles.input}
                value={observacaoDescricao}
                onChangeText={(digitado) => setDescricao(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                placeholder="Local da observação"
                style={styles.input}
                value={observacaoLocal}
                onChangeText={(digitado) => setLocal(digitado)}
                placeholderTextColor="black"
            />
            <TouchableOpacity onPress={showDateTimePicker} style={styles.input}>
                <Text>{observacaoData.toLocaleString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={observacaoData}
                    mode="datetime"
                    is24Hour={true}
                    display="default"
                    onChange={onChangeDateTime}
                />
            )}
            <TextInput
                placeholder="UsuarioId"
                style={styles.input}
                value={usuarioId}
                onChangeText={(digitado) => setUsuarioId(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                placeholder="AnimalId"
                style={styles.input}
                value={animalId}
                onChangeText={(digitado) => setAnimalId(digitado)}
                placeholderTextColor="black"
            />
            <TouchableOpacity onPress={SalvarObservacao} style={styles.button}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>

            {sucesso && (
                <View>
                    <Text style={styles.sucessoTxt}>Observação salva com sucesso!</Text>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    sucessoTxt: {
        marginTop: 15,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
});
