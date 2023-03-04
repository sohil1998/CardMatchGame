import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [selectedCards, setselectedCards] = useState([]);
  const [Stop, setStop] = useState(true);
  const [matchFound, setMatchFound] = useState([]);
  const [totalMoves, setTotalMoves] = useState([]);
  const [items, setItems] = useState(
    [
      {id: 1, img: require('./img/cat.png'), sameId: 1},
      {id: 2, img: require('./img/cat.png'), sameId: 1},
      {id: 3, img: require('./img/dog.png'), sameId: 2},
      {id: 4, img: require('./img/dog.png'), sameId: 2},
      {id: 5, img: require('./img/fish.png'), sameId: 3},
      {id: 6, img: require('./img/fish.png'), sameId: 3},
      {id: 7, img: require('./img/goat.png'), sameId: 4},
      {id: 8, img: require('./img/goat.png'), sameId: 4},
      {id: 9, img: require('./img/monkey.png'), sameId: 5},
      {id: 10, img: require('./img/monkey.png'), sameId: 5},
      {id: 11, img: require('./img/human.png'), sameId: 6},
      {id: 12, img: require('./img/human.png'), sameId: 6},
      {id: 13, img: require('./img/snake.png'), sameId: 7},
      {id: 14, img: require('./img/snake.png'), sameId: 7},
      {id: 15, img: require('./img/tiger.png'), sameId: 8},
      {id: 16, img: require('./img/tiger.png'), sameId: 8},
    ].sort(() => Math.random() - 0.5),
  );

  const selectCardFunc = value => {
    if (selectedCards.length == 2) {
      null;
    } else {
      setselectedCards([...selectedCards, value]);
    }
  };
  const checkIfMatch = () => {
    setTotalMoves([...totalMoves, Math.random()]);
    if (Stop) {
      if (
        selectedCards[0]?.sameId ==
        selectedCards[selectedCards.length - 1]?.sameId
      ) {
        selectedCards.every(i => (i.sameId = 100));
        setMatchFound([...matchFound, selectedCards[0]?.sameId]);
        setselectedCards([]);
      } else {
        setselectedCards([]);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 120,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{marginRight: 40}}>
          Match Found = {JSON.stringify(matchFound.length / 2)}
        </Text>
        <Text>Total moves = {JSON.stringify(totalMoves.length / 2)}</Text>
      </View>
      <FlatList
        numColumns={4}
        data={items}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item.sameId == 100) {
                  null;
                } else {
                  setStop(true);
                  selectCardFunc(item);
                }
              }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  margin: 10,
                }}>
                {item.sameId == 100 ? (
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'white',
                    }}></View>
                ) : (
                  <>
                    {selectedCards.includes(item) ? (
                      <Image
                        source={item.img}
                        style={{
                          width: 60,
                          height: 60,
                          resizeMode: 'contain',
                        }}
                      />
                    ) : (
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        {/* <Text style={{color: 'white'}}>{item.sameId}</Text> */}
                      </View>
                    )}
                  </>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => {
          console.log('RESTART=================');
          setselectedCards([]);
          setTotalMoves([]);
          setMatchFound([]);
          setItems(
            [
              {id: 1, img: require('./img/cat.png'), sameId: 1},
              {id: 2, img: require('./img/cat.png'), sameId: 1},
              {id: 3, img: require('./img/dog.png'), sameId: 2},
              {id: 4, img: require('./img/dog.png'), sameId: 2},
              {id: 5, img: require('./img/fish.png'), sameId: 3},
              {id: 6, img: require('./img/fish.png'), sameId: 3},
              {id: 7, img: require('./img/goat.png'), sameId: 4},
              {id: 8, img: require('./img/goat.png'), sameId: 4},
              {id: 9, img: require('./img/monkey.png'), sameId: 5},
              {id: 10, img: require('./img/monkey.png'), sameId: 5},
              {id: 11, img: require('./img/human.png'), sameId: 6},
              {id: 12, img: require('./img/human.png'), sameId: 6},
              {id: 13, img: require('./img/snake.png'), sameId: 7},
              {id: 14, img: require('./img/snake.png'), sameId: 7},
              {id: 15, img: require('./img/tiger.png'), sameId: 8},
              {id: 16, img: require('./img/tiger.png'), sameId: 8},
            ].sort(() => Math.random() - 0.5),
          );
        }}>
        <Text style={{fontSize: 20}}>RESTART</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={
          selectedCards.length == 2
            ? setTimeout(() => {
                checkIfMatch();
              }, 100)
            : null
        }>
        <Text style={{fontSize: 20}}></Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={
          matchFound.length / 2 == 8
            ? alert(`You did it in ${totalMoves.length / 2} moves`)
            : null
        }>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
