import React, {useState,useEffect} from 'react';
import {Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../../assets/css/Css';
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import { BarCodeScanner } from 'expo-barcode-scanner';
import config from '../../config/config';
import * as Location from 'expo-location';

export default function Edicao({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);
    const [response, setResponse] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }
        })();
    });

    //Leitura do código QR
    async function handleBarCodeScanned({ type, data }){
        setScanned(true);
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode(data);
        await getLocation();
        await searchProduct(data)
    }

    async function searchProduct(codigo)
{
    let response=await fetch(config.urlRoot+'searchProduct',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: codigo
        })
    });
    let json=await response.json();
    setProduct(json.Products[0].name);
}

   //Envia o formulário com os dados para edição
async function sendForm() {
    let response=await fetch(config.urlRoot+'update',{
       method: 'POST',
       headers:{
            Accept: 'application/json',
           'Content-type':'application/json'
       },
        body: JSON.stringify({
            code: code,
            product: product,
            local: localization
        })
    });
    let json=await response.json();
    setResponse(json);
}
    //Nova leitura do QRCode
async function readAgain()
{
    setScanned(false);
    setDisplayQR('flex');
    setDisplayForm('none');
    setCode(null);
    setProduct(null);
    setLocalization(null);
}
    
    //Retorna a posição e endereço do usuário
async function getLocation()
{
    let location = await Location.getCurrentPositionAsync({});
    console.log(location)
}
    return (
        <View>
            <MenuAreaRestrita title='Edição' navigation={navigation} />

            <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
            />

            <View style={css.qr__form(displayForm)}>
                <Text>{response}</Text>

                <View style={css.login__input}>
                    <TextInput
                            placeholder='Nome do Produto:'
                            onChangeText={text=>setProduct(text)}
                        value={product}
                    />
                </View>

                <View style={css.login__input}>
                    <TextInput
                            placeholder='Localização do Produto:'
                            onChangeText={text=>setLocalization(text)}
                        value={localization}
                    />
                </View>

                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text>Atualizar</Text>
                </TouchableOpacity>
                {scanned &&
    <View>
        <Button
                title='Escanear Novamente'
                onPress={()=>readAgain()}
        />
    </View>
}

                
            </View>
        </View>
    );
}