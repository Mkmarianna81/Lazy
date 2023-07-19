import axios from "axios";

export const getData=async ({queryKey})=>{
    const response = await axios.get(queryKey[1])
    //console.log('utils:',response.data)
    //console.log(queryKey[2])
    if(queryKey.length == 3){
        //console.log(response.data.products)
        return response.data.products.filter(obj=>obj.id == queryKey[2])
    }
    else
    
    return response.data
}