import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
    
    listaCards:{
        flex:1,
        alignItems:"center",
        marginVertical:30
    },
    cardContainer: {
        width: "90%",
        height: 200,
        position: 'relative',   // Para que a imagem e o conteúdo se sobreponham
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius:10,
        resizeMode: 'cover', 
        position: 'absolute',   // Para sobrepor o conteúdo
    },
    cardContent: {
        position: 'absolute',   // Para sobrepor a imagem de fundo
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    cardText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        width:"100%",
        padding:10,
        textAlign:"center",
        backgroundColor:"rgba(255,255,255,0.75)",
        borderRadius:10,
    },
})

export default styles
