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
        margin:30,
        justifyContent:"flex-end"
    },
    textCardAlimento:{
        color:"#ffffff",
        fontSize:16, 
        textAlign:"center",

        padding:10,
    },
    botaoCamera:{
        backgroundColor:"green",
        width:70,
        height:70,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        margin:20
    },
});

export default styles
