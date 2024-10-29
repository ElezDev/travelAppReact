import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { listingTypes } from "@/types/listingTypes";
import colors from "@/constants/colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listing: any[];
  category: string;
};

const Listings = ({ listing, category }: Props) => {
  const [loading, setLoanding] = useState(false);

  useEffect(() => {
    console.log("Loading");
    setLoanding(true);


    setTimeout(() => {
        setLoanding(false);
    }, 200);
  }, [category]);

  const renderItems: ListRenderItem<listingTypes> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.bookmark}>
            <Ionicons
              name="bookmark-outline"
              size={20}
              color={colors.whileColor}
            />
          </View>
          <View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemTxt}>
              {item.name}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={colors.prymaryColor}
              />
              <Text style={styles.locationtxt}>{item.location}</Text>
            </View>
            <Text style={styles.priceTxt}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View>
      <FlatList
        data={ loading ? [] :   listing}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.whileColor,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: colors.prymaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.whileColor,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 10,
  },

  locationtxt: {
    fontSize: 12,
    marginLeft: 5,
  },

  priceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.prymaryColor,
  },
});
