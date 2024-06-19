import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Observacao from './NovaObservacao';


export default function Animais({ nome, raca, tipo, cor, sexo, status, foto, observacao, dtdesaparecimento }) {
    const [detalhes, setDetalhes] = useState(false);
    const [observacoes, setObservacoes] = useState(false);

    const altura = () => {
        if (observacoes) return 890;
        if (detalhes) return 600;
        return 480;
    };

    const mostrarDetalhes = () => {
        setDetalhes(!detalhes);
        if (observacoes) setObservacoes(false);
    };

    const mostrarObservacao = () => {
        setObservacoes(!observacoes);
        if (detalhes) setDetalhes(false);
    };

    if (status !== 1) {
        return null; 
    }

    return (
        <ScrollView contentContainerStyle={[css.box, { height: altura() }]}>
            <View style={css.header}>
                <Text style={css.title}>PERDIDO</Text>
            </View>
            <View style={css.boxImage}>
                <Image style={css.image} source={{ uri: foto }}></Image>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{nome} - {tipo}</Text>
                <Text style={css.datadesaparecimento}>Data que desapareceu: {dtdesaparecimento}</Text>
            </View>
            <View style={css.caixa}>
                <TouchableOpacity style={[css.infos, detalhes && css.infoAparecendo]} onPress={mostrarDetalhes}>
                    <Text style={css.infosTxt}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.infos, observacoes && css.infoAparecendo]} onPress={mostrarObservacao}>
                    <Text style={css.infosTxt}>Nova Observação</Text>
                </TouchableOpacity>
            </View>
            {detalhes && (
                <View style={css.categoryBox}>
                    <Text style={css.categoryText}>{raca}</Text>
                    <Text style={css.categoryText}>{cor}</Text>
                    <Text style={css.categoryText}>{sexo}</Text>
                    <Text style={css.categoryText}>{observacao}</Text>
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
    datadesaparecimento:{
        fontSize: 15,
        marginTop: 5,
        color: 'black'
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
    },
    descriptionBox: {
        marginBottom: 10,
    },
    descriptionText: {
        fontWeight: '500',
        marginLeft: 20,
        fontSize: 21,
    },
    caixa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    infos: {
        width: '38%',
        height: 30,
        marginTop: 6,
        backgroundColor: '#EBB000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    infosTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoAparecendo: {
        backgroundColor: '#CB6CE6',
    },
    categoryBox: {
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 20,
    },
    categoryText: {
        fontSize: 16,
        color: '#424242',
        borderRadius: 10,
    },
});
