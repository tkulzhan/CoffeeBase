import { View, Text, ActivityIndicator } from "react-native";
import Drawer from "../../components/Drawer/Drawer";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store/store";

const DrinkPage = () => {
  const [error, SetError] = useState("");

  if (error === "fetch") {
    return (
      <Drawer>
        <ErrorMessage
          m={"Oops an error occured\nFailed to get our products"}
          onRetry={onRetryFetch}
        />
      </Drawer>
    );
  }
  return (
    <Provider store={store}>
      <Drink />
    </Provider>
  );
};

const Drink = () => {
  const market = useSelector((state) => state.market.value);
  const { id } = useLocalSearchParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem(id);
  }, [id]);

  const getItem = (id) => {
    for (let i = 0; i < market.length; i++) {
      if (market[i]._id == id) {
        setItem(market[i]);
        setLoading(false);
        break;
      }
    }
  };

  if (loading) {
    return (
      <Drawer>
        <View
          style={{
            top: 200,
          }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      </Drawer>
    );
  }
  return (
    <Drawer>
      <View>
        <Text style={{ color: "#fff" }}>{item.name}</Text>
      </View>
    </Drawer>
  );
};

export default DrinkPage;
