import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#ffff', fontSize: 18}}>Mr.Thammanun Mertae</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
