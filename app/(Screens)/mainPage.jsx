import { View } from 'react-native'
import React from 'react'
import Ytd_statement from '../../components/EMS/Ytd_statement'
import Income from '../../components/EMS/Income'
import Deductions from '../../components/EMS/Deductions'
import Days from '../../components/EMS/Days'
import Netpay from '../../components/EMS/Netpay'
import Pf_Ytd_statement from '../../components/EMS/Pf_Ytd_statement'
import Accounts from '../../components/EMS/Accounts'
import Chat from '../../components/EMS/Chat'
import Asset from '../../components/EMS/Asset'


export default function mainPage() {
  return (
    <View style={{backgroundColor:"#fff",height:"100%",width:"100%"}}>
        {/* <Ytd_statement/> */}
        {/* <Income/> */}
        {/* <Deductions/> */}
        {/* <Days/> */}
        {/* <Netpay/> */}
        {/* <Pf_Ytd_statement/> */}
         {/* <Accounts/>  */}
        {/* <Chat/> */}
        <Asset/>
    </View>
  )
}