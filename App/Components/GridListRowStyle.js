import { StyleSheet, PixelRatio, Dimensions } from 'react-native'
// import { Metrics, Colors, Fonts } from '../../Themes'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    image: {
        width: width * 0.3,
        height: width * 0.3,
        justifyContent: 'flex-end',
        marginLeft: width * 0.023,
        marginTop: width * 0.023
    },
    labelContainer: {
        backgroundColor: "rgba(0,0,0, 0.40)",
        height: 25,
        justifyContent: 'center'
    },
    label: {
        color: "white",
        marginHorizontal: 5
    }

})