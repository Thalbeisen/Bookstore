import * as React from "react";
import { ListItem } from "react-native-elements";
import { TouchableHighlight, Text, View } from "react-native";

const BooksList = () => {
  return (
      <View>
    <ListItem
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    <ListItem
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}
      onPress={() => console.log("onLongPress()")}
      pad={20}
    >
      <ListItem.Content>
        <ListItem.Title>
          <Text>Pranshu Chittora</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>React Native Elements</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    </View>
    
  );
}

export default BooksList