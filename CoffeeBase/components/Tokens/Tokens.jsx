import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import styles from "./styles";

import t1 from "../../assets/img/t1.png";
import t2 from "../../assets/img/t2.png";
import t3 from "../../assets/img/t3.png";
import t4 from "../../assets/img/t4.png";
import t5 from "../../assets/img/t5.png";
import t6 from "../../assets/img/t6.png";

const data = [
  {
    id: 0,
    img: t1,
  },
  {
    id: 1,
    img: t2,
  },
  {
    id: 2,
    img: t3,
  },
  {
    id: 3,
    img: t4,
  },
  {
    id: 4,
    img: t5,
  },
  {
    id: 5,
    img: t6,
  },
];

const Tokens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore our tokens</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={item.img} style={styles.img} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: 15 }}
        horizontal
      />
    </View>
  );
};

export default Tokens;
