import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnimalEncontrado from '../Components/AnimalEncontrado';

export default function Home() {
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAnimal() {
      await fetch('http://10.139.75.47:5251/api/Animais/GetAllAnimais', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then( res => res.json() )
        .then( json => setAnimal( json ))
        .catch( err => console.log( err ) );
          setLoading(false);
      }

  
  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <View style={css.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        animal.length > 0 ? (
          <>
            <FlatList
              data={animal}
              renderItem={({ item }) => (
                <AnimalEncontrado
                  nome={item.animalNome}
                  raca={item.animalRaca}
                  tipo={item.animalTipo}
                  cor={item.animalCor}
                  sexo={item.animalSexo}
                  observacao={item.animalObservacao}
                  foto={item.animalFoto}
                  dtdesaparecimento={item.animalDtDesaperecimento}
                  dtencontro={item.animalDtEncontro}
                  status={item.animalStatus}
                />
              )}
              keyExtractor={(item) => item.animalId}
              contentContainerStyle={css.listContainer}
            />
          </>
        ) : (
          <Text style={css.text}>Recarregue a página.</Text>
        )
      )}
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  stories: {
    width: "100%",
    height: 100,
  }
})