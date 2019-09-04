
import React, { Fragment } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  atualizarDados = () => {
    alert("aaaa")
  }
  aumentar = () => {
    alert("aaaa")
  }

  return (
    <Fragment>
      <View style={styles.body}>
        <View style={styles.box}>
          <FlatList 
            
            data={[{ title: 'Title Text', key: 'item1' },
            { title: 'item 2', key: '1' }]}


            renderItem={({ item, index, separators }) => (
              <TouchableHighlight
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <Text>{item.title}</Text>
              </TouchableHighlight>
            )}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scroll}
         >
           
          <View style={styles.box}>
            <Text>Sou a caixinha 2</Text>
          </View>
          <View style={styles.box}>
            <Text>Sou a caixinha 3</Text>
          </View>
          <View style={styles.box}>
            <Text>Sou a caixinha 4</Text>
          </View>
        </ScrollView>

        <Button onPress={this.atualizarDados}
          title="Atualizar"
          color="yellow"
        />

      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 30,
    flexWrap: 'wrap',
    //background muda de acordo com o clima
    backgroundColor: Colors.black,
    justifyContent: 'space-around',

  },
  textBox: {
    textAlign: 'center',
  },
  box: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'powderblue',
    width: 200,
    height: 250,

  },
  scroll: {
    paddingVertical: 20,
    horizontal: true,
  },

});

export default App;
