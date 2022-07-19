import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import Formulario from './components/Formulario';
import Header from './components/Header';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';


const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');

  const [consultarApi, guardarApi] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {

    const consultarCriptomoneda = async () => {

      if (consultarApi) {
        //consulta de api para cotizacion 
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const response = await axios.get(url);

        guardarCargando(true);
        //Ocultar spinner y moestrar resultado
        setTimeout(() => {
          guardarResultado(response.data.DISPLAY[criptomoneda][moneda]);
          guardarApi(false);
          guardarCargando(false)
        }, 2000)

      }
    }
    consultarCriptomoneda();
  }, [consultarApi])

  //mostrar spiner o resultado
  const component = cargando ? <ActivityIndicator size="large" color="#5E49E2" /> : <Cotizacion resultado={resultado} />


  return (
    <>
      <ScrollView>
        <Header />
        <Image style={styles.image}
          source={require('./assets/img/cryptomonedas.png')}
        />

        <View style={styles.contenido}>

          <Formulario
            moneda={moneda}
            criptomoneda={criptomoneda}
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
            guardarApi={guardarApi}
          />
        </View>
        <View style={{marginTop:20}}>
          {component}
        </View>
      </ScrollView>

    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  contenido: {
    margin: '2.5%',
  }
});

export default App;
