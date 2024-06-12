import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';

import Encontrados from '../Pages/Encontrados';

import Login from '../Pages/Login';

import Cadastro from '../Pages/Cadastro';

const Tab = createBottomTabNavigator();

export default function Rotas() {


    const { login, setLogin, cadastro, setCadastro } = useContext( AuthContext );

    if( login == false ) {
        return(
            <Login />
        )
    }

    if( cadastro ) {
        return(<Cadastro />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#ffff',
                        width: '100%',
                    },
                    tabBarActiveTintColor: "black"
                }}
            >
                <Tab.Screen
                    name="Perdidos"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Encontrados"
                    component={Encontrados}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}



