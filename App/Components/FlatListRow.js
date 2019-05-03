import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './FlatListRowStyle'

const FlatListRow = (item) => {
    console.log("FlatListRow details")
    console.log(item)
    return (
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.titleTxt}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.bodyTxt}>{item.body}</Text>            
        </View>);
};

export default FlatListRow;