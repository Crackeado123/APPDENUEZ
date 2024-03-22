import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image, TextInput, Modal, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native'; 

const ProductosCatalogo = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const nav = useNavigation();
    const [visible, setVisible] = useState(false);

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
            setFilteredData(data); 
            setLoad(true);
        } catch (error) {
            console.error(error);
            setLoad(true);
        }
    };

    const handleSearch = (text) => {
        setSearch(text);
        const filtered = data.filter((item) => {
            return item.nombre.toLowerCase().includes(text.toLowerCase());
        });
        setFilteredData(filtered);
    };

    const handleFilter = (filterType) => {
        let filtered;
        switch (filterType) {
            case 'name':
                filtered = [...filteredData].sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'price-low':
                filtered = [...filteredData].sort((a, b) => a.precio - b.precio);
                break;
            case 'price-high':
                filtered = [...filteredData].sort((a, b) => b.precio - a.precio);
                break;
            default:
                filtered = [...data];
        }
        setFilteredData(filtered);
        setVisible(false);
    };

    const Uscreen = () => {
        return (
            <View style={styles.loadingContainer}>
                <LottieView
                    source={require('./Animations/Ani4.json')} 
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </View>
        );
    };

    const ProductCard = ({ nombre, categoria, precio, _id, imagen }) => {
        const handlePress = () => {
            nav.navigate('Producto', { id: _id });
        };

        return (
            <Pressable onPress={handlePress} style={styles.cardContainer}>
                <Image source={{ uri: imagen }} style={styles.cardImage} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Nombre: {nombre}</Text>
                    <Text style={styles.cardCategory}>Categoría: {categoria}</Text>
                    <Text style={styles.cardPrice}>Precio: ${precio} MXN</Text>
                </View>
            </Pressable>
        );
    };

    const renderProducto = ({ item }) => (
        <ProductCard nombre={item.nombre} categoria={item.categoria} precio={item.precio} _id={item._id} imagen={item.imagen} />
    );

    return (
        <ImageBackground source={require('./img/UnFondo.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Buscar producto..."
                        style={styles.searchInput}
                        value={search}
                        onChangeText={handleSearch}
                    />
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <FontAwesome name="filter" size={28} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={obtenerProductos}>
                        <FontAwesome name="refresh" size={28} color="black" />
                    </TouchableOpacity>
                </View>
                {load ? (
                    <FlatList
                        data={filteredData}
                        renderItem={renderProducto}
                        keyExtractor={(item) => item._id}
                    />
                ) : (
                    <Uscreen />)}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('name')}>
                        <Text>Ordenar por nombre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('price-low')}>
                        <Text>Ordenar por precio (bajo a alto)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('price-high')}>
                        <Text>Ordenar por precio (alto a bajo)</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
        backgroundColor:'#fff'
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f0f0f0',
        opacity: 0.8,
    },
    cardImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardCategory: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: 640,
        height: 590,
        position: 'center',
        top: 0,
        left: 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    filterButtonText: {
        fontSize: 16,
    },
});
export default ProductosCatalogo;
