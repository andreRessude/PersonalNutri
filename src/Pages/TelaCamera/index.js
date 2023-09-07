import React, { useState, useEffect, useRef} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native'
import styles from './style'
import { Camera } from 'expo-camera'
import { CameraType } from 'expo-camera/build/Camera.types'
import { FontAwesome } from '@expo/vector-icons'


export default function TelaCamera({ navigation }) {

    const camRef = useRef(null)    //botao tirar foto
    const [type, setType] = useState(Camera.Constants.Type.back)    //tipo: frontal ou traseira (traseira como padrao)
    const [hasPermission, setHasPermission] = useState(null)    //permissao pra utilizar a camera
    const [capturedPhoto, setCapturedPhoto] = useState(null)    //imagem capturada
    const [open, setOpen] = useState(false)     //tela de mostrar a foto capturada

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
    async function takePicture(){   
        if (camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri)  //salvar a foto numa variavel
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
                <FontAwesome name="exchange" size={28} color={"#000000"}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
                <FontAwesome name='camera' size={28} color="#000000"/>
            </TouchableOpacity>

            {capturedPhoto &&(  //quando imagem for capturada
                <Modal animationType="slide" transparent={true} visible={open}>
                    <View style={styles.contentModal}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => {setOpen(false)}}>
                            <FontAwesome name="close" size={32} color="black"/>
                        </TouchableOpacity>
                        <Image style={styles.imgPhoto} source={{uri : capturedPhoto}}/>
                        <TouchableOpacity style={styles.confirmarFoto} onPress={() => {navigation.navigate('TelaPrincipal')}}>
                            <Text>Confirmar foto</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>  
            )}
        </SafeAreaView> 
    )
}
