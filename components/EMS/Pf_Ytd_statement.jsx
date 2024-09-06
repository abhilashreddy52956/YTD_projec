import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ImageBackground } from "react-native-web";


export default function Pf_Ytd_statement() {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedMonth, setSelectedMonth] = useState(false);

  const employeeDetails = {
    employeeName: "KANDUKURI RAJKUMAR",
    employeeID: "100093",
    date: "17 OCT 2022",
    location: "Hyderabad",
    pfNumber: "APKKP225156400000109",
    uan: "101880971748",
  };

  const years = ["2024-2025", "2023-2024"];
  const months = [ "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"];

  const YearMonthSelection = () => {
    return (
      <View style={styles.yearMonthContainer}>
        <TouchableOpacity style={styles.yearSelector}>
          <Text style={styles.yearText}>{selectedYear}</Text>
          <Ionicons name="chevron-down" size={18} color="#5B67CA" />
        </TouchableOpacity>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {months.map((month, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.monthButton,
              ]}
              onPress={() => setSelectedMonth(month)}
            >
              <Text
                style={[
                  styles.monthText,
                  selectedMonth === month && styles.selectedMonthText,
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
          <Text style={styles.headerText}>PF YTD Statement</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <YearMonthSelection />

      <View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/back.png')}
            style={styles.backgroundImage}
          >
            <View style={{ alignItems: "center", top: 10 }}>
              <Text style={styles.cardText}>Your Total PF YTD Statement </Text>
              <Text style={styles.amountText}>₹22,894.00</Text>
            </View>
            <View style={styles.contributionContainer}>
              <View>
                <Text>Employee Contribution PF</Text>
                <Text>VPF</Text>
                <Text>Employer’s Contribution PF</Text>
                <Text>Pension Fund</Text>
              </View>
              <View>
                <Text>₹11,205.00</Text>
                <Text>₹0</Text>
                <Text>₹2,324.00</Text>
                <Text>₹800.00</Text>
              </View>
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
            Statement Generated as on May 2024
          </Text>
        </View>
      </View>
      <View style={styles.employeecard}>
        <Text style={styles.detailsTitle}>Employee Details</Text>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeName}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.employeeID}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end", fontFamily: "sans-serif" }}>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.date}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#4A4A4A" }}>
              {employeeDetails.location}
            </Text>
          </View>
        </View>
        <View style={{ top: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: "sans-serif", color: "#606060" }}>
              PF Number{" "}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#2B264C" }}>
              {employeeDetails.pfNumber}
            </Text>
          </View>
          <View style={{ top: 5, flexDirection: "row" }}>
            <Text style={{ fontFamily: "sans-serif", color: "#606060" }}>
              UAN{" "}
            </Text>
            <Text style={{ fontFamily: "sans-serif", color: "#2B264C" }}>
              {employeeDetails.uan}
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.cardnew}>
        <View>
          <Text>May 2024</Text>
          <Text>Employee Contribution PF</Text>
          <Text>VPF</Text>
          <Text>Employer’s Contribution PF</Text>
          <Text>Pension Fund</Text>
        </View>
        <View>
          <Text>₹ 26,409.00</Text>
          <Text>₹ 11,205.00</Text>
          <Text>₹ 4,482.00</Text>
          <Text>₹ 1,600.00</Text>
          <Text>₹ 20,409.00</Text>
        </View>

      </View>
      <View style={styles.download}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>
            Download PF YTD statement
          </Text>
          <AntDesign
            name="download"
            size={18}
            color="white"
            style={{ bottom: 2 }}
          />
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
  yearMonthContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F3FF",
    // paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 15,
  },
  yearSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5B67CA",
    borderRadius: 25,
    paddingHorizontal: 1,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor:'white',
  },
  yearText: {
    fontSize: 16,
    color: "#5B67CA",
    marginRight: 1,
  },
  monthButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: "#F4F3FF",
    
  },

  monthText: {
    fontSize: 16,
    color: "black",
  },
  selectedMonthText: {
      color: "#5B67CA",
  },
  backgroundImage: {
    height: 160,
    width: "100%",
    top: 20,
    padding: 5,
    fontFamily: "sans-serif",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19.36,
  },
  amountText: {
    fontSize: 20,
    lineHeight: 24.2,
    color: "#6366FF",
    fontWeight: "600",
  },
  contributionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 20,
    
  },
  noticeContainer: {
    backgroundColor: "#FFFEED",
    color: "#FFCF27",
    fontSize: 14,
    alignSelf: "flex-start",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 10,
    padding: 5,
    flexDirection: "row",
    borderRadius: 50,
  },
  alertIcon: {
    marginRight: 10,
  },
  generatedDate: {
    fontSize: 16,
    color: "#FFA500",
    marginTop: 5,
    fontFamily: "sans-serif",
  },
  employeecard: {
    padding: 15,
    border: "1px solid black",
    borderRightWidth: "0",
    borderLeftWidth: "0",
    height: "18%",
  },
  detailsTitle: {
    fontFamily: "sans-serif",
    fontWeight: "400",
    fontSize: 16,
    color: "##0D0733",
  },
  detailsContainer: {
    marginTop: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    color: "#4A4A4A",
  },

  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
    marginVertical: 10,
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
    fontWeight: "400",
    marginRight: 10,
    fontFamily: "sans-serif",
  },
  cardnew:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius:'10px',
    shadowColor:'#808080',
    shadowRadius:10,
    shadowOpacity:6,
    // height:"160px",
    width:'340px',
    alignSelf:'center',
    top:20,
    padding:15,

  }
});
