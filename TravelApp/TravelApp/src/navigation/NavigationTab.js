import React, { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons,MaterialIcons , MaterialCommunityIcons } from "@expo/vector-icons";
import FavoriteScreen from "../screens/FavoriteScreen";
import LocationScreen from "../screens/LocationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SiteScreen from '../screens/SiteScreen';
import HomeNavigation from "../navigation/NavigationStack/HomeNavigation";

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
                        etiqueta = <MaterialIcons  name={iconName} size={size} color={color} />;
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

            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarLabel: "", headerShown: false,
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
            {/*<Tab.Screen  
                name="Site"
                component={SiteScreen}
                options={{
                    title:"",
                    headerTransparent:true,
                tabBarLabel: "Detail Site",
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user-circle"  size={size} color={color} />
                ),
                }}
            />*/}
        </Tab.Navigator>
    )
}