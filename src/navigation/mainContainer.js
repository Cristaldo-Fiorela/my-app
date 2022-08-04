import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from './screens/HomeScreen'
import CitiesScreen from './screens/CitiesScreen'

import FirstScreenNavigator from './stackNavigation'


//Screen names
const homeName = 'Home'
const citiesName = 'Cities'

const Tab = createBottomTabNavigator()

export default function MainContainer() {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#A62D43'},
                        tabBarStyle: { backgroundColor: '#285954', height: 60 },
                        tabBarLabelStyle: { fontSize: 15, marginBottom: 5 },
                        tabBarActiveTintColor: '#F27E7E',
                        tabBarInactiveTintColor: '#9FBFB9',
                        tabBarIcon: ({ focused, color, size }) => {
                            let IconName;
                            let RouteName = route.name;

                            if (RouteName === homeName) {
                                IconName = focused ? 'home' : 'home-outline'
                            } else if (RouteName === citiesName) {
                                IconName = focused ? 'trail-sign' : 'trail-sign-outline'
                            }
                            return <Ionicons name={IconName} size={size} color={color} />
                        }
                    })}
                >
                    <Tab.Screen name={homeName} component={HomeScreen} />
                    <Tab.Screen name={citiesName} component={FirstScreenNavigator} />

                </Tab.Navigator>

            </NavigationContainer>
        </>
    )
}
