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
    buttonIcons:{
        fontSize:28,
        color:"#000000",
    },
    contentModal:{  
        flex:1,
        width:"100%",
        heigth:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000000",
        paddingTop:20,
    },
    imgPhoto:{  //foto
        width:"100%",
        height:"75%",
    },
    containerModal:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    modalButtons:{
        alignItems:"center",
        justifyContent:"center",
        width:160,
        height:60,
        backgroundColor:"#ffffff",
        borderRadius:50,
        margin:10,
    },
    textModalButtons:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold",
        textTransform:"uppercase",
        color:"#000000",
    },
});

export default styles
