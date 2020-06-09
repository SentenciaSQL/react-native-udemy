import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, YellowBox } from "react-native";
import Form from './src/components/Form';
import colors from './src/utils/colors';

YellowBox.ignoreWarnings(["Picker has been extracted"])

export default function App() {
    const [capital, setCapital] = useState(null);
    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.PRIMARY_COLOR}/>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.background}></View>
                <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
                <Form />
            </SafeAreaView>

            <View>
                <Text>Resultado</Text>
            </View>

            <View>
                <Text>Footer</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
   safeArea: {
       height: 280,
       alignItems: 'center'
   },
   titleApp: {
       fontSize: 25,
       fontWeight: 'bold',
       color: '#fff',
       marginTop: 15
   },
   background: {
       backgroundColor: colors.PRIMARY_COLOR,
       height: 200,
       width: '100%',
       borderBottomLeftRadius: 30,
       borderBottomRightRadius: 30,
       zIndex: -1,
       position: "absolute"
   }


});