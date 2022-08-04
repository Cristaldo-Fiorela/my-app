import * as React from 'react';
import { Card } from 'react-native-paper'
//ACTIONS


export default function SearchError({ navigation }) {

    return (
        <>
            <Card>
                <Card.Title title="We couldn't find any city"/>
                <Card.Cover source={{ uri: 'https://i.pinimg.com/originals/bc/e3/8e/bce38eb75d3cf9f78adef39fa041cd3b.gif' }} />
            </Card>
        </>
    );
}

