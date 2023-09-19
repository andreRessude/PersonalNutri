import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    telaAlimentoSelecionado:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        margin:10
    },
    titulo:{
        width:"100%",
        padding:15,
        textAlign:"center",
        fontSize:24,
        textTransform:"uppercase",
    },
    imagemPrato:{
        width:"90%",
        height:100,
        borderRadius:25,
        paddingVertical:100,
        margin:10,
    },
    tabelaNutricional: {
        width:"90%",
        margin:10,
        alignItems:"center",
    },
    porcaoTabela:{
        width:"100%",
        textAlign:"center",
        fontSize:20,
        backgroundColor:"#CD021B",
        color:"white",
        padding:6,
        borderWidth:1,
    },
    linhaTabela:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        borderWidth:1,
    },
    textTabelaNutricional:{
        padding:10,
        fontSize:20,
        textAlign:"center",
    },
});

export default styles
