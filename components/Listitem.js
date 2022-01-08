import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements';
const ListItem = ({
  item,
  deleteItem
}) => {
  
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
       
    
          <Text style={ styles.listItemText}>
            {item.text}
        </Text>
        <Button
          
          onPress={() => deleteItem(item.id)}
          title="Delete"
          // color="#841584"
          

        />
          
          <Icon
            name="rocket"
            size={20}
            color="firebrick"
            
          />
        
      
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eef',
  },
  listItemView: {
    flexDirection: 'row', //we want icons in horizontal not in vertical
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});

export default ListItem;