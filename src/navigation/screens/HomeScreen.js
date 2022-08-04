import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper'
import { useDispatch, useSelector  } from 'react-redux';
import citiesActions from '../../redux/actions/citiesActions';
import itineraryActions from '../../redux/actions/itineraryActions';
import CarouselHome from '../../components/CarouselHome';

function HomeScreen({ navigation }) {

    const dispatch = useDispatch()

    React.useEffect(()=> {
        dispatch(citiesActions.getCities())
        dispatch(itineraryActions.getItineraries())
    },[])

    const cities = useSelector (store => store.citiesReducer.cities)
    const itineraries = useSelector(store => store.itinerariesReducer)

    return (
        <>
            <ScrollView>
                < View>
                    <ImageBackground
                        source={{ uri: 'https://i.imgur.com/y9pTgVY.png' }}
                        style={styles.bgImage}
                    >
                        <Image
                            source={{ uri: 'https://i.imgur.com/0MtMWli.png' }}
                            style={styles.imageLogo}
                        />
                        <Text style={styles.text} >Find your perfect trip, designed by insiders who know and love their cities!</Text>
                    </ImageBackground>
                </View>
                <View style={styles.toActionContainer}>
                    <Image
                        source={{ uri: 'https://i.imgur.com/879Nhn0.png' }}
                        style={styles.sloganImage}
                    />
                    <Text style={styles.textToAction}>Have you always dreamed of walking under cherry trees in the spring?</Text>
                    <Text style={styles.textToAction}>Do you span love the magical atmosphere between the bustling city and calm temples?</Text>
                    <Text style={styles.textToAction}>Whether you are into food, culture, history or the outdoors Japan has it all.</Text>
                    <Text style={styles.textToActionBig}>Whatever you want, you can find it in Japan.</Text>
                    <Button mode='contained' style={styles.btnToAction} onPress={() => navigation.navigate('Cities')}>Get Started!</Button>
                </View>
                <CarouselHome />
            </ScrollView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "cover",
    },
    imageLogo: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    bgImage: {
        height: 710,
        justifyContent: "center",
    },
    sloganImage: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    textToAction:{
        fontSize: 18,
        maxWidth:350,
        marginBottom: 8,
    },
    textToActionBig: {
        fontSize: 20,
        maxWidth:350,
        marginBottom: 8,
        fontWeight: "bold",
    },
    toActionContainer: {
        backgroundColor: '#F2F2F2',
        alignItems:'center',
        marginBottom: 20,
    },
    btnToAction: {
        backgroundColor: '#A62D43',
    }
});