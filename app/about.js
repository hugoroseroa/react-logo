import { Link } from "expo-router";
import { ScrollView, View, Text} from "react-native";

export default function About() {
  
  return (
    <ScrollView>
        <View>
            <Text>Hola Mundo</Text>
            <Link href="/" >
                <Text>Volver al inicio</Text>
            </Link>
        </View>
    </ScrollView>

  )
}
