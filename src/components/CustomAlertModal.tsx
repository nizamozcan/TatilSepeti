import { Image, Modal, StyleSheet, Text, View } from "react-native";
export const CustomAlertModal = () => {
  return (
    <Modal
      visible={true}
      animationType="slide"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={require("../assets/icons/warning.png")} style={{ width: 45, height: 45 }} />
          <Text style={styles.alertText}>Servis ile ilgili bir sorun oluştu. Lütfen daha sonra tekrar deneyiniz.</Text>
        </View>
      </View>
    </Modal>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    minHeight: "25%"
  },
  alertText: {
    fontWeight: "bold",
    color: "black",
    textAlignVertical: "center",
    flex: 1
  }
});
