import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { getPipList } from "../actions/PtpList";

const PtpList = () => {
  // console.log(this.props.navigation);
  // fetch the result on mount of function
  useEffect(() => {
    fetchPipList();
  }, []);
  const [selectedList, setSelectedList] = useState(["All"]);
  const [showTransactionOf, setShowTransactionOf] = useState("");
  const [menuList] = useState(["All", "PTP", "RTP", "BTP"]);
  const ptpList = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchPipList = () => dispatch(getPipList());

  const selectMenu = (menuItem) => {
    const menuAllOption = "All";
    if (menuItem !== menuAllOption) {
      selectedList.includes(menuAllOption)
        ? setSelectedList(selectedList.filter((menu) => menu !== menuAllOption))
        : null;
      selectedList.includes(menuItem)
        ? selectedList.length == 1
          ? setSelectedList([menuAllOption])
          : setSelectedList(selectedList.filter((menu) => menu !== menuItem))
        : setSelectedList((selectMenu) => [...selectMenu, menuItem]);
    } else {
      setSelectedList([menuAllOption]);
    }
  };

  let filterList = [];

  if (ptpList.pipListReducer.pip_list.length > 0) {
    filterList = ptpList.pipListReducer.pip_list.filter((menu) => {
      return selectedList.includes("All")
        ? true
        : selectedList.includes(menu.type)
        ? true
        : false;
    });
  }

  console.log(showTransactionOf);
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu}>
        {/* Mapping the menus from the menu list */}
        {menuList.map((menu, index) => (
          <Button
            mode="contained"
            key={index}
            onPress={() => selectMenu(menu)}
            color={selectedList.includes(menu) ? "black" : "white"}
          >
            {menu}
          </Button>
        ))}
      </View>
      <ScrollView style={styles.transactionContainer}>
        {/* mapping the transaction from the piplist redux state */}
        {filterList.map((transaction, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setShowTransactionOf(transaction.name)}
          >
            <View style={styles.singleTransactionContainer}>
              <View style={[styles.headerMenu]}>
                <Text style={[styles.fatText]}>{transaction.name}</Text>
                <Text style={[styles.fatText]}>Rs {transaction.amount}</Text>
              </View>
              <Text style={[styles.secondaryTextColor]}>
                {transaction.ifsc_id}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.secondaryTextColor]}>Current DPD: </Text>
                <Text style={[styles.dpdAmount]}>{transaction.currentDpd}</Text>
              </View>
              {showTransactionOf === transaction.name ? (
                <Text style={[styles.secondaryTextColor]}>
                  {transaction.address}
                </Text>
              ) : null}

              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.secondaryTextColor, { paddingTop: 5 }]}>
                  Due on:
                </Text>
                <Text
                  style={[
                    showTransactionOf === transaction.name
                      ? styles.fatText
                      : styles.secondaryTextColor,
                    { paddingLeft: 5 },
                  ]}
                >
                  {transaction.date}
                </Text>
              </View>
              {showTransactionOf === transaction.name ? (
                <View style={styles.headerMenu}>
                  <View style={{ flexDirection: "row", paddingTop: 5 }}>
                    <Button icon="phone" color="black" />
                    <Button icon="email" color="black" />
                    <Button icon="share" color="black" />
                  </View>
                  <Button
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                    color="yellow"
                  >
                    Details
                  </Button>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp("4%"),
    marginHorizontal: wp("4%"),
  },
  headerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  eachMenu: {
    width: 80,
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  eachSelectedMenu: {
    backgroundColor: "black",
    color: "white",
  },
  eachUnselectedMenu: {
    backgroundColor: "white",
    color: "black",
  },
  transactionContainer: {
    marginTop: hp("4"),
    height: hp("85"),
  },

  singleTransactionContainer: {
    height: "auto",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  fatText: {
    fontSize: 22,
  },
  secondaryTextColor: { color: "grey", margin: 3 },
  dpdAmount: { color: "green", margin: 3 },
});

export default PtpList;
