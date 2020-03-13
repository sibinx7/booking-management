import axios from "axios";
export const ServiceAPI = {
  getServices: async () => {
    const response = await axios.get("/data/services.json");
      if(response.data){
        return response.data;
      }else{
        return {}
      }
    
    
  }
}