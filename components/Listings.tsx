import { View, Text } from "react-native";
import React, { useEffect } from "react";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {
    console.log("RELOADING LISTINGS " + listings.length);
  }, [category]);

  // 1:45:27

  return (
    <View>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;
