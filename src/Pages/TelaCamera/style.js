import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#000000",
    },
    camera:{  //dimensoes da camera
        width:"100%",
        height:"75%",
    },
    buttonFlip:{  //botao trocar frontal/traseira
        position: "absolute",
        bottom:50,
        left:30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        margin:20,
        height:80,
        width:80,
        borderRadius:50,
    },
    buttonCamera:{  //botao camera
        position: "absolute",
        bottom:50,
        right:30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        margin:20,
        height:80,
        width:80,
        borderRadius:50,
    },
    contentModal:{  
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        margin:20,
    },
    closeButton:{ //botao fechar foto
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        backgroundColor:"#ffffff",
        borderRadius:50,
        width:50,
        height:50,
    },
    imgPhoto:{  //foto
        width:"100%",
        height:"75%",
    },
    confirmarFoto:{
        width:100,
        height:60,
        backgroundColor:"#ffffff",
        borderRadius:50,
    }
});

export default styles
