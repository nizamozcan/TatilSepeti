import React, { useEffect, useState, lazy, Suspense } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GetHomeData } from "../actions/GetHomeData";
import { CustomAlertModal } from "../components/CustomAlertModal";

const LazyHotelListComponent = lazy(() => import("../components/HotelListCard"));

const HotelsScreen = () => {
  const [data, setData] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  useEffect(() => {
    getHotelsList();
  }, []);
  const getHotelsList = async () => {
    GetHomeData().then((response) => setData(response)).catch(() => {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    });
  };

  function lazyComponent() {
    return (
      <View style={styles.lazyContainer}>
        <View style={{ flex: 0.5, justifyContent: "center" }}>
          <Text style={styles.lazyText}>Loading...</Text>
        </View>
      </View>
    );
  }

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Suspense fallback={lazyComponent()}>
        <LazyHotelListComponent data={item} />
      </Suspense>
    );
  };
  const loadMoreItems = () => {
    /*Eğer api servisinde bir sayfalama işlemi yapılabilseydi
    * Kullanıcı listenin sonuna geldiğinde bu fonksiyonu çalıştıracaktı. Burada da api servisine
    * istek atılıp 2. sayfayı çektikten sonra gelen datayı mevcut state ile birleştirip
    * kullanıcıya datayı gösterebiliriz. */
  };
  return (
    <SafeAreaView style={{ marginHorizontal: 8 }}>
      {alertVisible && <CustomAlertModal />}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={(item) => renderItem(item)}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};
export default HotelsScreen;
const styles = StyleSheet.create({
  lazyContainer: {
    height: 300,
    backgroundColor: "white",
    marginBottom: 16,
    borderRadius: 16
  },
  lazyText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});
