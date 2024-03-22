import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Politicasstyles } from './Estilos';

const Politicas = () => {
  const policies = [
    { title: 'Información Recopilada.', description: 'Para administrar su privacidad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos Para administrar su privacidad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos.' },
    { title: 'Uso de la Información.', description: 'Para administrar su seguridad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos Para administrar su privacidad, puede usar nuestros servicios de diversas maneras. Por ejemplo, puede registrarse para obtener una Cuenta de Google si desea crear y administrar contenido, como correos electrónicos y fotos, o ver resultados de búsqueda más relevantes. Además, puede usar muchos servicios de Google sin acceder a la cuenta o incluso sin necesidad de crear una, como realizar búsquedas en Google o mirar videos en YouTube. También puede elegir navegar en la Web mediante un modo privado, como el modo Incógnito de Chrome, que mantiene su navegación privada cuando varias personas comparten el mismo dispositivo. Además, en todos nuestros servicios, puede modificar la configuración de privacidad para controlar si recopilamos ciertos tipos de datos y cómo los usamos.' },
    { title: 'Seguridad.', description: 'Esta es la descripción de la política de tecnologías.' },
    { title: 'Enlaces a Terceros.', description: 'Esta es la descripción de la política de tecnologías.' },
    { title: 'Cambios en la Política de Privacidad.', description: 'Esta es la descripción de la política de tecnologías.' },
  ];

  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePolicyPress = (index) => {
    setSelectedPolicy(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPolicy(null);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={Politicasstyles.backgroundImage}
    >
      <View style={Politicasstyles.container}>
        <Text style={Politicasstyles.title}>Políticas de la Aplicación</Text>

        {policies.map((policy, index) => (
          <TouchableOpacity
            key={index}
            style={Politicasstyles.policyContainer}
            onPress={() => handlePolicyPress(index)}>

            <Text style={Politicasstyles.policyText}>{policy.title}</Text>
          </TouchableOpacity>
        ))}

        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <ScrollView contentContainerStyle={Politicasstyles.scrollView}>
            <View style={Politicasstyles.modalView}>
              <Text style={Politicasstyles.modalTittle}>
                {selectedPolicy !== null ? policies[selectedPolicy].title : ''}
              </Text>
              <Text style={Politicasstyles.modalText}>
                {selectedPolicy !== null ? policies[selectedPolicy].description : ''}
              </Text>
              <Pressable
                style={[Politicasstyles.button, Politicasstyles.buttonClose]}
                onPress={closeModal}>
                <Text style={Politicasstyles.buttonText}>Cerrar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Modal>
      </View>
    </ImageBackground>

  );
};

export default Politicas;
