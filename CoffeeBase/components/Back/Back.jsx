import React from "react";
import { TouchableOpacity, Image } from "react-native";
import back from "../../assets/img/back.png";
import { useRouter } from "expo-router";

const Back = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        width: "25px",
        height: "25px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
        marginRight: "20px",
      }}
      onPress={() => {
        router.push("/");
      }}
    >
      <Image
        source={back}
        resizeMethod="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </TouchableOpacity>
  );
};

export default Back;
