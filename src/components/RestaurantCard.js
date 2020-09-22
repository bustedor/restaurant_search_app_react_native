import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RestaurantCard = ( {result}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={ {uri: result.image_url} }
                style= { styles.image}/>
            <Text style={styles.name}>{result.name}</Text>
            <View style={styles.lastRow}>
                 <Text>{result.rating} </Text>
                 <AntDesign name='star' style={styles.icon}/>
                <Text>,  {result.review_count} Reviews</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 220,
        borderRadius: 5,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    lastRow: {
        flexDirection: 'row',
    },
    icon: {
        fontSize:13,
        alignSelf:'center'
    }
});

export default RestaurantCard;