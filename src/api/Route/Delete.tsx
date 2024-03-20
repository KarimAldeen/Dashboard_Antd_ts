import { useQueryClient, useMutation, UseMutationResult } from "react-query";
import { toast } from "react-toastify";
import useAxios from "../helper/useAxios";
import { useTranslation } from "react-i18next";

type AxiosResponse = {
    message: string;
    // Add other properties as needed
};

const useUpdateMutation = (
    key: string,
    url: string,
): UseMutationResult<AxiosResponse, unknown, unknown> => {
    const axios = useAxios();
    const queryClient = useQueryClient();
    const [t] = useTranslation();

    return useMutation<AxiosResponse, unknown, unknown>(
        async (dataToSend : any) => {
            const { data } = await axios.delete(url+"/"+dataToSend?.id,dataToSend);
            return data;
        },
        {
            onSuccess: (data) => {
                toast.success(data.message || t("updated_successfully"));

                queryClient.invalidateQueries([key]);
            },
            onError: (err: any) => {
                const message = err?.response?.data?.message || t("failed_to_update_data");
                toast.error(message);
            },
        }
    );
};

export const useDeleteDynamic = (KEY: string, Api: string) => useUpdateMutation(KEY, Api);
