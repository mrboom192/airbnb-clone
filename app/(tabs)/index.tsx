import { View, Text, StyleSheet } from "react-native";
import React, { useMemo, useState } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={{ flex: 1, marginTop: 60 }}>
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChange={onDataChanged} />,
          }}
        />
        {/* <Listings listings={items} category={category} /> */}
        <ListingsMap listings={listingsDataGeo} />
        <ListingsBottomSheet listings={items} category={category} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default Page;
