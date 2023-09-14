import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    containerCards:{
        flex:1,
        alignItems:"center",
        gap:30,
        paddingBottom:30,
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
        backgroundColor:"rgba(255,255,255,0.85)",
        borderRadius:10,
    },
})

export default styles