import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import LocationScreen from "../screens/LocationScreen";
import ProfileScreen from "../screens/ProfileScreen";


const Tab = createBottomTabNavigator()

export default function NavigationTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let etiqueta;
                    if (route.name === "Home") {
                        iconName = focused ? "ios-home" : "ios-home-outline";
                        etiqueta = <Ionicons name={iconName} size={size} color={color} />;
                    }
                    else if (route.name === "Location") {
                        iconName = focused ? "map-marker" : "map-marker-outline";
                        etiqueta = (
                            <MaterialCommunityIcons name={iconName} size={size} color={color} />
                        );
                    }

                    else if (route.name === "Favorite") {
                        iconName = focused ? "favorite" : "favorite-outline";
                        etiqueta = <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    }

                    else if (route.name === "Profile") {
                        iconName = focused ? "user-circle" : "user-circle-o";
                        etiqueta = (
                            <FontAwesome name={iconName} size={size} color={color} />
                        );
                    }

                    // retornamos la etiqueta
                    return etiqueta;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            })}>

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: '',
            }} />
            <Tab.Screen name="Location" component={LocationScreen} options={{
                tabBarLabel: '',
            }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarLabel: '',
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: '',
            }} />
        </Tab.Navigator>
    )
}