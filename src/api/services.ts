import { useFetch } from "../utils/reactQuery";
import { ServiceInterface } from "../interfaces/appointments";
import { apiRoutes } from "../constant.routes";

export const useGetServices = () =>
  useFetch<ServiceInterface[]>(apiRoutes.getServices, undefined, {
    suspense: true,
    retry: 0
  });
