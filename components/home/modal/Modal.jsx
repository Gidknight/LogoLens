import React from "react";
import { View } from "react-native";
import { useRouter, Link } from "expo-router";
import styles from "./modal.style";
import { icons } from "../../../constants";
import { ModalButton } from "../..";

const Modal = () => {
  const route = useRouter();
  return (
    <View style={{}}>
      <View style={styles.container}>
        <ModalButton
          iconUrl={icons.camera}
          text={"Identify"}
          dimension={"80%"}
          handlePress={() => route.push("/identify")}
        />
        <ModalButton
          iconUrl={icons.garden}
          text={"My Garden"}
          dimension={"80%"}
          handlePress={() => route.push("/myGarden")}
        />
        <ModalButton
          iconUrl={icons.book}
          text={"My Books"}
          dimension={"80%"}
          // handlePress={() => route.push("/myBooks")}
        />
      </View>
    </View>
  );
};

export default Modal;
