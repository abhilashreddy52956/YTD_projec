import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

export default function Days() {
    const [expandedItems, setExpandedItems] = useState([]);
    const [selectedYear, setSelectedYear] = useState('1');


    const toggleExpand = (itemKey) => {
        if (expandedItems.includes(itemKey)) {
            setExpandedItems(expandedItems.filter((key) => key !== itemKey));
        } else {
            setExpandedItems([...expandedItems, itemKey]);
        }
    };

    const data = [
        { label: "2023-2024", value: "1" },
        { label: "2022-2023", value: "2" },
        { label: "2021-2022", value: "3" },
    ];

    const items = [
        {
            key: 'EMP Effective Working Days', details: [
                { month: 'Jan 2024  (In month 30 days)', days: '30 days', },
                { month: 'May 2024  (In month 30 days)', days: '30 days', },
                { month: 'Jun 2024  (In month 31 days)', days: '31 days', },
                { month: 'Jul 2024  (In month 31 days)', days: '31 days', },
                { month: 'Aug 2024  (In month 30 days)', days: '30 days', },
                { month: 'Sep 2024  (In month 30 days)', days: '30 days', },
            ], total: '210'
        },
    ];

    return (
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Days</Text>
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
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={selectedYear}
                onChange={item => {
                    setSelectedYear(item.value);
                }}
                renderRightIcon={() => (
                    <AntDesign name="down" size={24} color="#6366FF" />
                )}
            />

            <View style={styles.card}>
                <ImageBackground source={require('../../assets/images/back.png')} style={styles.backgroundImage}>
                    <Text style={{ fontSize: 16, fontWeight: '400' }}>Your Total EMP Effective Working Days</Text>
                    <Text style={{ fontSize: 20, lineHeight: 24.2, color: '#6366FF', fontWeight: '600' }}>122.00</Text>
                </ImageBackground>
            </View>

            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity onPress={() => toggleExpand(item.key)} style={styles.item}>
                            <Text style={styles.itemText}>{item.key}</Text>
                            <Ionicons
                                name={expandedItems.includes(item.key) ? 'remove-outline' : 'add-outline'}
                                size={24}
                                color="#6366FF"
                            />
                        </TouchableOpacity>
                        {expandedItems.includes(item.key) && (
                            <View style={styles.expandedContent}>
                                {item.details.map((detail, index) => (
                                    <View key={index} style={styles.detailRow}>
                                        <Text style={styles.detailText}>{detail.month}</Text>
                                        <Text style={styles.detailText}>{detail.days}</Text>
                                    </View>
                                ))}
                                <View style={styles.totalRow}>
                                    <Text style={styles.totalText}>Total</Text>
                                    <Text style={styles.totalAmount}>{item.total}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                )}
                keyExtractor={(item) => item.key}
            />

            <View style={styles.Home}>
                <TouchableOpacity style={styles.Homebutton}>
                    <Entypo name="home" size={16} color="#5E5CE6" />
                    <Text style={styles.HomeButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignSelf: 'center'
    },
    iconContainer: {
        padding: 5,
    },
    dropdown: {
        height: 50,
        borderColor: '#6366FF',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        alignSelf: 'flex-end',
        top: 10,
        right: 10,
        borderRadius: 30,
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
    card: {
        fontFamily: "sans-serif",
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        marginBottom: 20,
        top: 30,
    },
    backgroundImage: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        marginVertical: 5,
        borderColor: '#6366FF',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        overflow: 'hidden',
        top: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    itemText: {
        fontSize: 16,
        color: '#000000',
    },
    expandedContent: {
        padding: 15,
        backgroundColor: '#FAFAFF',
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 7,
    },
    detailText: {
        fontSize: 14,
        color: '#000000',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingTop: 5,
    },
    totalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    Home: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
    },
    Homebutton: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        border: '1px solid #5E5CE6',
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    HomeButtonText: {
        color: '#5E5CE6',
        fontSize: 16,
        fontWeight: '400',
        marginRight: 10,
        fontFamily: 'sans-serif',
        marginLeft: 8,
    },
});
