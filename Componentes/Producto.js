import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Alert, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import LottieView from 'lottie-react-native'; // Importa el componente LottieView

const Producto = ({ route }) => {
  const { id } = route.params;
  const [dato, setDato] = useState(null);
  const [load, setLoad] = useState(false);
  const [loadingData, setLoadingData] = useState(true); // Nuevo estado para controlar la carga de datos

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = async () => {
    try {
      const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el producto');
      }
      const data = await response.json();
      setDato(data);
      setLoad(true);
      setLoadingData(false); // Marcar la carga de datos como completada
    } catch (error) {
      console.error(error);
      Alert.alert('Ocurrió un error al obtener el producto');
    }
  };

  const screenL = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card style={styles.card}>
          <View style={styles.imageContainer}>
            <Card.Cover source={{ uri: dato.imagen }} style={styles.image} />
          </View>
          <Card.Content>
            <Title>{dato.nombre}</Title>
            <Paragraph>Precio: ${dato.precio} MXN</Paragraph>
            <Paragraph>Descripción: {dato.descripcion}</Paragraph>
            {dato.valoracion && (
              <Paragraph>Valoración: {dato.valoracion.rate}</Paragraph>
            )}
            {dato.compradores && (
              <Paragraph>{dato.compradores} personas compraron este producto</Paragraph>
            )}
          </Card.Content>
          <Card.Actions>
            <IconButton icon="heart" onPress={() => {}} />
          </Card.Actions>
        </Card>
      </ScrollView>
    );
  };

  const screenU = () => {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require('./Animations/Ani1.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <Text>Cargando Datos...</Text>
        <ActivityIndicator />
      </View>
    );
  };

  return <View>{loadingData ? screenU() : screenL()}</View>;
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
    margin: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:77
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:250
  },
  animationContainer: {
    width: 500, // Ancho deseado de la animación
    height: 500, // Altura deseada de la animación
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default Producto;
