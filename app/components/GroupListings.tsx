import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import React from "react";
import { GroupTypes } from "@/types/groupType";
import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";

const GroupListings = ({ listings }: { listings: GroupTypes[] }) => {
  const rederItem: ListRenderItem<GroupTypes> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image }}></Image>
        <View>
            <Text style={styles.itemTxt}>{item.name}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="star" size={20} color={colors.prymaryColor}/>
                <Text style={styles.itemRating}>{item.rating}</Text>
                <Text style={styles.itemReview}>({item.reviews})</Text>
            </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={rederItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.whileColor,
    padding: 10,
    borderRadius: 20,
    marginRight:20,
    flexDirection: "row",
    alignItems: "center",
  
  },

  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,

  },
  title:{
    padding:10,
    fontSize: 20,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 10,
  },
  itemTxt:{
    fontSize:14,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 8
  },

  itemRating:{
    fontSize:14,
    fontWeight: "600",
    color: colors.black,
    marginBottom: 5

  },
  itemReview:{
    fontSize:14,
    fontWeight: "600",
    color: '#999',
    marginBottom: 5

  }
  
});
