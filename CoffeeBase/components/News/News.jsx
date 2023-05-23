import { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import styles from "./news.style";

import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

const data = [
  {
    id: 1,
    img: img1,
    title: "Welcome to new cyber spce",
    description: "We have rebuild our community. Check it out!",
  },
  {
    id: 2,
    img: img2,
    title: "SAY NO to long awaiting of your order",
    description: "The time to process your order is significantly decreased",
  },
  {
    id: 3,
    img: img3,
    title: "Enhanced design",
    description: "We have came acrross an idead to redesign our project",
  },
  {
    id: 4,
    img: img4,
    title: "As fast as thunder flicking",
    description: "The data acquiring process has been enhanced",
  },
];

const News = () => {
  const [selectedCard, setSelectedCard] = useState();

  const handleCardPress = (item) => {
    setSelectedCard(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>News</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => handleCardPress(item)}
            >
              <Image
                source={item.img}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 20,
                }}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: 10 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default News;
