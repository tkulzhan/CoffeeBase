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

import c1 from "../../assets/img/c1.png";
import c2 from "../../assets/img/c2.png";
import c3 from "../../assets/img/c3.png";
import c4 from "../../assets/img/c4.png";
import c5 from "../../assets/img/c5.png";
import c6 from "../../assets/img/c6.png";
import cb from "../../assets/img/cb.jpg";

import "../../locales/index";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 0,
    title: "Makiatto0x001e...3",
    img: c1,
  },
  {
    id: 1,
    title: "Ice Latte 00123exf...5",
    img: c2,
  },
  {
    id: 2,
    title: "Ice Fresco 00444xxx...3",
    img: c3,
  },
  {
    id: 3,
    title: "Tea fff444xxx...3",
    img: c4,
  },
  {
    id: 4,
    title: "Latte 12313...e13",
    img: c5,
  },
  {
    id: 5,
    title: "Cappucino 123a13...e1g",
    img: c6,
  },
];

const MarketOverview = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{t("mo")}</Text>
          <View style={styles.subContainer}>
            <Text style={styles.subtitle}>{t("mos")}</Text>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  router.push("/marketplace");
                }}
                style={styles.showAll}
              >
                {t("show_all")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.coffeeWrapper}>
              <ImageBackground source={cb} style={styles.bgc}>
                <View style={styles.overlay}>
                  <Image source={item.img} style={styles.coffeeImg} />
                  <View>
                    <Text style={styles.coffeeTitle}>{item.title}</Text>
                  </View>
                </View>
              </ImageBackground>
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

export default MarketOverview;
