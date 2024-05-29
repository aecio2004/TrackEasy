import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTop: {
        justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button__home:{
        marginRight: 40
    },
    buttonImage: {
      width: 150,  
      height: 150,  
      resizeMode: 'contain'
    },
    Image: {
        width: 170,  
        height: 170,  
        resizeMode: 'contain',
        
        
      },
    textPage:{
        backgroundColor:'orange',
        padding: 20
    },
    darkbg:{
        backgroundColor:"#333"
    },
    login__logomarca:{
        marginBottom: 10
    },
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },
    login__logo: {
      width: 200,  
      height: 200,  
      resizeMode: 'contain',
    },
    area__tab:{
        backgroundColor: '#333',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    area__menu:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 10,
        width: '100%',
        backgroundColor:'#111',
        alignItems:'center',
        justifyContent:'center'
    },
    button__home2:{
        textAlign:'left',
        width: '10%',
        padding: 10,
    },
    area__title:{
        width: '80%',
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    button__logout:{
        textAlign:'right'
    },
    
    qr__code:(display='flex')=>({
        width:'100%',
        height:'100%',
        backgroundColor:'#000',
        justifyContent:'center',
        display: display
    }),
    qr__form:(display='none')=>({
      width: '100%',
      display:display
    }),
    rastreio__inputMargin:{
        marginTop: 20,
        marginBottom: 30,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        paddingLeft:20,
        paddingRight: 20
    },


});
export {css};