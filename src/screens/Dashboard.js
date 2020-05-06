import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Dashboard = () => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              color: "white",
            }}
          >
            Account Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: hp("5"),
    backgroundColor: "#9DCBBA",
    width: "80%",
    height: 100,
    borderRadius: 10,
  },
  textInputs: {
    margin: 10,
  },
});

export default Dashboard;
