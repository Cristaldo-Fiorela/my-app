import React from "react"
import { createStackNavigator } from '@react-navigation/stack'


import CitiesScreen from './screens/CitiesScreen'
import DetailsScreen from "./screens/DetailsScreen"

const Stack = createStackNavigator()

const FirstScreenNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{        
                headerTintColor: '#9FBFB9',
                headerStyle: { backgroundColor: '#285954' },
            }}
        >
            <Stack.Screen //SCREEN DONDE SE RENDERIZA
                name='Where your dreams begin' // FIXME: mejorar la frase a una que no sea repetitiva
                component={CitiesScreen}
            />
            <Stack.Screen  // COMPONENTE A RENDERIZAR
                name='Itineraries'
                component={DetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default FirstScreenNavigator
