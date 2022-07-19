import React, { useState } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
//import axios from 'axios';

const Cotizacion = ({ resultado }) => {
    if (Object.keys(resultado).length === 0) return null;
    return (
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>
                    {resultado.PRICE}
                </Text>
            </Text>
            <Text style={styles.text}> Precio más alto del día: {' '}
                <Text style={styles.span}>
                    {resultado.HIGHDAY}
                </Text>
            </Text>
            <Text style={styles.text}> Precio más bajo del día: {' '}
                <Text style={styles.span}>
                    {resultado.LOWDAY}
                </Text>
            </Text>
            <Text style={styles.text}> Variacion ultimas 24 horas: {' '}
                <Text style={styles.span}>
                    {resultado.CHANGEPCT24HOUR} %
                </Text>
            </Text>
            <Text style={styles.text}> Ultima Actualización: {' '}
                <Text style={styles.span}>
                    {resultado.LASTUPDATE}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#5E49E2',
        padding: 20,
    },
    text: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        marginBottom: 10,
    },
    precio: {
        fontSize:22,
        color: '#FFF',
        marginBottom: 10,
    },
    span: {
        fontWeight: 'bold',
    }
})

export default Cotizacion;