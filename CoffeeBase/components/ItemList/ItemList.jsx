import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { setMarket } from "../../store/marketSlice";
import styles from "./styles";
import "../../locales/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    fetchData();
  }, []);

  const renderCoffeeItem = ({ item }) => (
    <TouchableOpacity
      style={styles.coffeeItemContainer}
      onPress={() => {
        router.push(`/drink/${item._id}`);
      }}
    >
      <Image
        source={require(`../../assets/img/c7.png`)}
        style={styles.coffeeItemImage}
      />
      <View style={styles.coffeeItemDetails}>
        <Text style={styles.coffeeItemTitle}>{item.title}</Text>
        <Text style={styles.coffeeItemDescription}>{item.description}</Text>
        <Text style={styles.coffeeItemPrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/order/api/getListOfOrders"
      );
      const data = await response.json();
      dispatch(setMarket(data));
      setData(data);
      console.log(data);
      SetError("");
    } catch (error) {
      console.log(error);
      SetError("fetch");
    } finally {
      setLoading(false);
    }
  };

  const onRetryFetch = () => {
    SetError("");
    setLoading(true);
    fetchData();
  };

  if (loading) {
    return (
      <View
        style={{
          top: 200,
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  if (error === "fetch") {
    return (
      <ErrorMessage m={`${t("oops")}\n${t("fp")}`} onRetry={onRetryFetch} />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("cmp")}</Text>
      <FlatList
        data={data}
        renderItem={renderCoffeeItem}
        keyExtractor={(item) => item._id}
        style={styles.coffeeList}
      />
    </View>
  );
};

export default ItemList;
