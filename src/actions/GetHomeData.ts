import axios from "react-native-axios"
export const GetHomeData=async()=>{
 //Promise.resolve(response?.data?.resultObject?.hotelList)
 return await axios.get('https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/949b2393642747d2f54edf0ce659f27a69c87690/hotels.json')
    .then((response:any)=>
    {
     if(response?.data?.resultObject?.hotelList){
      return Promise.resolve(response?.data?.resultObject?.hotelList)
    }else{
      return Promise.reject()
     }
    })
    .catch((error:string)=>{return Promise.reject()})

}
