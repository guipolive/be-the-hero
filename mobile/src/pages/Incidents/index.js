import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'; // semelhante ao uso de useHistory para o React

import api from '../../services/api';

// TouchableOpacity: permite criar uma área touchable, e quando clicada já altera a opacidade
// FlatList: Usado quando formos usar uma lista de informações
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){

    const [incidents, setIncidents] = useState([]);// declarando dessa forma porque será um vetor de incidents
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', {incident}); // enviando o incident para a página como parâmetro, para que sejam exibidos os dados
    }

    async function loadIncidents(){

        if(loading){
            return;
        } // caso já esteja carregando, não faça nada

        if(total > 0 && incidents.length === total){
            return;
        } // caso já tenha carregado todos os incidents, não faça nada

        setLoading(true); // estado do item loading vira verdadeiro, quer dizer que estamos atualizando

        // const response = await api.get(`incidents?page=${page}`); /// isso também funcionaria, mas polui o código.
        const response = await api.get('incidents', {
            params: {page}
        });

        //setIncidents(response.data);
        setIncidents([... incidents, ... response.data]);
        setTotal(response.headers['x-total-count']);

        setPage(page + 1); // aumenta um número da página, ( nesse caso significa carregar + 5 incidents)
        setLoading(false); // não estamos mais carregando informações
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return(
        <View style={styles.container} >
            <View style={styles.header} >
                <Image source={logoImg} />
                <Text styles={styles.headerText}>
                    Total de <Text style={styles.headerTextBold} >{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title} >Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
                    data={incidents}
                    style={styles.incidentsList}
                    keyExtractor={incident => String(incident.id)}
                    showsVerticalScrollIndicator={false} // esconde a barrinha de navegação 
                    onEndReached={loadIncidents} // quando chegar no fim da lista, chama a função de carregar mais incidents
                    onEndReachedThreshold={0.2} // define o ato de chegar ao "fim" da lista como na verdade sendo 20% antes do fim da lista
                    renderItem={({item:incident}) => (
                        <View style={styles.incident} >
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{incident.name}, de {incident.city}/{incident.uf}</Text>

                            <Text style={styles.incidentProperty}>CASO:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>

                            <Text style={styles.incidentProperty}>VALOR:</Text>
                            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

                            <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incident)} > 
                                <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#e02041" />
                            </TouchableOpacity>
                        </View>
                    )}
            />

        </View>
    );
}