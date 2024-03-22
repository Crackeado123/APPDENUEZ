import { StyleSheet } from "react-native";

export const styles0 = StyleSheet.create({
  icon: {
    marginBottom: 6,
  },
  eyeIcon: {
    position: 'absolute',
    right: 40,
    top: 323
  },
  eyeIcon2: {
    position: 'absolute',
    left: 75,
    bottom: 13
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 10,
    color: '#004883fe',
  },
  titulo: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
    color: '#004883fe',
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  vista: {
    position: 'absolute',
    top: 22,
    left: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eae9e9d5',
    width: 280,
    height: 550,
    borderRadius: 10,
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#8b8a8a',
  },

  scrollViewContent: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  label: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#474747',
    marginTop: 10
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  inputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  //estilos de la bienvenida 
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  //Logo de la bienbenida
  logo2: {
    width: 300,
    height: 300,
  },
  Button: {
    backgroundColor: '#c6ffa0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 8,
  },
  Button2: {
    backgroundColor: '#c6ffa0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  textoBoton: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  textoBoton2: {
    fontSize: 19,
    textAlign: 'center',
    color: '#474747',
    fontWeight: 'bold',
  },
  //estilos del select
  buttonStyle: {
    width: 250,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  buttonTextStyle: {
    color: '#000',
    textAlign: 'center',
  },
  dropdownStyle: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  rowStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  rowTextStyle: {
    color: '#000',
    textAlign: 'center',
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
  },
  //Aqui empiea los estilos de home
  container4: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5
  },
  container5: {
    alignItems: 'center',
    backgroundColor: '#c6ffa0',
    paddingHorizontal: 7,
    justifyContent: 'center',
    position:'absolute',
    top:390,
    borderColor:'black',
    borderWidth:1
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom:493
  },

});

export const productostyles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  card: {
  },
  imageContainer: {
    alignItems: 'center', // Centra horizontalmente
  },
  image: {
    height: 400,
    width: '100%',
  },
});

export const preguntasFstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 20,
    color: '#004883fe',
  },
  faqItem: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  answer: {
    fontSize: 16,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
  },
});

export const contactostyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  container2: {
    padding: 15,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    opacity: 0.8,
    width: 340,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  inputCom: {
    flex: 1,
    height: 120,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    textAlignVertical: 'top',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#c6ffa0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'black',
    elevation: 8,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactLinksContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    opacity: 0.8,
    width: 340,
  },
  contactLink: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  contactText: {
    fontSize: 20,
    color: '#333',
  },
});

export const Quienesstyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 5
  },
  container2: {
    alignItems: 'center',
    backgroundColor: '#c6ffa0',
    paddingHorizontal: 5,
    justifyContent: 'center', // Centra verticalmente
    borderColor:'black0',
    borderWidth:1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  image: {
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  item: {
    alignItems: 'center',
  },
  itemImage: {
    width: 290,
    height: 290,
    borderRadius: 8,
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 13,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: -15
  },
  paginationDot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'blue',
  },
});

export const Politicasstyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 230, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 5,
    color: '#004883fe',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  policyContainer: {
    padding: 12,
    borderRadius: 8,
    borderColor: 'black',
    marginTop: 15,
    shadowColor: 'black',
    elevation: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  policyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',

  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTittle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#555',
  },
  button: {
    backgroundColor: '#c6ffafe0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
    shadowColor: 'black',
    elevation: 8,

  },
  buttonClose: {
    backgroundColor: '#c6ffafe0',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
