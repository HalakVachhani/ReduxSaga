import { StyleSheet } from 'react-native'

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
    gridCocktails: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    container: {
        flex: 1,
    },
    statusbar: {
        height: 64,
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    statusBarTitle:{            
        color: "white",
        fontSize: 18
    }
})

export default styles;