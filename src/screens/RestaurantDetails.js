import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';

const RestaurantDetails = ( {navigation} ) => {
    const rest_id = navigation.getParam('id');
    const [ result, setResult ] = useState(null);

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            console.log('Error in getResult in RestaurantDetails');
            console.log(err);
        }
        
    }

    useEffect( () => {
        getResult(rest_id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{result.name}</Text>
            <Image source={{ uri: result.image_url}}
                   style={styles.image} />
            <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:14}}>
                <View style={{flexDirection: 'row', marginLeft:20}} >
                    <Text style={styles.price}>Pricing: </Text>
                    <Text style={styles.price}>{result.price}</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight:18}}>
                    <Text style={styles.rating_text}>{result.rating} </Text>
                    <AntDesign name='star' style={styles.icon}/>
                </View>
            </View>
            <FlatList data={result.photos}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={ (item) => item}
                      renderItem = { ({item}) => {
                          return (
                              <Image style={styles.photo} source={{ uri: item }} />
                          );
                      }} />
            <View style={styles.phoneView} >
                <Text style={styles.phone}>Phone: </Text>
                <Text style={styles.phone} >{result.display_phone}</Text>
            </View>
            <View style={styles.phoneView}>
                <Text style={styles.address}>Address: </Text>
                <Text style={styles.address}>{result.location.address1}</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: '90%',
        height: 260,
        alignSelf: 'center',
        borderRadius: 14,
        marginTop: 15
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 10
    },
    icon: {
        marginTop:2,
        fontSize: 20,
        alignSelf: 'center'
    },
    rating_text: {
        fontSize: 22
    },
    phone: {
        fontSize:18,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    photo: {
        marginTop: 10, 
        width: 180,
        height: 140,
        borderRadius: 10,
        marginLeft: 10
    },
    phoneView: {
        flexDirection: 'row',
        marginTop: 14,
        marginLeft: 18
    },
    address: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default RestaurantDetails;