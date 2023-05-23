import { View, ActivityIndicator } from "react-native";
import Item from "../Item/Item";
import img from "../../assets/img/Cups.png";
import { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch } from "react-redux";
import { setMarket } from "../../store/marketSlice";

const ItemList = () => {
  const [data, setData] = useState([]);
  const [error, SetError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/order/api/getListOfOrders"
      );
      const data = await response.json();
      dispatch(setMarket(data));
      setData(data);
      SetError("");
    } catch (error) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onRetryFetch = () => {
    SetError("");
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
      <ErrorMessage
        m={"Oops an error occured\nFailed to get our products"}
        onRetry={onRetryFetch}
      />
    );
  }
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {data.map((i) => {
        return <Item img={img} item={i} key={i._id} />;
      })}
    </View>
  );
};

export default ItemList;
