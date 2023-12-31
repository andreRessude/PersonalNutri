import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    telaAlimentoSelecionado:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    titulo:{
        width:"100%",
        padding:5,
        textAlign:"center",
        fontSize:24,
        textTransform:"uppercase",
    },
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        margin:10,
    },
    tituloTabela:{
        width:"90%",
        padding:10,
        fontSize:18,
        backgroundColor:"#CD021B",
        color:"#ffffff",
    },
    tabela: {
        width:"90%",
        borderWidth:1,
    },
    linhaTabela:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
    },
    textTabela:{
        padding:5,
        fontSize:18,
    },
    imagemPrato:{
        width:"100%",
        height:100,
        paddingVertical:100,
    },
    textoContainerBotaoRecomendacao:{
        fontSize:18,
    },
    botaoRecomendacao:{
        flex:1,
        alignItems:"center",
        padding:10,
        margin:10,
        width:"80%",
        backgroundColor:"#CD021B",
        borderRadius:15
    },
    textoBotaoRecomendacao:{
        color:"#ffffff",
        fontSize:20,
        textAlign:"center",
    },
    contentModal:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgba(169,169,169,0.4)"
    },
    containerTextModal:{
        width:"80%",
        height:300,
        backgroundColor:"#ffffff",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        padding:15
    },
    textModal:{
        fontSize:20,
        textAlign:"center",
    },
    closeButtonModal:{
        alignItems:"center",
        padding:10,
        margin:10,
        width:"80%",
        backgroundColor:"#CD021B",
        borderRadius:15,
        borderWidth: 1,
    },
    textCloseButtonModal:{
        color:"#ffffff"
    }

});

export default styles
