import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Quienesstyles } from './Estilos';
import Swiper from 'react-native-swiper';

const Quienes = () => {
  const data = [
    {
      id: 1,
      image: require('./img/LogoTW.jpeg')
    },
    {
      id: 2,
      image: require('./img/user.jpg')
    },
    {
      id: 3,
      image: require('./img/nn.png')
    },
    {
      id: 4,
      image: require('./img/user.jpg')
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        swiperRef.current.scrollBy(1);
      } else {
        swiperRef.current.scrollBy(-currentIndex);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderPagination = () => {
    return (
      <View style={Quienesstyles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              Quienesstyles.paginationDot,
              currentIndex === index && Quienesstyles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Animatable.View animation="bounceInDown" style={Quienesstyles.item}>
      <Image source={item.image} style={Quienesstyles.itemImage} />
    </Animatable.View>
  );

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={Quienesstyles.backgroundImage}
    >
      <View style={Quienesstyles.container}>
        <Text style={Quienesstyles.title}>¡Bienvenido!</Text>
        <Text style={Quienesstyles.title}>Esto es Tropical World</Text>
        <Swiper
          ref={swiperRef}
          loop={false}
          autoplay={false}
          showsPagination={false}
          onIndexChanged={(index) => setCurrentIndex(index)}
        >
          {data.map((item, index) => (
            <View key={index}>
              <Image source={item.image} style={Quienesstyles.itemImage} />
            </View>
          ))}
        </Swiper>
        {renderPagination()}

        <View style={Quienesstyles.container2}>
          <Text style={Quienesstyles.title}>Conócenos</Text>
          <Text style={Quienesstyles.description}>
            Somos el Equipo 4, conformado por Nico, Gabriel, Zuñiga y Jose Flores. Nuestra misión es desarrollar una página web que emule una tienda virtual especializada en la venta de productos y accesorios para bebés. Estamos comprometidos en brindar la mejor experiencia de compra para los futuros padres y aquellos que buscan artículos de calidad para sus pequeños.
          </Text>

          <Text style={Quienesstyles.description}>
            ¡Gracias por ser parte de nuestra comunidad y confiar en nosotros para satisfacer tus necesidades!
          </Text>
        </View>

      </View>
    </ImageBackground>

  );
};

export default Quienes;
