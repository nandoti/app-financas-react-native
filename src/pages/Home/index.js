import { StyleSheet, Text, View } from "react-native";
import Balance from "../components/Balance";
import Header from "../components/Header/index";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fernando Tavares" />
      <Balance saldo="14.290,90" gastos="-900,00" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
