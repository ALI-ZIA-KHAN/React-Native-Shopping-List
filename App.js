import React ,{useState} from 'react';
import {View,Text,StyleSheet,Image,FlatList,Alert} from 'react-native';
import Header from './components/Heading';
import ListItem from './components/Listitem'
import AddItem from './components/AddItem';

import Icon from 'react-native-vector-icons/FontAwesome';
const App=()=>{

  const [items,setItems]=useState([
    {id:1,text:"Milk"},
    {id:2,text:"Eggs"},
    {id:3,text:"Bread"},
    {id:4,text:"Juice"}


  ]);


  const deleteItem=(id)=>{
    
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id !=id)
    })
  }


  const addItem=(text)=>{

    if(!text){

      Alert.alert("Oops Error","Please Enter any item",{
        text:'Ok'
      })

    }else{
     
      setItems(prevItems=>{
        return [{id:(items.length+1),text},...prevItems];
        //it is like text:text
      })
    }

  }

  return(



    <>

    <View style={styles.container} >

      <Header title={"Shopping List"}/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items} 
      renderItem={({item})=><ListItem item={item} deleteItem={deleteItem}/>}
    />

      {/* <Text style={{color:'darkslateblue',fontSize:30}}>Hello to React Native</Text> */}
     {/* <Image source={{uri:"https://randomuser.me/api/portraits/men/1.jpg"}} style={styles.img}/> */}
    </View>
    
    
    </>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    // paddingTop:60, in video header was touching roof of screen while in mine it was all right so I commented it
  },
  img:{
    width:100,
    height:100,
    borderRadius:100/2
  }

})

export default App;