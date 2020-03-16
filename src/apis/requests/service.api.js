import axios from "axios";
export const ServiceAPI = {
  getServices: async ({per_page=5, page=1}) => {
    const response = await axios.get("/data/services.json");
      if(response.data){
        const start = ((page - 1) * per_page); // 0 * 5 => 0, 1 * 5 => 5
        const end = ((page * per_page)) // 1 * 5 => 5, 2* 5 => 10
        // 0-4 and 5-9 , need one less

        const modifiedData = response.data.splice(start, (end - 1));

        return {
          data: modifiedData,
          meta:{
            total: 8,
            per_page: 5,
            page,
            loaded: modifiedData.length   
          }
        };
      }else{
        return {}
      }
    
    
  }
}