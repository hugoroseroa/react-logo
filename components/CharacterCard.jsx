import { View, Image, Text, StyleSheet } from "react-native";

export function CharacterCard({character}){

    return(
         <View key={character.id} style={styles.card}>
                  <Image style={styles.image} source={{ uri:character.image}} />
                  <Text style={styles.title}>{character.name}</Text>
                  <Text style={styles.species}>{character.species}</Text>
                  <Text style={styles.status}>{character.status}</Text>
                  <Text style={styles.gender}>{character.gender}</Text>
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