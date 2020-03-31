import {StyleSheet} from 'react-native';

import Constants from 'expo-constants'; // permite usar constantes fixas para cada projeto

export default StyleSheet.create({
    container: {
        flex: 1, // faz com que ocupe o tamanho inteiro
        paddingHorizontal: 24, // adcionando paddings nas laterais
        paddingTop: Constants.statusBarHeight + 20, // faz com que o conteúdo dê uma distância do topo, 20px a mais do que a status bar
    },

    header: {
        flexDirection: 'row', // por padrão aqui os itens ficam um ao lado do outro, aqui trocamos para ficarem abaixo 
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginBottom: 16 
    },

    incidentList: { //lista de incidents
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    incidentProperty: { //CASO: \ VALOR: \
        fontSize: 14,
        color:  '#41414d',
        fontWeight: 'bold'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between', // faz com que um item fique de um lado e o outro vá para o lado oposto
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})