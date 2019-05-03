import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create ({
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginRight: 10
    },
    lista: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "transparent"
    },
    infoMessage: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10
    },
    ellipsis: {
        color: "black",
        fontSize: 30,
    },
    container: {
        flex: 1,
    },
    statusbar: {
        height: 64,
        width: width,
        backgroundColor: "black",
        alignItems:'center',
        flexDirection:'row',
    },
    statusBarTitle:{           
        color: "white",
        fontSize: 18,
        textAlign: "center",
        flex: 2,
    },
    statusBarRightTitle: { 
        flex: 0.5,
    },
    statusBarLeftTitle: { 
        color: "white",
        fontSize: 15,
    }
})

export default styles;