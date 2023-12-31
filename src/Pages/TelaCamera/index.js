import React, { useState, useEffect, useRef} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Modal, Image, Share } from 'react-native'
import styles from './style'
import { Camera } from 'expo-camera'
import { FontAwesome } from '@expo/vector-icons'
import { buscarPratos } from '../../Services/api'


export default function TelaCamera({ navigation }) {

    const camRef = useRef(null)    //botao tirar foto
    const [type, setType] = useState(Camera.Constants.Type.back)    //tipo: frontal ou traseira (traseira como padrao)
    const [hasPermission, setHasPermission] = useState(null)    //permissao pra utilizar a camera
    const [capturedPhoto, setCapturedPhoto] = useState(null)    //imagem capturada
    const [open, setOpen] = useState(false)     //tela de mostrar a foto capturada
    const [data, setData] = useState()
    
    //consultar api pratos
    useEffect(() => {
        async function carregarPratos() {
        try {
            const data = await buscarPratos();
            setData(data);
            console.log(data)
        } catch (error) {
            alert(error);
        }
        }
        carregarPratos();
    }, []);

    //
    useEffect ( () =>{
        (async () =>{
        const { status } = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === "granted")
        }) ();
    }, [])
    
    //acesso negado à camera
    if (hasPermission === null){
        return(<View/>)
    }
    if (hasPermission === false){
        return <Text>Acesso negado!</Text>
    }

    //funcao assincrona tirar foto
    const takePicture = async() => {  
        if (camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)      //salvar a foto numa variavel
            setOpen(true)      //abrir tela de mostrar a foto
        }
    }

    //tela
    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}/>

            <TouchableOpacity style={styles.buttonFlip}
                onPress={() =>{
                    setType(
                        type === Camera.Constants.Type.back 
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    )
                }}>
                <FontAwesome name="exchange" style={styles.buttonFlipIcon}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            </TouchableOpacity>

            {capturedPhoto &&(  //quando imagem for capturada
                <Modal animationType="slide" transparent={false} visible={open}>
                    <View style={styles.contentModal}>
                        <Image style={styles.imgPhoto} source={{uri : capturedPhoto}}/>
                        <View style={styles.containerModal}>
                            <TouchableOpacity style={styles.modalButtons} onPress={() => {setOpen(false)}}>
                                <Text style={styles.textModalButtons}>Tirar novamente</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtons} onPress={() => (alert("Jóia!"), setOpen(false))}>
                                <Text style={styles.textModalButtons}>Confirmar foto</Text>
                            </TouchableOpacity>     
                        </View>     
                    </View>     
                </Modal>  
            )}
        </SafeAreaView>
    )
}
