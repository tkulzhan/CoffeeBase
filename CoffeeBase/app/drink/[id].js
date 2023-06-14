import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Drawer from "../../components/Drawer/Drawer";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "../../store/store";
import { useTranslation } from "react-i18next";
import styles from "../login/styles";
import Payment from "react-native-payment";
import formStyles from "../login/styles";

const DrinkPage = () => {
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
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

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
      <View style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require(`../../assets/img/c7.png`)}
            style={{ width: 100, height: 200, resizeMode: "contain" }}
          />
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ color: "white", fontSize: 22 }}>{item.title}</Text>
            <Text style={{ color: "white", fontSize: 16 }}>
              {item.description}
            </Text>
            <Text style={{ color: "white", fontSize: 20 }}>${item.price}</Text>

            {visible ? (
              <TouchableOpacity
                style={formStyles.btn}
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Text style={formStyles.btnText}>{t("cancel")}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setVisible(true);
                }}
              >
                <Text style={styles.btnText}>{t("buy")}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {visible && <PaymentForm />}
    </Drawer>
  );
};

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCVC] = useState("");
  const { t } = useTranslation();

  const handlePayment = () => {
    const paymentData = {
      number: cardNumber,
      expMonth: expiryMonth,
      expYear: expiryYear,
      cvc: cvc,
    };
  };

  return (
    <View>
      <TextInput
        style={formStyles.input}
        placeholder={t("pcn")}
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 5 }}
      >
        <TextInput
          style={[formStyles.input, { width: "50%" }]}
          placeholder={t("pem")}
          value={expiryMonth}
          onChangeText={setExpiryMonth}
        />
        <TextInput
          style={[formStyles.input, { width: "50%" }]}
          placeholder={t("pey")}
          value={expiryYear}
          onChangeText={setExpiryYear}
        />
      </View>
      <TextInput
        style={formStyles.input}
        placeholder="CVC"
        value={cvc}
        onChangeText={setCVC}
      />
      <TouchableOpacity style={formStyles.btn} onPress={handlePayment}>
        <Text style={formStyles.btnText}>{t("pay")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrinkPage;
