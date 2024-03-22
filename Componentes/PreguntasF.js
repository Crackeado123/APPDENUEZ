import React, { useState } from 'react';
import { View, Text,ImageBackground, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importación de un icono de FontAwesome
import { preguntasFstyles } from './Estilos'; // Importación de estilos definidos en otro archivo

// Componente para un elemento de preguntas frecuentes (FAQ)
const FAQItem = ({ question, answer }) => {
  // Estado para controlar si el elemento está expandido o no
  const [expanded, setExpanded] = useState(false);

  // Función para alternar la expansión del elemento
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Configura la animación de expansión
    setExpanded(!expanded); // Cambia el estado de expansión
  };

  // Esto de aqui renderiza el componente
  return (
    <View style={preguntasFstyles.faqItem}>
      <TouchableOpacity onPress={toggleExpand} style={preguntasFstyles.header}>
        <Text style={preguntasFstyles.question}>{question}</Text> 
        <FontAwesome name={expanded ? 'chevron-up' : 'chevron-down'} size={20} color='#333' /> 
      </TouchableOpacity>
      {expanded && <Text style={preguntasFstyles.answer}>{answer}</Text>} 
    </View>
  );
};

// este el el componente de preguntasf
const FAQ = () => {
  // Datos de las preguntas
  const faqData = [
    {
      question: '¿Cómo creo una cuenta?', 
      answer: 'Puedes crear una cuenta haciendo clic en el botón "Registrarse" y siguiendo los pasos proporcionados.', 
    },
    {
      question: '¿Cómo restablezco mi contraseña?', 
      answer: 'Ve a la pantalla de inicio de sesión y haz clic en "Olvidé mi contraseña". Sigue las instrucciones para restablecerla.', 
    },
    {
      question: '¿Cómo contacto con soporte?', 
      answer: 'Puedes contactar con nuestro equipo de soporte enviando un correo electrónico a support@example.com.', 
    },
  ];

  // renderiza el componente de nuevo
  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')} 
      style={preguntasFstyles.backgroundImage} 
    >
      <ScrollView style={preguntasFstyles.container}>
        <Text style={preguntasFstyles.title}>Preguntas Frecuentes</Text> 
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} /> // Pasa la pregunta y la respuesta como props
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default FAQ; 
