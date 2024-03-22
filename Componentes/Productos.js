import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, FlatList, Pressable, TextInput, Button, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { estilos } from './Estilos';

const Productos = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [nuevoProducto, setNuevoProducto] = useState({ nombre: '', categoria: '', precio: '' });
    const [productoEditado, setProductoEditado] = useState(null);
    const [modalVisibleAgregar, setModalVisibleAgregar] = useState(false);
    const [modalVisibleEditar, setModalVisibleEditar] = useState(false);
    const nav = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();
            setData(data);
            setLoad(true);
        } catch (error) {
            console.error(error);
            setLoad(true);
        }
    };

    const agregarProducto = async () => {
        try {
            const response = await fetch('https://servidortropicalworld-1.onrender.com/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProducto),
            });
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            setNuevoProducto({ nombre: '', categoria: '', precio: '' });
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const eliminarProducto = async (id) => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const editarProducto = async () => {
        try {
            const response = await fetch(`https://servidortropicalworld-1.onrender.com/productos/${productoEditado._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productoEditado),
            });
            if (!response.ok) {
                throw new Error('Error al editar el producto');
            }
            obtenerProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModalAgregar = () => {
        setModalVisibleAgregar(true);
    };

    const abrirModalEditar = (producto) => {
        setProductoEditado(producto);
        setModalVisibleEditar(true);
    };

    const cerrarModalAgregar = () => {
        setModalVisibleAgregar(false);
    };

    const cerrarModalEditar = () => {
        setModalVisibleEditar(false);
    };

    const Uscreen = () => {
        return (
            <View>
                <ActivityIndicator color={'darkblue'} />
                <Text>Cargando Datos...</Text>
            </View>
        );
    };

    const Card = ({ nombre, categoria, precio, _id }) => {
        return (
            <Pressable onPress={() => abrirModal({ nombre, categoria, precio, _id })}>
                <Text>Producto: {nombre}</Text>
                <Text>Categoría: {categoria}</Text>
                <Text>Precio: ${precio} MXN</Text>
            </Pressable>
        );
    };

    //Tabla de productos
    const LScreen = () => {
        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={styles.columnHeader}>Nombre</Text>
                    <Text style={styles.columnHeader}>Categoría</Text>
                    <Text style={styles.columnHeader}>Precio</Text>
                    <Text style={styles.columnHeader}>Acciones</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>{item.nombre}</Text>
                            <Text style={styles.tableCell}>{item.categoria}</Text>
                            <Text style={styles.tableCell}>${item.precio} MXN</Text>
                            <View style={styles.actionCell}>
                                <FontAwesome name="edit" size={24} color="blue" onPress={() => abrirModalEditar(item)} />
                                <FontAwesome name="trash" size={24} color="red" onPress={() => eliminarProducto(item._id)} />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        );
    };

    return (
        //Modal de agregar productos y mas abajo Modal2 de editar productos
        <View>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={abrirModalAgregar}>
                    <Text style={styles.buttonText}>Agregar Producto</Text>
                    <FontAwesome name="plus" size={24} color="black" style={styles.icon} />
                </Pressable>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibleAgregar}
                    onRequestClose={cerrarModalAgregar}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                value={nuevoProducto.nombre}
                                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, nombre: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Categoría"
                                value={nuevoProducto.categoria}
                                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, categoria: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Precio"
                                value={nuevoProducto.precio}
                                onChangeText={(text) => setNuevoProducto({ ...nuevoProducto, precio: text })}
                            />
                            <View style={styles.buttonContainer}>
                                <Button title="Agregar" onPress={agregarProducto} />
                                <Button title="Cancelar" onPress={cerrarModalAgregar} />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleEditar}
                onRequestClose={cerrarModalEditar}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre"
                            value={productoEditado?.nombre}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, nombre: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Categoría"
                            value={productoEditado?.categoria}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, categoria: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Precio"
                            value={productoEditado?.precio}
                            onChangeText={(text) => setProductoEditado({ ...productoEditado, precio: text })}
                        />
                        <Button title="Guardar" onPress={editarProducto} />
                        <Button title="Cancelar" onPress={cerrarModalEditar} />
                    </View>
                </View>
            </Modal>
            {load ? <LScreen /> : <Uscreen />}
        </View>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        marginRight: 10,
    },
    columnHeader: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingVertical: 8,
    },
    tableCell: {
        flex: 1,
        textAlign: 'center',
    },
    actionCell: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    container: {
        flexDirection: 'center',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
});

export default Productos;
