import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const SettingScreen = () => {
  const photos = ["https://picsum.photos/700"]
  return (
    <>
      {/* <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings</Text>
      </View> */}
      <View>
        <Card>
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
          <Card.Actions>
            {/* <Button>Cancel</Button> */}
            {/* <Button>Ok</Button> */}
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};

export default SettingScreen;
