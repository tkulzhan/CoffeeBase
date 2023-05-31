import React from "react";
import { TouchableOpacity, Image } from "react-native";
import back from "../../assets/img/back.png";
import { useRouter } from "expo-router";

const Back = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 20,
      }}
      onPress={() => {
        router.push("/");
      }}
    >
      <Image
        source={back}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </TouchableOpacity>
  );
};

export default Back;
