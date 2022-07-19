import React from 'react';
import {
    Platform,
    StyleSheet,
    Text
} from 'react-native';

const Header = () => (
    <Text style={styles.header}>Criptomedas</Text>
);
const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        fontFamily: 'Lato-Black',
        fontSize: 24,
        backgroundColor:'#5E49E2',
        paddingBottom:10,
        textAlign: 'center',
        textTransform:'uppercase',
        color: 'white',
        fontWeight: 'bold',
        marginBottom:20,
    }
});

export default Header;
