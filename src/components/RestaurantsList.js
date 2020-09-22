import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import RestaurantCard from './RestaurantCard';
import { withNavigation } from 'react-navigation';

const RestaurantsList = ( {title, results, navigation} ) => {
    if (results.length) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator = { false }
                    data = {results}
                    keyExtractor = { (result) => {
                        return result.id;
                    }}
                    renderItem= { ({item}) => {
                            return(
                                <TouchableOpacity onPress={ () => { navigation.navigate('ResDetails', { id: item.id })}}>
                                    <RestaurantCard result={item} />
                                </TouchableOpacity>
                            ); 
                        }
                    }
                />
            </View>
        );
    } else {
        return <View></View>
    }
};

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom:10
    }
});

export default withNavigation(RestaurantsList);