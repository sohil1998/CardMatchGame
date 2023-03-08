import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const [selectedCards, setselectedCards] = useState([]);
  const [Stop, setStop] = useState(true);
  const [matchFound, setMatchFound] = useState([]);
  const [totalMoves, setTotalMoves] = useState([]);
  const [items, setItems] = useState(
    [
      {id: 1, img: 'A', sameId: 1},
      {id: 2, img: 'A', sameId: 1},
      {id: 3, img: 'B', sameId: 2},
      {id: 4, img: 'B', sameId: 2},
      {id: 5, img: 'C', sameId: 3},
      {id: 6, img: 'C', sameId: 3},
      {id: 7, img: 'D', sameId: 4},
      {id: 8, img: 'D', sameId: 4},
      {id: 9, img: 'E', sameId: 5},
      {id: 10, img: 'E', sameId: 5},
      {id: 11, img: 'F', sameId: 6},
      {id: 12, img: 'F', sameId: 6},
      {id: 13, img: 'G', sameId: 7},
      {id: 14, img: 'G', sameId: 7},
      {id: 15, img: 'H', sameId: 8},
      {id: 16, img: 'H', sameId: 8},
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
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          backgroundColor: 'white',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{fontSize: 20, color: 'black'}}>
                          {item.img}
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{color: 'white'}}>{item.sameId}</Text>
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
              {id: 1, img: 'A', sameId: 1},
              {id: 2, img: 'A', sameId: 1},
              {id: 3, img: 'B', sameId: 2},
              {id: 4, img: 'B', sameId: 2},
              {id: 5, img: 'C', sameId: 3},
              {id: 6, img: 'C', sameId: 3},
              {id: 7, img: 'D', sameId: 4},
              {id: 8, img: 'D', sameId: 4},
              {id: 9, img: 'E', sameId: 5},
              {id: 10, img: 'E', sameId: 5},
              {id: 11, img: 'F', sameId: 6},
              {id: 12, img: 'F', sameId: 6},
              {id: 13, img: 'G', sameId: 7},
              {id: 14, img: 'G', sameId: 7},
              {id: 15, img: 'H', sameId: 8},
              {id: 16, img: 'H', sameId: 8},
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
