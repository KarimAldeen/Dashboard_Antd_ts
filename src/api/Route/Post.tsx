import { useQueryClient, useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import useAxios from "../helper/useAxios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type AxiosResponse = {
    message: string;
    // Add other properties as needed
};

const useUpdateMutation = (
    key: string,
    url: string,
    shouldNavigateBack?: boolean, 
): UseMutationResult<AxiosResponse, unknown, unknown> => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    const [t] = useTranslation();
    const navigate = useNavigate();


    return useMutation<AxiosResponse, unknown, unknown>(
        async (dataToSend) => {
            const { data } = await axios.post(url, dataToSend,{
                headers: {
                  'Content-Type': 'multipart/form-data' // Set the Content-Type header to multipart/form-data
                }
              } );
            return data;
        },
        {
            onSuccess: (data) => {
                toast.success(data.message || t("updated_successfully"));
                queryClient.invalidateQueries([key]);
                if (shouldNavigateBack) { // Check if should navigate back
                    navigate(-1); // Navigate back
                }
            },
            onError: (err: any) => {
                const message = err?.response?.data?.message || t("failed_to_update_data");
                toast.error(message);
            },
        }
    );
};

export const usePostDynamic = (KEY: string, Api: string, shouldNavigateBack?: boolean) => 
    useUpdateMutation(KEY, Api, shouldNavigateBack);
