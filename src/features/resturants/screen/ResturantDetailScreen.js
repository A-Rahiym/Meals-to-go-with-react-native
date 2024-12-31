import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard.js";

const ResturantDetailScreen = ({ route }) => {
  const [breakFastExpanded, setBreakFastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { resturant } = route.params;

  return (
    <ScrollView style={{ flex: 1 }}>
      <ResturantInfoCard resturant={resturant} />
      <View style={{ flex: 2 }}>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakFastExpanded}
          onPress={() => setBreakFastExpanded(!breakFastExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Pancakes" />
          <List.Item title="Omelette" />
          <List.Item title="Smoothie" />
          <List.Item title="Granola" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Grilled Chicken Salad" />
          <List.Item title="Pasta" />
          <List.Item title="Burrito" />
          <List.Item title="Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Steak" />
          <List.Item title="Roasted Vegetables" />
          <List.Item title="Fish Curry" />
          <List.Item title="Pizza" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          style={styles.accordion}
        >
          <List.Item title="Lemonade" />
          <List.Item title="Iced Coffee" />
          <List.Item title="Smoothie" />
          <List.Item title="Cocktail" />
        </List.Accordion>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  accordion: {
    marginVertical: 8,
  },
});

export default ResturantDetailScreen;
