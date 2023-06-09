import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./welcome.style";
import { useState } from "react";
import search from "../../assets/img/search.png";
import "../../locales/index";
import { useTranslation } from "react-i18next";

const typesOfCoffee = ["Cyber Space", "Coffee", "Members"];

const Welcome = () => {
  const [activeTabType, setActiveTabType] = useState(typesOfCoffee[0]);
  const { t } = useTranslation()
  
  return (
    <View>
      <View className={styles.container}>
        <Text style={styles.hello}>{t("welcome")}</Text>
        <Text style={styles.welcomeMessage}>{t("grab")}</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder={t("search")}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={typesOfCoffee}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeTabType, item)}
              onPress={() => {
                setActiveTabType(item);
              }}
            >
              <Text style={styles.tabText(activeTabType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 10 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
