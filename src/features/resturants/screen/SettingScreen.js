import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const SettingScreen = () => {
  const photos = ["https://picsum.photos/700"];
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        {/* <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={LeftContent}
          />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: photos[0] }} />
        </Card> */}
        <Text style={{ flex: 1, backgroundColor: "yellow" }}></Text>
        <Text style={{ flex: 3, backgroundColor: "blue" }}></Text>
        <Text style={{ flex: 12, backgroundColor: "orange" }}></Text>
      </View>
    </>
  );
};

export default SettingScreen;
