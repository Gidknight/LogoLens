import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { COLORS, FONT, SIZES, icons, images } from "../constants";

import * as ImagePicker from "expo-image-picker";

import axios from "axios";
import AboutPlant from "../components/plantDetails/about/About";
import MY_GARDEN from "../db/garden";

const identify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [btnText, setBtnText] = useState("Predict");
  const [errorMessage, setErrorMessage] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [imageUri, setImageUri] = useState(null);
  const [image, setImage] = useState(null);
  const [maxPrediction, setMaxPrediction] = useState(null);
  const [foundMessage, setFoundMessage] = useState("");
  const [result, setResult] = useState("");
  const [plantInfo, setPlantInfo] = useState();

  //   functions

  const uploadImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0]);
      setImageUri(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Camera permission not granted");
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: true,
        aspect: [4, 4],
      });

      if (!result.canceled) {
        // console.log(result.assets[0]);
        setImageUri(result.assets[0].uri);
        setImage(result.assets[0]);
      }
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  const getPlantInfo = (breed) => {
    try {
      const answer = MY_GARDEN.findPlant(breed);
      // console.log(answer)
      if (answer.success == true) {
        setPlantInfo(answer.data);
      } else {
        setNotFound(true);
        // setFoundMessage(answer.message)
        setErrorMessage(answer.message);
        setResult(answer.message);
      }
    } catch (error) {
      setErrorMessage("plant not found");
    }
  };

  const getPredictions = async () => {
    try {
      setNotFound(false);
      setFoundMessage("");
      setIsLoading(true); // Set loading state to true while making the request
      setErrorMessage("predicting, please wait");
      // Prepare the image data to send to the API
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const response = await axios.post(
        "https://gidknight.pythonanywhere.com/api/v1/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log("after request")

      // Assuming the response contains predictions data
      if (response.data && response.data.success == true) {
        setPredictions(response.data.response);
        let maxPred = response.data.response[0];
        console.log(response.data.response);

        if (maxPred.percentage >= 80) {
          setMaxPrediction(maxPred);

          setFoundMessage(
            `${maxPred?.percentage}% certain it's ${maxPred?.breed}`
          );
          setErrorMessage("");
          getPlantInfo(maxPred?.breed);
        } else if (maxPred.percentage >= 50 && maxPred.percentage < 80) {
          setMaxPrediction(maxPred);
          setFoundMessage(
            `Image not clear, ${maxPred?.percentage}% certain its ${maxPred?.breed}`
          );
          setErrorMessage("");
          getPlantInfo(maxPred?.breed);
        } else if (maxPred.percentage < 50) {
          setFoundMessage("Plant Not Recognized");
          setResult("Plant Not Recognized");
          setNotFound(true);
          setErrorMessage("");
        }
      } else {
        setErrorMessage("No predictions found");
      }
    } catch (error) {
      console.error("Error getting predictions:", error);
      setErrorMessage("Failed to get predictions");
      setBtnText("Retry");
    } finally {
      setIsLoading(false); // Reset loading state regardless of success or failure
    }
  };

  const reset = () => {
    setImage();
    setImageUri("");
    setPredictions([]);
    setErrorMessage("");
    setPlantInfo(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.black,
            color: COLORS.primary,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: COLORS.primary,
          },
          headerShadowVisible: false,
          headerBackVisible: true,
          headerTitle: "Identify",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={loadModel} />
        // }
      >
        {!imageUri ? (
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                paddingTop: 50,
              }}
            >
              {isLoading && <ActivityIndicator size={"large"} />}
            </View>
            <View style={styles.lowerContainer}>
              <Text style={{ color: COLORS.primary, fontFamily: FONT.medium }}>
                Take a picture
              </Text>
              <TouchableOpacity onPress={captureImage} disabled={isLoading}>
                <Text style={styles.button(!isLoading)}>Capture Image</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lowerContainer}>
              <Text style={{ color: COLORS.primary, fontFamily: FONT.medium }}>
                Select a picture
              </Text>
              <TouchableOpacity onPress={uploadImage} disabled={isLoading}>
                <Text style={styles.button(!isLoading)}>Upload Image</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.viewer}>
              <Image
                source={{ uri: imageUri }}
                style={{
                  width: 400,
                  maxWidth: 500,
                  height: 400,
                  maxHeight: 500,
                  padding: SIZES.large,
                }}
                resizeMode="contain"
              />
            </View>

            {isLoading ? (
              <View style={styles.lowerContainer}>
                <ActivityIndicator size={"large"} />
                <Text>{errorMessage}</Text>
              </View>
            ) : (
              predictions.length === 0 && (
                <View style={styles.lowerContainer}>
                  <TouchableOpacity onPress={getPredictions}>
                    <Text style={styles.button(true)}>{btnText}</Text>
                  </TouchableOpacity>
                  {errorMessage && (
                    <Text style={{ color: COLORS.error }}>{errorMessage}</Text>
                  )}
                </View>
              )
            )}
          </View>
        )}
        {predictions.length > 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            {maxPrediction && (
              <Text
                style={{
                  color: COLORS.primary,
                  textTransform: "capitalize",
                  fontFamily: FONT.bold,
                  fontSize: SIZES.medium,
                  paddingBottom: 5,
                }}
              >
                {foundMessage}
              </Text>
            )}

            {notFound && (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: COLORS.error,
                    textTransform: "capitalize",
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    paddingBottom: 5,
                  }}
                >
                  {result}
                </Text>
                <TouchableOpacity onPress={reset}>
                  <Text style={styles.button(true)}>Predict Another</Text>
                </TouchableOpacity>
              </View>
            )}

            {plantInfo && (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  width: "100%",
                }}
              >
                <AboutPlant info={plantInfo} />
                <TouchableOpacity onPress={reset}>
                  <Text style={styles.button(false)}>Predict Another</Text>
                </TouchableOpacity>
              </View>
            )}
            {/* {errorMessage && (
              <Text>{errorMessage}</Text>
            )} */}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default identify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  lowerContainer: {
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.xxLarge,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  camera: {
    flex: 1,
    borderColor: COLORS.white,
  },
  viewer: {
    flex: 1,
    padding: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    margin: SIZES.medium,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: (isAGoal = false) => ({
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: isAGoal ? COLORS.lightWhite : COLORS.primary,
    backgroundColor: isAGoal ? COLORS.primary : "transparent",
  }),
  text: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
  },
});
