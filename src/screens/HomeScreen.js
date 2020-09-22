import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import RestaurantsList from '../components/RestaurantsList';

const HomeScreen = () => {
    const [ term, setTerm ] = useState('');
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const filterResultsByPrice = (price) => {
        // price === '₺' || '₺₺' || '₺₺₺' || '₺₺₺₺'  
        return results.filter( result => {
            return result.price === price;
        });
    };

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'istanbul'
                }
            });

            setResults(response.data.businesses);
        } catch ( err ) {
            console.log(err);
            setErrorMessage(err);
        }
        
    }

    useEffect( () => {
        searchApi('pasta');
    }, []); // empty array as second argument for the initial search api call to be done only once

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={ setTerm }
                onTermSubmit= { () =>  searchApi(term) } />
                { errorMessage ? <Text>{errorMessage}</Text> : null }
                <ScrollView>
                    <RestaurantsList  results={ filterResultsByPrice('₺') } title='Cost Effective' />
                    <RestaurantsList  results={ filterResultsByPrice('₺₺') } title='Bit Pricier' />
                    <RestaurantsList  results={ filterResultsByPrice('₺₺₺') } title='Big Spender'/>
                    <RestaurantsList  results={ filterResultsByPrice('₺₺₺₺') } title='Fortune Teller' />
                </ScrollView> 
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});

export default HomeScreen;