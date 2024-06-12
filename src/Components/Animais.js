import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Observacao from './NovaObservacao'


export default function Animais({ nome, raca, tipo, cor, sexo, dtdesaparecimento, dtencontro, status, foto, observacao }) {

    const [detalhes, setDetalhes] = useState(false);
    const [observacoes, setObservacoes] = useState(false);

    return (
        <ScrollView contentContainerStyle={css.box}>
            <View style={css.header}>
                <Text style={css.title}>PERDIDO</Text>
            </View>
            <View style={css.boxImage}>
                <Image style={css.image} source={{ uri: foto }}></Image>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{nome} - {tipo}</Text>
            </View>
            <TouchableOpacity style={css.detalhes} onPress={() => setDetalhes(!detalhes)}>
                <Text style={css.detalhesTxt}>Detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.detalhes} onPress={() => setObservacoes(!observacoes)}>
                <Text style={css.obsText}>Nova observação</Text>
            </TouchableOpacity>
            {detalhes && (
                <View>
                    <View style={css.categoryBox}>
                        <Text style={css.categoryText}>{raca}</Text>
                        <Text style={css.categoryText}>{cor}</Text>
                        <Text style={css.categoryText}>{sexo}</Text>
                        <Text style={css.categoryText}>{observacao}</Text>
                    </View>
                </View>
            )}

            {observacoes && (
                <Observacao />
            )}
        </ScrollView>
    )
}

const css = StyleSheet.create({
    box: {
        height: 562,
        borderColor: 'rgba(203, 108, 230, 0.24)',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: 30,
        width: 370,
        margin: '0 auto',
    },
    header: {
        padding: 13,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#CB6CE6',
        alignItems: 'left',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    boxImage: {
        width: "100%",
        height: 300,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    descriptionBox: {
        marginBottom: 10,
    },
    descriptionText: {
        fontWeight: '500',
        textAlign: "justify",
        fontSize: 17,
    },
    detalhes: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    detalhesTxt: {
        color: "#EBB000",
        fontSize: 16,
        fontWeight: 'bold'
    },
    categoryBox: {
     textAlign: 'center',
     alignItems: 'center'
    },
    obsText: {
        color: "#EBB000",
        fontSize: 16,
        fontWeight: 'bold'
    },
    categoryText: {
        fontSize: 16,
        color: '#424242',
        borderRadius: 10,
    },
});