import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dropdown } from 'react-native-element-dropdown';

const assetsData = [
    {
        title: 'Welcome kit',
        issueDate: '25/7/23',
        items: [
            { name: 'Laptop Bag', image: require('../../assets/images/laptop-bag.png'), issued: true },
            { name: 'Dairy', image: require('../../assets/images/dairy.png'), issued: true },
            { name: 'Hoodie', image: require('../../assets/images/hoodie.png'), issued: false },
            { name: 'Photo frame', image: require('../../assets/images/photo-frame.png'), issued: true },
            { name: 'Water bottle', image: require('../../assets/images/water-bottle.png'), issued: true },
        ],
    },
    {
        title: 'New Items',
        issueDate: '16/8/24',
        items: [
            { name: 'Hoodie', image: require('../../assets/images/hoodie.png'), issued: true },
        ],
    },
];

export default function AssetsScreen() {
    const [expandedItems, setExpandedItems] = useState([]); 
    const [selectedAsset, setSelectedAsset] = useState(null);

    const toggleExpand = (sectionTitle) => {
        if (expandedItems.includes(sectionTitle)) {
            setExpandedItems(expandedItems.filter((title) => title !== sectionTitle));
        } else {
            setExpandedItems([...expandedItems, sectionTitle]);
        }
    };

    const renderAssetItem = ({ item }) => {
        const isExpanded = expandedItems.includes(item.title); 
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={() => toggleExpand(item.title)}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <Text style={styles.itemText}>Issue date: {item.issueDate}</Text>
                        
                    </View>
                </TouchableOpacity>

                {isExpanded && (
                    <View style={styles.expandedContent}>
                        {item.items.map((subItem, index) => (
                            <View key={index} style={styles.detailRow}>
                                <Image source={subItem.image} style={styles.itemImage} />
                                <Text style={styles.detailText}>{subItem.name}</Text>
                                <Text style={styles.detailText}>
                                    {subItem.issued ? 'yes' : '-'}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <SafeAreaView />

            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Asset</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <Dropdown
                style={styles.dropdown}
                data={[
                    { label: 'New Asset', value: 'new' },
                    { label: 'Old Asset', value: 'old' },
                ]}
                labelField="label"
                valueField="value"
                placeholder="IT Assets"
                value={selectedAsset}
                onChange={(item) => setSelectedAsset(item.value)}
            />

            <FlatList
                data={assetsData}
                keyExtractor={(item) => item.title} 
                renderItem={renderAssetItem}
                contentContainerStyle={{ paddingBottom: 80 }}
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
        margin: 15,
        borderWidth: 1,
        borderColor: '#6366FF',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
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
        borderColor: '#6366FF',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        color: '#000000',
    },
    expandedContent: {
        padding: 15,
        backgroundColor: '#FFFFFF',
        
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 7,
        borderColor: '#6366FF',
        borderWidth: 1,
        borderRadius: 5,
    },
    itemImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    detailText: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 10,
        flex: 1,
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
        borderWidth: 1,
        borderColor: '#5E5CE6',
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
