import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    tela:{
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    scrollView:{
        width:"100%",
        heigth:"100%"
    },
    paginaPrincipal:{
        flex:1,
        alignItems:"center",
        gap:30,
        paddingBottom:30,
    },
    searchBar:{
        backgroundColor:"green",
        width:"100%"
    },
    cardAlimentoContainer: {
        width: "90%",
        height: 200,
        position: 'relative',   // Para que a imagem e o conteúdo se sobreponham
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        borderRadius:10,
        resizeMode: 'cover', 
        position: 'absolute',   // Para sobrepor o conteúdo
      },
      cardAlimentoContent: {
        position: 'absolute',   // Para sobrepor a imagem de fundo
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
      },
      cardAlimentoText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        width:"100%",
        padding:10,
        textAlign:"center",
        backgroundColor:"rgba(255,255,255,0.85)"
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
