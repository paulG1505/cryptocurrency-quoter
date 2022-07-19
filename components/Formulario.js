import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Formulario = ({ moneda, setMoneda, criptomoneda, setCriptomoneda, guardarApi }) => {

    const [criptomonedas, setCriptomonedas] = useState([]);

    //Obtiene el listado de criptomonedas
    useEffect(() => {
        const getApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const request = await axios.get(url);
            setTimeout(() => 1000)
            setCriptomonedas(request.data.Data);
        }
        getApi();
    }, []);


    const getMoneda = (moneda) => {
        setMoneda(moneda);
    }

    const getCriptomoneda = (criptomoneda) => {
        setCriptomoneda(criptomoneda);
    }

    const cotizarPrecio = () => {
        if (moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlert();
            return;
        }
        guardarApi(true);
    }

    const mostrarAlert = () => {
        Alert.alert('Error', 'Ambos campos son obligatorios', [
            { text: 'OK' }
        ])
    }


    return (
        <>
            <View>
                <Text style={styles.label}>Moneda</Text>
                <Picker
                    selectedValue={moneda}
                    onValueChange={moneda => getMoneda(moneda)}
                >
                    <Picker.Item label="- Seleccione" value="" />
                    <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                    <Picker.Item label="Pesos MEX" value="MXN" />
                    <Picker.Item label="Euro" value="EUR" />
                    <Picker.Item label="Libra" value="GBP" />
                </Picker>
                <Text style={styles.label}>Criptomoneda</Text>
                <Picker
                    selectedValue={criptomoneda}
                    onValueChange={criptomoneda => getCriptomoneda(criptomoneda)}
                >
                    <Picker.Item label="- Seleccione" value="" />
                    {criptomonedas.map(cripto => (
                        <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
                    ))}
                </Picker>
                <TouchableHighlight style={styles.btnCotizar} onPress={() => cotizarPrecio()}>
                    <Text style={styles.textCotizar}>Cotizar</Text>
                </TouchableHighlight>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 18,
        marginVertical: 7,
        fontWeight: 'bold',
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 30,
    },
    textCotizar: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

export default Formulario;