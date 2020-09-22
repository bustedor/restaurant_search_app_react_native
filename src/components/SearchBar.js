import React  from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ( { term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name='search' style={styles.icon} />
            <TextInput 
                value={term} onChangeText={onTermChange}
                style={styles.inputStyle} placeholder='Search'
                autoCapitalize='none' autoCorrect={false} 
                onEndEditing={onTermSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e3e2e2',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10

    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;