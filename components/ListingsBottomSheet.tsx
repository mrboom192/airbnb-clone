import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [refresh, setRefresh] = useState(0);
  const snapPoints = useMemo(() => ["10%", "100%"], []);

  const showMap = () => {
    bottomSheetRef.current?.collapse(); // Collapses bottom sheet, showing map
    setRefresh((curr) => curr + 1);
  };

  return (
    <BottomSheet
      style={styles.sheetContainer}
      snapPoints={snapPoints}
      index={1}
      ref={bottomSheetRef}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      enablePanDownToClose={false}
    >
      <View style={{ flex: 1 }}>
        <Listings listings={listings} category={category} refresh={refresh} />
        <View style={styles.absoluteView}>
          <TouchableOpacity onPress={showMap} style={styles.btn}>
            <Text style={{ fontFamily: "mon-sb", color: "#FFF" }}>Map</Text>
            <Ionicons name="map" size={20} color={"#FFF"} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingsBottomSheet;
