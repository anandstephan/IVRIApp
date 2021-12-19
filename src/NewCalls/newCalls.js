
import axios from 'axios';
import React from 'react';
import { ActivityIndicator, Dimensions, Picker, StatusBar, StyleSheet, Text, TouchableOpacity, View,ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { toast } from '../../Config/functions';
import { fetchProblemDetailUrl, fetchProblemUrl, fetchSpeciesUrl, saveProblemUrl } from '../../Utils/Api';
const deviceWidth = Dimensions.get('window').width;

 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      speciesId: '',
      problemId: '',
      pdId: '',
      problemData: [],
      pdDetailData: [],
      isProblemLoading: false,
      isPdDetailLoading: false,
      isSaving:false,
    }
  }
 async componentDidMount() {
    await this.fetchSpeciesList();
  }
  fetchSpeciesList = async () => {
    var url = fetchSpeciesUrl;
    this.setState({
      isLoading: true
    })
    await axios.get(url).then((res) => {
      this.setState({
        isLoading: false,
        data: res.data
      })
    }).catch((err) => {
      this.setState({
        isLoading: false,
        data: []
      })
      console.log('err @ species', err)
    })
  }
  fetchProblems = async (id) => {
    var url = fetchProblemUrl(id);
    this.setState({
      isProblemLoading: true
    })
    await axios.get(url).then((res) => {
      this.setState({
        isProblemLoading: false,
        problemData: res.data
      })
    }).catch((err) => {
      this.setState({
        isProblemLoading: false,
        problemData: []
      })
      console.log('err @ species', err)
    })
  }
  fetchProblemDetails = async (id) => {
    var url = fetchProblemDetailUrl(id);

    this.setState({
      isPdDetailLoading: true
    })
    await axios.get(url).then((res) => {
      this.setState({
        isPdDetailLoading: false,
        pdDetailData: res.data
      })
    }).catch((err) => {
      this.setState({
        isPdDetailLoading: false,
        pdDetailData: []
      })
      console.log('err @ species', err)
    })
  }

  saveProblem = async () => {
    if(this.state.speciesId ==""){
      return toast('Select Species First')
    }
    if(this.state.problemId ==""){
      return toast('Select Problem First')
    }
    if(this.state.pdId ==""){
      return toast('Select Problem Detail First')
    }
    var url = saveProblemUrl;
    var body = {
      species: this.state.speciesId,
      problem: this.state.problemId,
      problemdetail: this.state.pdId
    }
    await axios.post(url, body, {
      headers: {
        'authorization': 'bearer ' + this.props.login.accessToken
      }
    }).then((res) => {
      if(res.status =='200'){
      console.log('add problem response', res)
      this.setState({ isSaving: false })
      this.props.navigation.navigate('Contactlist')
    }else{
      this.setState({
        isSaving:false
      })
      toast(res.data)
    }
    }).catch((err) => {
      console.log('err @ saving problem', err)
    })
  }



  render() {
    return (
      <View>
        <StatusBar backgroundColor="#1a237e" barStyle="light-content" />
        <View style={[styles.scene, { backgroundColor: '#fff' }]} />
        <Text style={{ fontSize: 22, fontWeight: 'bold', backgroundColor: "#1a237e", height: 50, width: '100%', color: 'white', textAlign: 'center' }}>Diagnose the problem in Animal</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, marginLeft: 16, color: '#1a237e' }}>Select Species</Text>
        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, marginTop: 20 }}>
          <Picker
            style={{ height: 50, borderWidth: 0.8 }}
            selectedValue={this.state.speciesId}
            onValueChange={(itemValue, itemIndex) => this.setState({ speciesId: itemValue, problemData: [], pdDetailData: [], problemId: '', pdId: '' }, () => this.fetchProblems(itemValue))}>
            <Picker.Item label="Select Species" value="" />
            {this.state.data.map((it, ind) => { return (<Picker.Item label={it.species} value={it._id} />) })}
          </Picker>
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, marginLeft: 16, color: '#1a237e' }}>Select Problem</Text>
        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, marginTop: 20 }}>
          {this.state.isProblemLoading ?
            <ActivityIndicator
              size={'large'}
              color={'black'}
              style={styles.loader}
            />
            : <Picker
              style={{ height: 50, borderWidth: 0.8 }}
              selectedValue={this.state.problemId}
              onValueChange={(itemValue, itemIndex) => this.setState({ problemId: itemValue, pdDetailData: [], pdId: '' }, () => this.fetchProblemDetails(itemValue))}>
              <Picker.Item label="Select Problem" value="" />
              {this.state.problemData.map((it, ind) => { return (<Picker.Item label={it.problem} value={it._id} />) })}
            </Picker>}

        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, marginLeft: 16, color: '#1a237e' }}>Select Problem in detail</Text>
        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, marginTop: 20 }}>
          {this.state.isPdDetailLoading ?
            <ActivityIndicator
              size={'large'}
              color={'black'}
              style={styles.loader}
            />
            : <Picker
              style={{ height: 50, borderWidth: 0.8 }}
              selectedValue={this.state.pdId}
              onValueChange={(itemValue, itemIndex) => this.setState({ pdId: itemValue })}>
              <Picker.Item label="Select Problem Detail" value="" />
              {this.state.pdDetailData.map((it, ind) => { return (<Picker.Item label={it.problemDetail} value={it._id} />) })}
            </Picker>}

        </View>
        <TouchableOpacity onPress={() => this.saveProblem()}>
          <LinearGradient
            colors={['#90caf9', '#1a237e']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              marginTop: 40,
              height: 50,
              width: '92%',
              alignSelf: 'center',

              borderRadius: 8,
            }}

          >
          {this.state.isSaving? 
          <ActivityIndicator
          size={'large'}
          color={'black'}
          style={styles.loader}
        />
          : <Text style={styles.filledbuttontext}>SUBMIT </Text>}



          </LinearGradient>
        </TouchableOpacity>



      </View>

    );
  }
}
const mapStateToProps = (state) => {
  return {
      login: state.login,
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    paddingTop: 300
  },
  input: {
    borderRadius: 10,
    margin: 15,
    height: 50,
    borderColor: '#000',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#004d40',
    padding: 10,
    margin: 15,
    height: 50, borderRadius: 10,
  },
  submitButtonText: {
    top: 3,
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',

  },
  filledbuttontext: {

    textAlign: 'center',
    alignSelf: 'center',
    top: 12,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
  loader: { justifyContent: "center", alignSelf: "center" }
})
