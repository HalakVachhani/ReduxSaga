import React, { Component } from 'react'
import { View, Text, Image, ListView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles.js'
import GridListRow from '../../../Components/GridListRow'
import CocktailsActions from '../../../Redux/CocktailReducer'
import AnimatedEllipsis from 'react-native-animated-ellipsis'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows([]),
            errorMsg: "",
            isLoading: false,
            getData: false
        }
    }

    componentWillMount() {
        this.setState({ isLoading: true})
    }

    componentDidMount(){
        this.props.getAllCocktails();
    }
    
    componentDidUpdate(prevProps, prevState) {
        const { data, error, errorMessage, fetching  } = this.props;

        console.log("componentDidUpdate")
        console.log(data)
        console.log(error)
        console.log(errorMessage)
        console.log(fetching)

        if(!prevProps.fetching && fetching) {
            this.setState({isLoading: true, errorMsg: "", getData: false})
        }
        if(prevProps.fetching && !error) {
            this.setState({
                isLoading: false,
                errorMsg: "",
                dataSource: ds.cloneWithRows(data),
                getData: true
            })
        }
        if(!prevProps.fetching && error) {
            this.setState({ isLoading: false, errorMsg: errorMessage, getData: true})
        }
    }    

    renderRow(details) {
        return (
            <GridListRow {...details} />
        )
    }


    render() {
        const { errorMsg, isLoading, getData } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <Text style={styles.statusBarTitle}>Home</Text>
                </View>
                {
                    (isLoading && 
                        <AnimatedEllipsis numberOfDots={3}
                        minOpacity={0.4}
                        animationDelay={200}
                        style={{
                            color: 'black',
                            fontSize: 100,
                            alignSelf: "center"
                        }}
                        />)       
                }
                {
                    (errorMsg != "" && !isLoading &&
                        <Text style={styles.infoMessage}>Error fetching data</Text>
                        )
                }
                {
                    (errorMsg == "" && !isLoading && getData &&
                        <ListView contentContainerStyle={styles.gridCocktails}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => this.renderRow(rowData)}
                        />
                        )
                }                                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("HOME mapStateToProps");
    console.log(state);
    return {
        data: state.cocktails.cocktails,
        error: state.cocktails.error,
        errorMessage: state.cocktails.errorMessage,
        fetching: state.cocktails.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCocktails: () => dispatch(CocktailsActions.getCocktailsRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
