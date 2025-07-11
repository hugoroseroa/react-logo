import { StatusBar, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Logo from "../components/Logo";
import { Main } from "../components/Main";
import { Link } from "expo-router";

export default function Index() {
  
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Logo style={styles.logo}/>
        <Link href="/about" asChild>
          <TouchableOpacity>
            <Text>
              Acerca de
            </Text>
          </TouchableOpacity>
        </Link>
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
  logo:{
    backgroundColor:'#000',
    marginBottom:10,
  }
});

