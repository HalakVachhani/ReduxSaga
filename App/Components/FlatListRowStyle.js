import { StyleSheet, PixelRatio, Dimensions } from 'react-native'
// import { Metrics, Colors, Fonts } from '../../Themes'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    row: {
        marginTop: 10,
        width: width * 0.96,
        alignSelf: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#708090",
        backgroundColor: "#D9D9D9",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    titleTxt: {
        color: "black",
        marginHorizontal: 5
    },
    bodyTxt: {
        color: "#8C8C8C",
        marginHorizontal: 5
    }
})