import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MiDrawer, NavHome, NavTabsHome } from './Componentes/Navegacion';

export default function App() {
  return (
    <NavigationContainer>
        <NavHome />
    </NavigationContainer>
  );
}
