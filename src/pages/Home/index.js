import { StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../components/Actions";
import Balance from "../components/Balance";
import Header from "../components/Header/index";
import Movements from "../components/Movements";

const list = [
  {
    id: 1,
    label: "Salário",
    value: "2.668,00",
    date: "03/09/2022",
    type: 1, // receita
  },
  {
    id: 2,
    label: "PIX",
    value: "1.000,00",
    date: "10/09/2022",
    type: 1, // receita
  },
  {
    id: 3,
    label: "Boleto conta luz",
    value: "129,00",
    date: "11/09/2022",
    type: 0, // despesas
  },
  {
    id: 4,
    label: "Cartão de crédito",
    value: "800,00",
    date: "12/09/2022",
    type: 0, // despesas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fernando Tavares" />

      <Balance saldo="14.290,90" gastos="-900,00" />

      <Actions />

      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
