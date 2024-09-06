import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Income() {
  const [expandedItems, setExpandedItems] = useState([]);
  const [selectedYear, setSelectedYear] = useState('1');

  const toggleExpand = (item) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item));
    } else {
      setExpandedItems([...expandedItems, item]);
    }
  };

  const data = [
    { label: '2024-2025', value: '1' },
    { label: '2023-2024', value: '2' },
    { label: '2022-2023', value: '3' },
  ];

  const items = [
    {
      key: 'Basic', details: [
        { month: 'Jan 2024', amount: '₹11,205.00' },
        { month: 'Apr 2024', amount: '₹11,205.00' },
        { month: 'May 2024', amount: '₹11,205.00' },
        { month: 'Jun 2024', amount: '₹11,205.00' },
        { month: 'Jul 2024', amount: '₹11,205.00' },
        { month: 'Aug 2024', amount: '₹11,205.00' },
        { month: 'Sep 2024', amount: '₹11,205.00' },
      ], total: '₹78,414'
    },
    { key: 'HRA', details: [], total: '₹0' },
    { key: 'Conveyance', details: [], total: '₹0' },
    { key: 'Additional', details: [], total: '₹0' },
    { key: 'Bonus', details: [], total: '₹0' },
    { key: 'Arrears', details: [], total: '₹0' },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Income</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.yearSelectionContainer}>
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
      </View>

      <View style={styles.card}>
        <ImageBackground source={require('../../assets/images/back.png')} style={styles.backgroundImage}>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>You Earned income Subtotal</Text>
          <Text style={{ fontSize: 20, lineHeight: 24.2, color: '#6366FF', fontWeight: '600',top:5 }}>₹ 2,34,854.00</Text>
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
                    <Text style={styles.detailText}>{detail.amount}</Text>
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
  yearSelectionContainer: {
    position: 'relative',
    zIndex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
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
    width: '35%'
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
    top: 10,
  },
  backgroundImage: {
    height: 120,
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
