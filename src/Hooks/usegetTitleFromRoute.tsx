import { AppKeyEnum } from "../enums/AppKey";
import { AppRoutes, CrudRoutes } from "../Routes";


export const usegetTitleFromRoute = (path:any) => {
    if (AppRoutes[path]) {
      return `${AppKeyEnum?.PROJECT_NAME} | ${AppRoutes[path]}`;
    }
    else if (CrudRoutes[path]) {
      return `${AppKeyEnum?.PROJECT_NAME} | ${CrudRoutes[path]}`;
    }
    
}