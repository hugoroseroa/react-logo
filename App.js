import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import Logo from './components/Logo';
import { Main } from './components/Main';




export default function App() {
  
/*   const[personajes, setPersonajes]=useState([]);
useEffect(()=>{
  getPersonajes().then((data)=>{
    setPersonajes(data);
    console.log("personajes:",data)
  }) 

},[]);*/


  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Logo style={styles.logo}/>
      <Main/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
   justifyContent:'center',
   alignItems:'center',
   flex:1,
  },
 
  image:{
    width:107,
    height:147,
    borderRadius:10,
  },
  card:{
    backgroundColor:'#f5f5f5',
    padding:20,
    borderRadius:10,
    marginBottom:20,
    width:'90%',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#9f9f9f',
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
    color:'#000',
  },
  species:{
    fontSize:16,
    color:'#666',
  },
  status:{
    fontSize:16,
    color:'#666',
  },
   gender:{
    fontSize:16,
    color:'#666',
  },
  logo:{
    backgroundColor:'#000',
    marginBottom:10,
  }
});
