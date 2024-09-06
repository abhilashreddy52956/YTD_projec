import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import InputEmoji from 'react-input-emoji'

const messages = [
    { id: '1', text: 'Hii', time: '8:29 AM', sender: 'RK' },
    { id: '2', text: 'Hii', time: '8:30 AM', sender: 'You' },
    { id: '3', text: 'Update on the given task', time: '8:29 AM', sender: 'RK' }
];

const ChatScreen = () => {
    const [text, setText] = useState('')

    function handleOnEnter(text) {
        console.log('enter', text)
    }
    const renderItem = ({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'You' ? styles.sentMessage : styles.receivedMessage]}>
            {item.sender !== 'You' && (
                <Text style={styles.senderInitials}>{item.sender === 'You' ? 'Y' : 'RK'}</Text>
            )}
            <View style={item.sender === 'You' ? styles.sentBubble : styles.receivedBubble}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
            </View>
        </View>
    );

    return (
        
        <View style={styles.container}>
            <SafeAreaView />
            <View style={styles.headerContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Chat</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={25} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.chatArea}
            />

            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.plusButton}>
                    <Feather name="plus-circle" size={24} color="#4f6cff" />
                </TouchableOpacity>
                <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                />
                
                <TouchableOpacity style={styles.s}>
                    <Text style={styles.sendButtonText}><MaterialIcons name="send" size={24} color="#4f6cff" /></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    chatArea: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    sentMessage: {
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
        top:10,
        
    },
    receivedMessage: {
        alignSelf: 'flex-start',
        top: 10,
    },
    senderInitials: {
        backgroundColor: '#f5b942',
        borderRadius: 25,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 10,
        color: '#fff',
        fontWeight: '400',
        top:-10,
    },
    sentBubble: {
        // maxWidth: '100%',
        borderRadius: 15,
        padding: 10,
        marginRight: 10,
        top:15
    },
    receivedBubble: {
        maxWidth: '70%',
        borderRadius: 15,
        top:15
        
    },
    messageText: {
        fontSize: 16,
        backgroundColor: '#e5e5ea',
        padding:10,
        borderRadius: 15,
        borderTopLeftRadius:0
    },
    timeText: {
        fontSize: 12,
        color: '#999',
        textAlign:'left',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#e5e5e5',
    },
    plusButton: {
        padding: 10,
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 25,
        padding: 10,
        marginHorizontal: 10,
    },
    sendButton: {
        backgroundColor: '#4f6cff',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendButtonText: {
        color: '#fff',
    },
});

export default ChatScreen;
