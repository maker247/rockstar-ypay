import {
    Text,
    View,
    StyleSheet
} from "react-native"

export default function BalanceCard() {
    return (
        <View style={styles.banner}>
            <Text style={styles.text.label}>Balance</Text>
            <View style={styles.balance}>
                <Text style={styles.text.label}>$</Text>
                <Text style={styles.text.amount}>12,534.74</Text>
            </View>

            <View style={styles.balanceGrowth}>
                <Text style={styles.text.growth}>+520 Today</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {},
    balance: {},
    balanceGrowth: {},
    text: {
        label: {},
        amount: {},
        growth: {}
    },

})