import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import destinationCategories from "@/data/categories";
import colors from "@/constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type  Props ={
  onCategoryChanged:( category: string)=>void;

}
const CategoryBottons = ({onCategoryChanged}: Props) => {

  const scrollRef = useRef<ScrollView | null>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectedCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x)=>{
      scrollRef.current?.scrollTo({x: x, y: 0, animated: true});
    })

    onCategoryChanged(destinationCategories[index].title);
  };


  return (
    <View>
      <Text style={styles.titles}>Categories</Text>
      <ScrollView
      ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] == el}
            style={
              activeIndex === index
                ? styles.categoryBottonActive
                : styles.categoryBotton
            }
            onPress={() => handleSelectedCategory(index)}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex == index ? colors.whileColor : colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categorytxtActive
                  : styles.categorytxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryBottons;

const styles = StyleSheet.create({
  titles: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.black,
  },

  categoryBotton: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    backgroundColor: colors.whileColor,
    alignItems: "center",
    shadowRadius: 0.1,
    shadowOpacity: 3,
  },

  categorytxt: {
    marginLeft: 10,
    fontSize: 16,
  },

  categoryBottonActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.prymaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  categorytxtActive: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.whileColor,
  },
});
