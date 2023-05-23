import { ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import styles from "./item.style";
import rectangle from "../../assets/img/Rectangle.png";
import { useRouter } from "expo-router";

const Item = ({ item, img }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/drink/${item._id}`);
  }
  return (  
    <TouchableOpacity style={styles.card} onPress={onClick}>
      <ImageBackground source={rectangle} style={styles.rectangle}>
        <Image source={img} />
      </ImageBackground>
      <Text style={styles.coffeeName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
