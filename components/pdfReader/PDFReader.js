import { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

// import Pdf from "react-native-pdf";

const PDFReader = ({ pdfPath = "./Medicinal_value_of_leaves.pdf" }) => {
  const { width, height } = useWindowDimensions();

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const source = {
    uri: pdfPath,
    cache: true,
  };
  //const source = require('./test.pdf');  // ios only
  //const source = {uri:'bundle-assets://test.pdf' };
  //const source = {uri:'file:///sdcard/test.pdf'};
  //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
  //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
  //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

  return (
    <View style={styles.container}>
      {/* <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{ flex: 1, width, height }}
      /> */}
      <Text style={styles.contact} numberOfLines={3}>
        Please Contact Emmanuel Akomolafe for more information
      </Text>
    </View>
  );
};

export default PDFReader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  contact: {
    color: COLORS.gray,
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    alignItems: "center",
    width: "70%",
  },
});
