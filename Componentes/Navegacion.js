import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Image, SafeAreaView, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome, FontAwesome5, FontAwesome6, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, Zocial } from '@expo/vector-icons';

import Registro from './Registro';
import User from "./img/user.jpg";
import Home from './Home';
import Producto from './Producto';
import { Login } from './Login';
import Productos from './Productos';
import FAQItem from './PreguntasF';
import Contacto from './Contacto'
import Quienes from './QuienesSomos';
import Politicas from './Politicas';
import Bienvenida from './Bienvenida';
import Acercade from './Acercade';
import Dispositivos from './Dispositivos';
import ProductosCatalogo from './productosCatalogo';

const Stack = createNativeStackNavigator();
const TabsH = createBottomTabNavigator();
const StackP = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#f4f4f4',
          borderBottomWidth: 3,
        }}
      >
        <Image
          source={User}
          style={{
            height: 100,
            width: 100,
            borderRadius: 65,
            marginTop: 30
          }}
        />

        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: 'bold',
            color: '#111',
          }}
        >
          Isabella Joanna
        </Text>
      </View>

      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

export const NavHome = () => {
  return (
    //En esta parte es muy importante por que aqui es donde puedo cambiar el header solo le pondria los mismos estilos y listo
    <Stack.Navigator>
      <Stack.Screen name='Bienvenida' component={Bienvenida} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Registro' component={Registro} options={{ headerShown: false }} />
      <Stack.Screen name='Home' component={MiDrawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export const StackProductos = () => {
  return (
    <StackP.Navigator>
      <StackP.Screen name='Productos2' component={ProductosCatalogo} options={{ headerShown: false }} />
      <StackP.Screen
        name='Producto'
        component={Producto}

      />
    </StackP.Navigator>
  );
};

//Estos son los menús de abajo
export const NavTabsHome = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Home '}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />
      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsQuienes = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Quienes Somos'}
        component={Quienes}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsPoliticas = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Políticas '}
        component={Politicas}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsDispositivos = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Dispositivos '}
        component={Dispositivos}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsPreguntas = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Preguntas Frecuentes '}
        component={FAQItem}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsContacto = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Contacto '}
        component={Contacto}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

export const NavTabsAcercade = () => {
  return (
    <TabsH.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#c6ffa0' },
      }}>
      <TabsH.Screen
        name={'Acerca De'}
        component={Acercade}
        options={{
          headerShown: false,
          tabBarIcon: () => <FontAwesome name='home' size={30} color={'black'} />,
        }}
      />

      <TabsH.Screen
        name='Productos'
        component={StackProductos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name='shopping-cart' size={30} />,
        }}
      />
      <TabsH.Screen
        name='Listar'
        component={Productos}
        options={{
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name='clipboard-list' size={30} />,
        }}
      />
    </TabsH.Navigator>
  );
};

//Estos son los menus de la izquierda
export const MiDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#c6ffa0',// c6ffafe0 fondo con transparencia
        },
        headerTintColor: '#004883fe',
        headerTitleStyle: {
          color: '#004883fe'
        },
        drawerLabelStyle: {
          color: '#004883fe',
        },
      }}
    >

      <Drawer.Screen
        name='Principal'
        options={{
          headerShown: true,
          drawerIcon: () => <FontAwesome5 name='home' color={'#0056b3'} size={29} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
        }}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Quienes somos'
        options={({ navigation }) => ({
          title: 'Quienes somos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='account-group' color={'#3c75d4'} size={30} />,
        })}
        component={NavTabsQuienes}
      />

      <Drawer.Screen
        name='Politicas'
        options={({ navigation }) => ({
          title: 'Políticas',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='scroll' color={'#5a4019'} size={25} />,
        })}
        component={NavTabsPoliticas}
      />

      <Drawer.Screen
        name='Dispositivos'
        options={({ navigation }) => ({
          title: 'Dispositivos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <Zocial name='android' color={'#0a9500'} size={30} />,
        })}
        component={NavTabsDispositivos}
      />

      <Drawer.Screen
        name='Ayuda'
        options={({ navigation }) => ({
          title: 'Ayuda',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='help-network' color={'#0066ff'} size={30} />

        })}
        component={NavTabsHome}
      />

      <Drawer.Screen
        name='Preguntas frecuentes'
        options={({ navigation }) => ({
          title: 'Preguntas Frecuentes',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <MaterialCommunityIcons name='account-question' color={'#7a007a'} size={30} />
        })}
        component={NavTabsPreguntas}
      />

      <Drawer.Screen
        name='Contacto'
        options={({ navigation }) => ({
          title: 'Contacto',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='phone-alt' color={'#ff6f00'} size={30} />
        })}
        component={NavTabsContacto}
      />

      <Drawer.Screen
        name='Acerca'
        options={({ navigation }) => ({
          title: 'Acerca de',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome name='angle-left' size={40} color={'black'} style={{ marginLeft: 20, }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 45, height: 45, borderRadius: 15, marginRight: 15 }}
              />
            </View>
          ),
          drawerIcon: () => <FontAwesome5 name='info-circle' color={'#ff0000'} size={30} />,
        })}
        component={NavTabsAcercade}
      />

      <Drawer.Screen
        name='Cerrar sesion'
        options={{
          headerShown: false,
          drawerIcon: () => <FontAwesome5 name='sign-in-alt' size={30} />,
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Image
                source={require('./img/LogoTW.jpeg')}
                style={{ width: 80, height: 40, borderRadius: 15, }}
              />
            </View>
          ),
        }}
        component={NavHome}
      />
    </Drawer.Navigator>
  );
};
