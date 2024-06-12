import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Observacao from './NovaObservacao'


export default function AnimalEncontrado({ nome, raca, tipo, cor, sexo, dtdesaparecimento, dtencontro, status, foto, observacao }) {

    const [detalhes, setDetalhes] = useState(false);
    
    return (
        <ScrollView contentContainerStyle={css.box}>
            <View style={css.header}>
                <Text style={css.title}>ENCONTRADO</Text>
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
            {detalhes && (
                <View>
                    <View style={css.categoryBox}>
                        <Text style={css.categoryText}>{raca}</Text>
                        <Text style={css.categoryText}>{cor}</Text>
                        <Text style={css.categoryText}>{sexo}</Text>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

const css = StyleSheet.create({
    box: {
        height: 450,
        borderColor: 'rgba(203, 108, 230, 0.24)',
        borderRadius: 10,
        borderWidth: 3,
        padding: 15,
        marginTop: 30,
        width: 370,
        margin: '0 auto',
    },
    header: {
        paddingHorizontal: 15, // Adicionando preenchimento lateral ao contêiner do título
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
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
        borderRadius: 10,
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    obsText: {
        marginTop: 4,
        fontWeight: '500'
    },
    categoryText: {
        fontSize: 14,
        color: '#424242',
        borderRadius: 10,
    },
});