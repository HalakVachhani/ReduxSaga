import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import styles from './GridListRowStyle'


const GridListRow = (details) => {
    return (
        <View>
            <ImageBackground
                style={styles.image}
                loadingIndicatorSource={require('../Images/cocktail_black.png')}
                source={{ uri: details.thumbnailUrl }}
            >
                <View style={styles.labelContainer}>
                    <Text numberOfLines={1} style={styles.label}>{details.title}</Text>
                </View>
            </ImageBackground>
        </View>);
};

export default GridListRow;