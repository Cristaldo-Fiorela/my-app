//REACT AND REACT COMPONENTS
import * as React from 'react';
import { Card, Button, Searchbar,Title } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';

//ACTIONS AND COMPONENTS
import citiesActions from '../../redux/actions/citiesActions';
import SearchError from '../../components/SearchError';


export default function DetailsScreen({ navigation }) {

    // VAR DE ESTADO
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(citiesActions.getCities)
    }, [])

    React.useEffect(() => {
        dispatch(citiesActions.filterCities(searchQuery))
        // eslint-disable-next-line
    }, [searchQuery])

    const cityFiltered = useSelector(store => store.citiesReducer.cityFiltered)

    return (
        <>
            <View>
                <Searchbar
                    placeholder="Search..."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />

                    <ScrollView style={styles.containerCities}>
                        {cityFiltered.length > 0 ? (
                            cityFiltered.map((city, index) =>

                                <Card key={index} style={styles.card}>
                                    <ImageBackground source={{uri: 'https://i.imgur.com/z3F8BCU.jpg'}} resizeMode="repeat"  >
                                        <Card.Content>
                                            <Title style={styles.cardTitle}>{city.name}</Title>
                                        </Card.Content>

                                    <Card.Cover source={{ uri: (city.image) }} />

                                    <Card.Actions style={styles.cardAction}>
                                        <Button
                                            mode='contained'
                                            style={styles.btnToAction}
                                            onPress={() => navigation.navigate('Itineraries', { id: city._id })}>Details</Button>
                                    </Card.Actions>
                                    </ImageBackground>

                                </Card>
                            )) : <SearchError />}
                    </ScrollView>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginBottom: 10,
    },
    containerCities: {
        marginBottom: 60,
    },
    btnToAction: {
        backgroundColor: '#A62D43',
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardTitle: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center' ,
        textShadowColor: '#382b22',
        backgroundColor: '#A62D43',
        textShadowRadius: 10,
        padding:10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 30,
    }
})