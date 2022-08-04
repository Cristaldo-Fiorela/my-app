import React from 'react'
import { ScrollView, View, StyleSheet, Text, ImageBackground} from 'react-native';


function NotTinerary(props) {
    return(
        <>
        <View style={styles.containerNot}>
            <ImageBackground source={{uri: 'https://i.imgur.com/z3F8BCU.jpg'}} style={{height: 150}} resizeMode="cover">
            <Text style={styles.tineraryTitle}>
                Not Itineraries Yet~
            </Text>
            </ImageBackground>
        </View>
        </>
    )
}

export default NotTinerary

const styles = StyleSheet.create({
    tineraryTitle: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        textAlign: 'center',
        textShadowColor: '#382b22',
        backgroundColor: '#A62D43',
        textShadowRadius: 10,
        padding:10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 30,
    },
})