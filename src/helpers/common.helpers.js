import {SERVICE_STATUS} from "../constants";

export const getCurrentStatus = (status) => {
  let progressTitle = "Pending Request";
  switch(status){
    case SERVICE_STATUS.PENDING:
      progressTitle = "Pending Request"
      break;
    case SERVICE_STATUS.ACTIVE:
      progressTitle = "Pending Service";
      break;
    case SERVICE_STATUS.PAYMENT:
      progressTitle = "Pending Payment"
      break;
    default:    
      break;
  }
  return progressTitle;
}