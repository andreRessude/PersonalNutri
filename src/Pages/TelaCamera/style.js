import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      camera:{  //dimensoes da camera
        width:"100%",
        height:"100%",
      },
      contentButtons:{
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
      },
      buttonFlip:{  //botao trocar frontal/traseira
        position: "absolute",
        bottom:50,
        left:30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        margin:20,
        height:50,
        width:50,
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
        height:50,
        width:50,
        borderRadius:50,
      },
      contentModal:{  
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end",
        margin:20,
      },
      closeButton:{ //botao fechar foto
        position:"absolute",
        top:10,
        left:2,
        margin:10,
      },
      imgPhoto:{  //foto
        width:"100%",
        height:600,
      }
});

export default styles
