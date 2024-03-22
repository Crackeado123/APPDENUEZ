import React, { useState } from 'react';
import { View, Alert, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { styles0 } from './Estilos';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import SelectDropdown from 'react-native-select-dropdown';
const Registro = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [numero, setNum] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [preguntaS, setPreguntaS] = useState('');
    const [respuestaS, setRespuestaS] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const countries = [
        '¿nombre de tu mejor amigo?',
        '¿color favorito?',
        '¿equipo de futbol?',
    ];

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePreguntaChange = (selectedItem) => {
        setPreguntaS(selectedItem);
    };

    const handleRespuestaChange = (text) => {
        setRespuestaS(text);
    };

    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleRegistro = async () => {
        try {
           

            if (!username || !email || !password || !confirmPassword || !numero || !preguntaS || !respuestaS) {
                Alert.alert('Error', 'Por favor, completa todos los campos');
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Error', 'Las contraseñas no coinciden');
                return;
            }

            if (!aceptaTerminos) {
                Alert.alert('Error', 'Debes aceptar los términos y condiciones para continuar');
                return;
            }

            const data = {
                nombre: username,
                correo: email,
                pass: password,
                telefono: numero,
                pregunta: preguntaS,
                respuesta: respuestaS,
            };

            const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/singUp/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result);
            Alert.alert('Registro exitoso', 'Te has registrado correctamente');
        } catch (error) {
            console.error('Error al registrar:', error);
            Alert.alert('Error', 'Ocurrió un error al intentar registrarte. Por favor, intenta de nuevo.');
        }
    };

    return (
        <ImageBackground
            source={require('./img/UnFondo.jpg')}
            style={styles0.backgroundImage}
        >
            <View style={styles0.container}>
                <View style={styles0.container2}>
                    <ScrollView style={styles0.scrollViewContent}>
                        <View style={styles0.vista}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <FontAwesome name='angle-left' size={40} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles0.scrollContentContainer}>
                            <Text style={styles0.title}>Registro</Text>
                            <Animatable.Image
                                source={require('./img/LogoTW.jpeg')}
                                style={styles0.logo}
                            />
                            <Text style={styles0.label}>Nombre de usuario</Text>
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='Nombre de usuario'
                                value={username}
                                onChangeText={text => setUsername(text)}
                            />
                            <Text style={styles0.label}>Correo electrónico</Text>
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='Correo electrónico'
                                value={email}
                                onChangeText={text => setEmail(text)}
                                keyboardType='email-address'
                            />
                            <Text style={styles0.label}>Número de Teléfono</Text>
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='Numero de Teléfono'
                                value={numero}
                                onChangeText={text => setNum(text)}
                                keyboardType='phone-pad'
                            />
                            <Text style={styles0.label}>Contraseña</Text>
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='Contraseña'
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                            <TouchableOpacity onPress={toggleShowPassword}>
                                <Animatable.View animation="bounceIn" style={styles0.eyeIcon2}>
                                    <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color='black' />
                                </Animatable.View>
                            </TouchableOpacity>
                            <Text style={styles0.label}>Confirmar Contraseña</Text>
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='Confirmar Contraseña'
                                secureTextEntry={!showPassword2}
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                            />
                            <TouchableOpacity onPress={toggleShowPassword2}>
                                <Animatable.View animation="bounceIn" style={styles0.eyeIcon2}>
                                    <FontAwesome name={showPassword2 ? 'eye-slash' : 'eye'} size={24} color='black' />
                                </Animatable.View>
                            </TouchableOpacity>
                            <Text style={styles0.label}>Elige una pregunta</Text>
                            <SelectDropdown
                                data={countries}
                                value={preguntaS}
                                defaultButtonText={'Preguntas secretas'}
                                buttonTextAfterSelection={(selectedItem, index) => selectedItem}
                                rowTextForSelection={(item, index) => item}
                                renderDropdownIcon={isOpened => (
                                    <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />
                                )}
                                dropdownIconPosition={'left'}
                                buttonStyle={styles0.buttonStyle}
                                buttonTextStyle={styles0.buttonTextStyle}
                                dropdownStyle={styles0.dropdownStyle}
                                rowStyle={styles0.rowStyle}
                                rowTextStyle={styles0.rowTextStyle}
                                onSelect={handlePreguntaChange}
                            />
                            <TextInput
                                style={styles0.inputContainer}
                                placeholder='tu respuesta'
                                value={respuestaS}
                                onChangeText={handleRespuestaChange}
                            />
                            <View style={styles0.checkboxContainer}>
                                <TouchableOpacity onPress={() => setAceptaTerminos(!aceptaTerminos)}>
                                    <FontAwesome name={aceptaTerminos ? 'check-square' : 'square-o'} size={24} color='green' />
                                </TouchableOpacity>
                                <Text style={styles0.checkboxLabel}>Acepto los términos y condiciones</Text>
                            </View>
                            <TouchableOpacity onPress={handleRegistro} style={styles0.Button2}>
                                <Text style={styles0.textoBoton2}>Registrarse</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text style={styles0.link}>Ingresar como invitado</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Registro;
