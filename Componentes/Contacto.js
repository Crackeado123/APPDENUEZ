import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { contactostyles } from './Estilos';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setMensaje] = useState('');

  const enviarMensaje = () => {
    // Construye el objeto de datos a enviar
    const datos = {
      nombre: nombre,
      correo: correo,
      comentario: comentario
    };
  
    // Realiza la solicitud POST a la URL especificada
    fetch('http://servidortropicalworld-1.onrender.com/comentarios/comentarioInvitado/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un problema al enviar el mensaje.');
      }
      // Limpiar campos después de enviar mensaje
      setNombre('');
      setCorreo('');
      setMensaje('');
      return response.json();
    })
    .then(data => {
      alert('Mensaje enviado exitosamente');
      // Puedes hacer algo con la respuesta del servidor si es necesario
      console.log(data);
    })
    .catch(error => {
      alert(error.message);
    });
  };
  

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={contactostyles.backgroundImage}
    >
      <ScrollView>
        <View style={contactostyles.container}>
          <View style={contactostyles.container2}>
            <Text style={contactostyles.title}>Contáctanos</Text>
            <Text style={contactostyles.subtitle}>¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!</Text>
            <View style={contactostyles.inputContainer}>
              <FontAwesome name="user" size={24} color="#555" style={contactostyles.icon} />
              <TextInput
                placeholder="Nombre"
                style={contactostyles.input}
                value={nombre}
                onChangeText={setNombre}
              />
            </View>
            <View style={contactostyles.inputContainer}>
              <FontAwesome name="envelope" size={24} color="#555" style={contactostyles.icon} />
              <TextInput
                placeholder="Correo Electrónico"
                style={contactostyles.input}
                keyboardType="email-address"
                value={correo}
                onChangeText={setCorreo}
              />
            </View>
            <View style={contactostyles.inputContainer}>
              <FontAwesome name="comment" size={24} color="#555" style={contactostyles.icon} />
              <TextInput
                placeholder="Mensaje"
                style={contactostyles.inputCom}
                multiline
                numberOfLines={4}
                value={comentario}
                onChangeText={setMensaje}
              />
            </View>
            <TouchableOpacity style={contactostyles.button} onPress={enviarMensaje}>
              <Text style={contactostyles.buttonText}>Enviar Mensaje</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={contactostyles.container}>
          <View style={contactostyles.contactLinksContainer}>
            <Text style={contactostyles.title}>Síguenos en Redes Sociales:</Text>

            <View style={contactostyles.contactLink}>
              <FontAwesome name="whatsapp" size={24} color="#25D366" style={contactostyles.contactIcon} />
              <Text style={contactostyles.contactText}> WhatsApp: +52 773456789</Text>
            </View>
            <View style={contactostyles.contactLink}>
              <FontAwesome name="facebook" size={24} color="#1877F2" style={contactostyles.contactIcon} />
              <Text style={contactostyles.contactText}>  Facebook: TropicalWOfficial</Text>
            </View>
            <View style={contactostyles.contactLink}>
              <FontAwesome name="telegram" size={24} color="#0088cc" style={contactostyles.contactIcon} />
              <Text style={contactostyles.contactText}>Telegram: @TropicalWorld</Text>
            </View>
            <View style={contactostyles.contactLink}>
              <FontAwesome name="globe" size={24} color="blue" style={contactostyles.contactIcon} />
              <Text style={contactostyles.contactText}>Web: tropicalworld.vercel.app</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Contacto;
