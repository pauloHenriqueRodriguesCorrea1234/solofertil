import { StyleSheet, View, ScrollView} from 'react-native';

// Impotando components
import Header from './components/HeaderLogo';
import Card from './components/Card';
import logo from './assets/img/logoIFMS.png'
import Footer from './components/Footer';
import intagran from './assets/img/logoIntagran.png'

// Importando produtos
import quiabo from './assets/imgProdutos/quiabo.png'
import abacaxi from './assets/imgProdutos/abacaxi.png'
import abobrinha from './assets/imgProdutos/abobrinha.png'
import abobrinhaMenina from './assets/imgProdutos/abobrinhaMenina.png'
import agriao from './assets/imgProdutos/agriao.png'
import alfaceAmericano from './assets/imgProdutos/alfaceAmericano.png'
import alfaceCrespa from './assets/imgProdutos/alfaceCrespa.png'
import alfaceRoxa from './assets/imgProdutos/alfaceRoxa.png'
import almeirao from './assets/imgProdutos/almeirao.png'
import bananaNanica from './assets/imgProdutos/bananaNanica.png'
import batataDoce from './assets/imgProdutos/batataDoce.png'
import batatinha from './assets/imgProdutos/batatinha.png'
import berinjela from './assets/imgProdutos/berinjela.png'
import cebolinha from './assets/imgProdutos/cebolinha.png'
import cheiroVerde from './assets/imgProdutos/cheiroVerde.png'
import coentro from './assets/imgProdutos/coentro.png'
import couve from './assets/imgProdutos/couve.png'
import jilo from './assets/imgProdutos/gilo.png'
import mandioca from './assets/imgProdutos/mandioca.png'
import maxixe from './assets/imgProdutos/maxixe.png'
import milho from './assets/imgProdutos/milho.png'
import mostarda from './assets/imgProdutos/mostartda.png'
import ortela from './assets/imgProdutos/ortela.png'
import pepino from './assets/imgProdutos/pepino.png'
import poupaMaracuja from './assets/imgProdutos/poupaMaracuja.png'
import rucula from './assets/imgProdutos/Rucula.png'
import salcinha from './assets/imgProdutos/salsinha.png'
import tomate from './assets/imgProdutos/tomate.png'
import tomateCereja from './assets/imgProdutos/tomateCereja.png'
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Header logo={logo}/>
      <ScrollView style={styles.scrollView}>
        <NavigationContainer>
        <Card logo={quiabo} nome_produto={'Quiabo'} preco={'6,20 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={abacaxi} nome_produto={'Abacaxi'} preco={'2,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={abobrinha} nome_produto={'Abobrinha'} preco={'2,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={abobrinhaMenina} nome_produto={'Abobrinha Menina'} preco={'8,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={agriao} nome_produto={'Agrião'} preco={'2,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={alfaceAmericano} nome_produto={'Alface Americano'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={alfaceCrespa} nome_produto={'Alface Crespa'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={alfaceRoxa} nome_produto={'Alface Roxa'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={almeirao} nome_produto={'Almeirão'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={batataDoce} nome_produto={'Batata Doce'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={batatinha} nome_produto={'Batatinha'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={bananaNanica} nome_produto={'Banana Nanica'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={berinjela} nome_produto={'Berinjela'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={cebolinha} nome_produto={'Cebolinha'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={cheiroVerde} nome_produto={'Cheiro Verde'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={coentro} nome_produto={'Coentro'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={couve} nome_produto={'Couve'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={jilo} nome_produto={'Jiló'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={mandioca} nome_produto={'Mandioca'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={maxixe} nome_produto={'Maxixe'} preco={'4,00 R$'} telProdutor={'(67) 9262-4091'}/>
        <Card logo={milho} nome_produto={'Milho'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={mostarda} nome_produto={'Mostarda'} preco={'4,00 R$'} telProdutor={'(67) 9 99298697'}/>
        <Card logo={ortela} nome_produto={"Hortelã"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
        <Card logo={pepino} nome_produto={"Pepino"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
        <Card logo={poupaMaracuja} nome_produto={"Polpa de Maracujá"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
        <Card logo={rucula} nome_produto={"Rúcula"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
        <Card logo={salcinha} nome_produto={"Salsinha"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
        <Card logo={tomate} nome_produto={"Tomate"} preco={'4,00 R$'}  telProdutor={'(67) 9 99298697'}/>
        <Card logo={tomateCereja} nome_produto={"Tomate Cereja"} preco={'4,00 R$'}  telProdutor={'(67) 9262-4091'}/>
         </NavigationContainer>     
      </ScrollView>
      <Footer text={'@solo_fertil_campus_aquidauana'} logo={intagran} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d8d4',
  }, 
});
