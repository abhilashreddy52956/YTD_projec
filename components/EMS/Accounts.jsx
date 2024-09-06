import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: '2023-2024', value: '1' },
    { label: '2022-2023', value: '2' },
    { label: '2021-2022', value: '3' },
];

export default function Deductions() {
    const [expandedItems, setExpandedItems] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);

    const toggleExpand = (item) => {
        if (expandedItems.includes(item)) {
            setExpandedItems(expandedItems.filter((i) => i !== item));
        } else {
            setExpandedItems([...expandedItems, item]);
        }
    };

    const items = [
        {
            key: 'Bank Details', details: [
                { month: 'Account Number', days: '50100413695030', },
                { month: 'Bank Name', days: 'HDFC', },
                { month: 'IFSC', days: 'HDFC@123', },
                { month: 'Name As Per Bank record', days: 'Jellite Harish Rao', },
                { month: 'Payment Type', days: 'Bank Transfer', },
            ] },
        { key: 'PF Details', details: [
            { month: 'PF Number', days: 'APKKP22515640220010019', },
            { month: 'UAN', days: '101990971748', },
            { month: 'PF Join Date', days: 'HDFC@123', },
            
        ] },
    ];

    return (
        <View style={styles.container}>
            <SafeAreaView />

            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Deductions</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <FlatList style={{top:15}}
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
        // border:'1px solid black',
        // borderBottomColor:'white',
        // borderLeftColor: 'white',
        // borderRightColor: 'white',
        padding: 15,
        backgroundColor: '#FFFFFF',
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
        paddingHorizontal: 8,
        paddingVertical: 15,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    HomeButtonText: {
        color: '#5E5CE6',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        fontFamily: 'sans-serif',
        marginLeft: 8,
    },
});
