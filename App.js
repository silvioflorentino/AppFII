import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.titulo} >Melhores Fundos Imobiliários </Text>
      <ScrollView>
      <View style={styles.img1}> 
      <Image style={styles.img} resizeMethod="center" source={require('./assets/images/knr11.png')}/>
      </View>
      
      <Text style={styles.info} >Cotação: 154,59</Text>
      <Text style={styles.info} >P/PV: 0,97</Text>
      <Separator />
      <View style={styles.img1}> 
      <Image style={styles.img} resizeMethod="center" source={require('./assets/images/knr11.png')}/>
      </View>
      <Text style={styles.info} >Cotação: 154,59</Text>
      <Text style={styles.info} >P/PV: 0,97</Text>
      <Separator />
      <View style={styles.img1}> 
      <Image style={styles.img} resizeMethod="center" source={require('./assets/images/knr11.png')}/>
      </View>
      <Text style={styles.info} >Cotação: 154,59</Text>
      <Text style={styles.info} >P/PV: 0,97</Text>
      <Separator />
      <View style={styles.img1}> 
      <Image style={styles.img} resizeMethod="center" source={require('./assets/images/knr11.png')}/>
      </View>
      <Text style={styles.info} >Cotação: 154,59</Text>
      <Text style={styles.info} >P/PV: 0,97</Text>
      <Separator />
      <View style={styles.img1}> 
      <Image style={styles.img} resizeMethod="center" source={require('./assets/images/knr11.png')}/>
      </View>
      <Text style={styles.info} >Cotação: 154,59</Text>
      <Text style={styles.info} >P/PV: 0,97</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe9',

  },
  img: 
  {
    width: 300,
    height: 120,
    borderRadius: 8,
    marginTop: 20
  },
  img1: 
  {
    alignItems: 'center',
  },
  titulo:{
    marginTop:60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info:
  {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'left',
    marginHorizontal: 20,
  },
  separator: {
    height: 1, 
    backgroundColor: '#CCCCCC', 
    marginVertical: 10, 
  },
});
