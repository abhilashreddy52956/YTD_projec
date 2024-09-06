import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dropdown } from 'react-native-element-dropdown';

const data = {
    yearOptions: [
        { label: "2024-2025", value: "2024-2025" },
        { label: "2023-2024", value: "2023-2024" },
        { label: "2022-2023", value: "2022-2023" },
    ],
    statements: [
        {
            year: "2024-2025",
            generatedDate: "May 2024",
            income: "₹ 2,34,854.00",
            deductions: "₹ 2,854.00",
            days: 122,
            netPay: "₹ 97,172.00",
        },
        {
            year: "2023-2024",
            generatedDate: "May 2023",
            income: "₹ 2,00,000.00",
            deductions: "₹ 2,000.00",
            days: 120,
            netPay: "₹ 90,000.00",
        },
        {
            year: "2022-2023",
            generatedDate: "May 2022",
            income: "₹ 1,80,000.00",
            deductions: "₹ 1,800.00",
            days: 118,
            netPay: "₹ 85,000.00",
        },
    ],
};

export default function YtdStatement() {
    const [selectedYear, setSelectedYear] = useState(data.yearOptions[0].value);
    const currentStatement = data.statements.find(
        (statement) => statement.year === selectedYear
    );
    const summaryItems = [
        {
            label: "Income",
            value: currentStatement.income,
            icon: <FontAwesome name="money" size={24} color="gray" />,
        },
        {
            label: "Deductions",
            value: currentStatement.deductions,
            icon: (
                <MaterialCommunityIcons
                    name="file-percent-outline"
                    size={24}
                    color="gray"
                />
            ),
        },
        {
            label: "Days",
            value: currentStatement.days,
            icon: <FontAwesome name="calendar" size={24} color="gray" />,
        },
        {
            label: "Net Pay",
            value: currentStatement.netPay,
            icon: <FontAwesome name="rupee" size={24} color="gray" />,
        },
    ];

    return (
        <View style={styles.screenContainer}>
            <SafeAreaView />
            <View style={styles.headerContainer}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>YTD Statement</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={data.yearOptions}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={selectedYear}
                onChange={item => setSelectedYear(item.value)}
                renderRightIcon={() => (
                    <AntDesign name="down" size={24} color="#6366FF" />
                )}
            />

            <View style={styles.content}>
                <ImageBackground
                    source={require("../../assets/images/back.png")}
                    style={styles.backgroundImage}
                >
                    <View style={styles.header}>
                        <Text style={{fontWeight:'400',fontSize:'16px',fontFamily:'sans-serif'}}>Your YTD Statement</Text>
                        <Text style={styles.netPay}>{currentStatement.netPay}</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.noticeContainer}>
                <Feather
                    name="alert-circle"
                    size={24}
                    color="#FFA500"
                    style={styles.alertIcon}
                />
                <Text style={styles.generatedDate}>
                    Statement Generated as on {currentStatement.generatedDate}
                </Text>
            </View>

            <View style={styles.summaryContainer}>
                {summaryItems.map((item, index) => (
                    <View key={index} style={styles.summaryItem}>
                        <View style={styles.summaryItemLabel}>
                            {item.icon}
                            <Text style={styles.label}>{item.label}</Text>
                        </View>
                        <Text style={styles.value}>{item.value}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.download}>
                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>Download YTD statement</Text>
                    <AntDesign name="download" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        fontFamily: "sans-serif",
    },
    headerContainer: {
        backgroundColor: "#5E5CE6",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: -1,
        fontFamily: "sans-serif",
        alignSelf:'center'
    },
    iconContainer: {
        padding: 5,
        paddingBottom:7
    },
    content: {
        marginTop: 10,
    },
    backgroundImage: {
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    netPay: {
        fontSize: '20px',
        fontWeight: "600",
        color: "#6366FF",
        fontFamily: "sans-serif",
        top:15
    },
    noticeContainer: {
        backgroundColor: "#FFFEED",
        color: "#FFCF27",
        fontSize: 14,
        alignSelf: 'flex-start',
        marginTop: 20,
        marginBottom: 20,
        padding: 5,
        flexDirection: "row",
        borderRadius: 50,
    },
    alertIcon: {
        marginRight: 20,
    },
    generatedDate: {
        fontSize: 16,
        color: "#FFA500",
        marginTop: 5,
        fontFamily: "sans-serif",
    },
    summaryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin:10,
    },
    summaryItem: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        width: "48%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        borderWidth: 1,
        borderColor: "#6366FF",
    },
    summaryItemLabel: {
        flexDirection: "row",
        alignSelf:'flex-start',
    },
    label: {
        fontSize: 16,
        color: "#2B264C",
        marginLeft: 10,
        fontFamily: "sans-serif",
    },
    value: {
        fontSize: 18,
        fontWeight: "500",
        color: "#4C4C4C",
        marginTop: 5,
        fontFamily: "sans-serif",
        alignSelf: 'flex-start',
    },
    download: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        left: 0,
        right: 0,
    },
    downloadButton: {
        backgroundColor: "#5E5CE6",
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    downloadButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        fontFamily: "sans-serif",
    },
    dropdown: {
        height: 50,
        borderColor: '#6366FF',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 8,
        alignSelf: 'flex-end',
        margin: 10,
        width: '33%'
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#6366FF',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#6366FF',
    },
    iconStyle: {
        marginRight: 8,
    },
});
