import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function AnimalEncontrado({ nome, raca, tipo, cor, sexo, dtencontro, status, foto, observacao }) {
    const [detalhes, setDetalhes] = useState(false);

    const altura = detalhes ? 590 : 480;
  
    if (status !== 0) {
        return null; 
    }

    return (
        <ScrollView contentContainerStyle={[css.box, { height: altura }]}>
            <View style={css.header}>
                <Text style={css.title}>ENCONTRADO</Text>
            </View>
            <View style={css.boxImage}>
                <Image style={css.image} source={{ uri: foto }}></Image>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{nome} - {tipo}</Text>
                <Text style={css.dataencontro}>Data que foi encontrado: {dtencontro}</Text>
            </View>
            <View style={css.caixa}>
            <TouchableOpacity style={[css.infos, detalhes && css.infoAparecendo]} onPress={() => setDetalhes(!detalhes)}>
                    <Text style={css.detalhesTxt}>Detalhes</Text>
                </TouchableOpacity>
            </View>
          
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
        backgroundColor: '#EBB000',
        alignItems: 'left',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    dataencontro:{
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
        fontSize: 21,
    },
    categoryBox: {
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 15,
    },
    categoryText: {
        fontSize: 16,
        color: '#424242',
        borderRadius: 10,
    },
    infos: {
        width: '38%',
        height: 30,
        marginTop: 6,
        marginLeft: '30%',
        textAlign: 'center',
        backgroundColor: '#CB6CE6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    detalhesTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoAparecendo: {
        backgroundColor: '#EBB000',
    },
});
