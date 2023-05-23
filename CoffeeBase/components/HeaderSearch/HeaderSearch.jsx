import React from "react";
import { TouchableOpacity, Image } from "react-native";
import search from "../../assets/img/headerSearch.png";

const HeaderSearch = () => {
  return (
    <TouchableOpacity
      style={{
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <Image
        source={search}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </TouchableOpacity>
  );
};

export default HeaderSearch;
