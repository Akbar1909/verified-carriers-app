import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useAppMutation = (options: UseMutationOptions<any, any, any>) =>
  useMutation({
    onError: (err) => {


      toast.error(err?.response?.data?.message);
    },
    ...options,
  });

export default useAppMutation;
