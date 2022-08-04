// REACT
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Text, View, StyleSheet, ImageBackground, ScrollView } from "react-native"

// ACTIONS AND COMPONENTS
import citiesActions from '../../redux/actions/citiesActions'
import itineraryActions from '../../redux/actions/itineraryActions'
import TineraryCard from "../../components/TineraryCard"
import NotTinerary from "../../components/NotTinerary";

function DetailsScreen(props) {

    const id = props.route.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        dispatch(itineraryActions.getItinerayByIdCity(id))
        // eslint-disable-next-line
    }, [])

    const dataCities = useSelector(store => store.citiesReducer.oneCity)
    const itineraries = useSelector(store => store.itinerariesReducer.getItinerayByIdCity)

    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        source={{ uri: (dataCities.image) }}
                        style={styles.bannerCityImg}
                    >
                        <Text style={styles.text}>Welcome to {dataCities.name}</Text>
                    </ImageBackground>
                </View>
                <View>
                    {itineraries.length > 0 ? (
                        itineraries.map((itinerary) =>
                            <TineraryCard key={itinerary._id} allProps={itinerary} />
                        )) : <NotTinerary />}
                </View>
            </ScrollView>
        </>
    )
}
export default DetailsScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white',
        textShadowColor: '#382b22',
        textShadowRadius: 10,
    },
    bannerCityImg: {
        height: 700,
        justifyContent: "center",
    },
})