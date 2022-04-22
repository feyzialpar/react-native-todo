import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';


const Tasks = (props) => {
    return (
        <View style={styles.item}> 
        <View style={styles.itemLeft}> 
            <Text style={styles.itemText}>{props.text}</Text>
        </View>

            <Image
            source={require('./delete.png')}
            style={styles.deletion}/>  
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20,
        marginHorizontal: 10,
        borderWidth: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '100%',
    }, 
    deletion: {
        width: 24,
        height: 24,
    },

});

export default Tasks;