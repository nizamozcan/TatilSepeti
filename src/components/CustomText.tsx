import { Text, TextStyle, View } from "react-native";

export const CustomText=({text,maxLength,type,textStil}:{text:any,maxLength:number,type:"price"|"discountPrice",textStil:TextStyle})=>{
  const truncatedText = text.toString().length > maxLength ? text.toString().substring(0, maxLength)  : text;
  const formatter=truncatedText.toString().split('.')

  switch (type){
    case "price":
      return (
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16,...textStil,flex:1,textAlign:'right'}}>₺ {formatter[0]}</Text>
          <Text style={{alignSelf:'flex-end',fontSize:14,...textStil}}>{formatter[1]!=undefined?formatter[1].length==1?','+formatter[1]+'0':'.'+formatter[1]:",00"}</Text>
        </View>
      );
      break;
    case "discountPrice":
      return (
        <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:8}}>
          <Text style={{fontSize:20,...textStil}}>₺ {formatter[0]}</Text>
          <Text style={{alignSelf:'flex-end',fontSize:16,...textStil}}>{formatter[1]==undefined?',00':formatter[1]==""?",00":formatter[1]?.length==1?",0"+formatter[1]:formatter[1]}</Text>
        </View>
      );
    default:
      return (
        <View style={{flexDirection:'row'}}>

        </View>
      );
  }

}
