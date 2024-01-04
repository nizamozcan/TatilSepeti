import React from "react";
import { IHotelList } from "../interfaces/IHotelList";
import { Image, StyleSheet, Text, View } from "react-native";
import {campaignNameFormat, isDiscount} from "../helpers/helper";
import { CustomText } from "./CustomText";

const HotelListCard = ({ data }: { data: IHotelList }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data?.photoPath }} resizeMode={"cover"}
               style={styles.image} />
        <Image source={require("../assets/icons/hearth2.png")}
               style={styles.heart} />
        <Text style={styles.score}>{data?.customerScore?.toString()?.length==1?data?.customerScore+".0":data?.customerScore}</Text>
        <View style={styles.healthContainer}>
          {data?.hasMinistryOfHealthCertificate &&
            <Text style={styles.healthCertificate}>§ Sağlık Sertifikalı</Text>}
        </View>
      </View>
      <View style={styles.hotelInfoContainer}>
        <View style={{ flex: 0.6 }}>
          <Text>{data?.hotelName}</Text>
          <View style={{ flexDirection: "row", paddingVertical: 8 }}>
            <Image source={require("../assets/icons/location.png")} style={{ height: 18, width: 18 }} />
            <Text style={{ alignSelf: "center" }}>{data?.subAreaName}, {data?.subAreaDetailName}</Text>
          </View>
          <Text
            style={styles.accommodationStil}>{data?.accommodation}</Text>
          {isDiscount(data?.campaignName)? <View style={{ flexDirection: "row", paddingTop: 8 }}>
            <Image source={require("../assets/icons/percent.png")} style={{ height: 18, width: 18 }} />
            <Text style={{ color: "green" }}>{campaignNameFormat(data?.campaignName)}</Text>
          </View>:<Text style={{color:'green',paddingTop:8}}>{data?.campaignName}</Text>}

        </View>
        <View style={{ flex: 0.4, alignItems: "flex-end" }}>
          { data?.discountPrice!=data?.price ?
            <View>
              <CustomText text={data?.price} maxLength={6} type={"price"}
                          textStil={{ color: "red", textDecorationLine: "line-through" }} />
              <CustomText text={data?.discountPrice} maxLength={6} type={"discountPrice"}
                          textStil={{ color: "blue", paddingVertical: 4 }} />
              <Text style={{ opacity: 0.5, fontSize: 16 }}>gecelik kişi başı</Text>
            </View>
            :
            <View>
              <CustomText text={data?.discountPrice} maxLength={6} type={"discountPrice"}
                          textStil={{ color: "blue", paddingVertical: 4 }} />
            </View>
          }
        </View>
      </View>
    </View>
  );
};
export default HotelListCard;
const styles = StyleSheet.create({
  container: { backgroundColor: "white", height: 360, marginTop: 8, flex: 1, borderRadius: 16 },
  imageContainer: { flex: 0.6 },
  image: { flex: 1, backgroundColor: "grey" ,borderTopLeftRadius:16,borderTopRightRadius:16},
  healthContainer: { position: "absolute", left: 10, bottom: 10, borderRadius: 4, backgroundColor: "#AFE1AF" },
  hotelInfoContainer: { flex: 0.3, marginTop: 16, flexDirection: "row",paddingHorizontal:16 },
  score: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "#0DEE29",
    padding: 8,
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  accommodationStil: {
    alignSelf: "flex-start",
    borderWidth: 1,
    padding: 4,
    borderRadius: 4
  },
  healthCertificate:{ fontWeight: "500", color: "white", padding: 4 ,paddingHorizontal:8},
  heart:{ position: "absolute", left: 10, top: 10, height: 24, width: 24 }
});
