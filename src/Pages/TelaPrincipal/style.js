import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    tela:{
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    scrollView:{
        width:"100%",
        heigth:"100%",
    },
    paginaPrincipal:{
        flex:1,
        alignItems:"center",
        gap:30,
    },
    searchBar:{
        width:"90%",        
        padding:10,
        marginTop:20,
        borderRadius:10,
        borderColor:"#000000",
        borderWidth:2
    },
    cardAlimento:{
        backgroundColor:"blue",
        width:"90%",
        height:200,
        borderRadius:10,
        justifyContent:"flex-end"
    },
    textCardAlimento:{
        color:"#ffffff",
        fontSize:16, 
        textAlign:"center",
        padding:10,
    },
    botaoCamera:{
        position: "absolute",
        bottom:50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#CD021B",
        margin:20,
        height:80,
        width:80,
        borderRadius:50,
    },
    botaoCameraIcon:{
        fontSize:36,
        color:"#ffffff",
    }
});

export default styles
