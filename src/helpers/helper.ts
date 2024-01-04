

export  const isDiscount=(value:any)=>{
  if(value.indexOf('%')==-1){
    return  false
  }
  else{
    return true
  }
}
export const campaignNameFormat=(item:any)=>{
  const formatter=item?.split('%')
  return formatter[1]
}
