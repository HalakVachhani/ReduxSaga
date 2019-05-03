import React, { Component } from 'react'
import { View, Text, Image, ListView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles.js'
import FlatListRow from '../../../Components/FlatListRow'
import PostActions from '../../../Redux/PostReducer'
import AnimatedEllipsis from 'react-native-animated-ellipsis'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows([]),
            errorMsg: "",
            isLoading: false,
            getData: false,
            postList: []
        }
    }

    componentWillMount() {
        this.setState({ isLoading: true})
    }

    componentDidMount(){
        this.props.getAllPosts();
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
                postList: data,
                getData: true
            })
        }
        if(!prevProps.fetching && error) {
            this.setState({ isLoading: false, errorMsg: errorMessage, getData: true})
        }
    }    

    renderItem= ({ item }) => {
        return (
            <FlatListRow {...item} />
        )
    }


    render() {
        const { errorMsg, isLoading, getData, postList } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.statusbar}>
                    <TouchableOpacity style={{flex: 0.5, paddingLeft: 10}} onPress={() => this.props.navigation.navigate("Home")}> 
                        <Text style={styles.statusBarLeftTitle}>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.statusBarTitle}>Next</Text>
                    <View style={styles.statusBarRightTitle}></View>
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
                        <FlatList
                            data={postList}
                            keyExtractor={postList => postList.id.toString()}
                            renderItem={this.renderItem}
                        />
                        )
                }                                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("post mapStateToProps");
    console.log(state);
    return {
        data: state.post.posts,
        error: state.post.error,
        errorMessage: state.post.errorMessage,
        fetching: state.post.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPosts: () => dispatch(PostActions.getPostRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
