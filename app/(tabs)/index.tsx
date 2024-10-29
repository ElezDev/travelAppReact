import colors from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryBottons from "../components/CategoryBottons";
import Listings from "../components/Listings";
import listingData from '@/data/destinatios.json'
import groupData from '@/data/groups.json'
import GroupListings from "../components/GroupListings";

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const onCatChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ height: 50, width: 50, borderRadius: 10 }}
              ></Image>
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: colors.whileColor,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingText}>
          Popayán Historia y Belleza en Cada Rincón!
        </Text>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Ionicons
              style={{ marginRight: 5, backgroundColor: colors.whileColor }}
              name="search"
              size={28}
            />
            <TextInput placeholder="Search..." />
          </View>
          <TouchableOpacity style={styles.filterbtn} onPress={() => {}}>
            <Ionicons name="options" size={28} color={colors.whileColor} />
          </TouchableOpacity>
        </View>
        <CategoryBottons onCategoryChanged={onCatChanged} />
        <Listings listing={listingData} category={category}/>
        
        <GroupListings listings={groupData}/>
        </ScrollView>
      </View>
   
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.bgColor,
  },

  headingText: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 5,
    color: colors.black,
  },

  searchSection: {
    flexDirection: "row",
    marginVertical: 20,
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: colors.whileColor,
    padding: 16,
    borderRadius: 10,
    flex: 1,
  },

  filterbtn: {
    backgroundColor: colors.prymaryColor,
    padding: 11,
    borderRadius: 12,
    marginLeft: 12,
  },
});
