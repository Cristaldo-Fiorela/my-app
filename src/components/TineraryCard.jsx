import {React, useState} from 'react'
import { ScrollView, View, StyleSheet, Text, ImageBackground } from 'react-native'
import { Avatar, Card, Button, Title  } from 'react-native-paper'

import CarouselActivities from './CarouselActivities'

function TineraryCard(props, {navigation}) {

    const tinerary = props.allProps

    return (
        <>  
        <Card key={tinerary._id} style={styles.card}>
        <ImageBackground source={{uri: 'https://i.imgur.com/z3F8BCU.jpg'}} resizeMode="repeat" >
            <Card.Content >
                <Title style={styles.tineraryTitle}>{tinerary.name}</Title>
            </Card.Content>
        </ImageBackground>
            <View style={styles.userContainer}>
                <Avatar.Image size={100} source={{ uri: (tinerary.userPhoto) }} />
                <Text style={{fontSize:24, marginLeft: 15}}>{tinerary.userName}</Text>
            </View>
            <View style={styles.tineraryInfo}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>price {tinerary.price}</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold' }}>{tinerary.duration} ⏲</Text>
            </View>
            <View style={styles.tineraryInfo}>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#A62D43'}}>{tinerary.hashtags[0]}</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#A62D43' }}>{tinerary.hashtags[1]}</Text>
                <Text style={{fontSize: 15, fontWeight: 'bold', color: '#A62D43' }}>{tinerary.hashtags[2]}</Text>
            </View>
            <CarouselActivities allTinerary={tinerary} />
        </Card>
        </>
    )
}

export default TineraryCard


const styles = StyleSheet.create({
    card: {
        marginTop: 40,
        backgroundColor: '#9FBFB9'
    },
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
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tineraryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    }
})