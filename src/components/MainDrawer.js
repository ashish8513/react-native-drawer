import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

//add all screen
import Dashboard from '../Screen/Dashboard'
import Home from '../Screen/Home'
import Help from '../Screen/Help'
import Profile from '../Screen/Profile'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainDrawer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='MainDashboard'>
                    {
                        () => (
                            <Drawer.Navigator>
                                <Drawer.Screen name="Home" component={Home} />
                                <Drawer.Screen name="Dashboard" component={Dashboard} />
                                <Drawer.Screen name="Help" component={Help} />
                                <Drawer.Screen name="Profile" component={Profile} />
                            </Drawer.Navigator>
                        )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainDrawer