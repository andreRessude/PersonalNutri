import React, { useState, useEffect, useRef} from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native'
import styles from './style'
import { Camera } from 'expo-camera'
import { CameraType } from 'expo-camera/build/Camera.types'
import { FontAwesome } from '@expo/vector-icons'


export default function TelaCamera() {

    const camRef = useRef(null) //botao tirar foto
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [hasPermission, setHasPermission] = useState(null)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect ( () =>{
        (async () =>{
        const { status } = await Camera.requestPermissionsAsync()
        setHasPermission(status === "granted")
        }) ();
    }, [])
    
    if (hasPermission === null){
        return(<View/>)
    }
    if (hasPermission === false){
        return <Text>Acesso negado</Text>
    }

    async function takePicture(){   //funcao asincrona de tirar a foto
        if (camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri)
        setOpen(true)   
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.contentButtons}>
                <TouchableOpacity style={styles.buttonFlip} 
                onPress={() =>{
                    setType(
                        type === Camera.Constants.Type.back 
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    )
                    }}>
                    <FontAwesome name="exchange" size={23} color={"red"}></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
                    <FontAwesome name='camera' size={23} color="#fff"></FontAwesome>
                </TouchableOpacity>
                </View>
            </Camera>
            {capturedPhoto &&(
            <Modal animationType="slide" transparent={true} visible={open}>
                <View style={styles.contentModal}>
                <TouchableOpacity style={styles.closeButton} onPress={() => {setOpen(false)}}> 
                    <FontAwesome name="close" size={50} color="#fff"></FontAwesome>
                </TouchableOpacity>
                <Image style={styles.imgPhoto} source={{uri : capturedPhoto}}/>
                </View>
            </Modal>  
            )}
        </SafeAreaView> 
    )
}
