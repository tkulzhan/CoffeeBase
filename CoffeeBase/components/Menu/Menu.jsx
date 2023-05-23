import React from "react";
import { TouchableOpacity, Image } from "react-native";
import menu from "../../assets/img/burger.png";

const Menu = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        marginLeft: 20
      }}
      onPress={onPress}
    >
      <Image
        source={menu}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </TouchableOpacity>
  );
};

export default Menu;
