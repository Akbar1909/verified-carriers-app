import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface CompanyVerifyModalProps {
  onClose: () => void;
  row: Record<string, any>;
  handleSuccess: () => void;
}

const CompanyVerifyModal = ({
  onClose,
  row,
  handleSuccess,
}: CompanyVerifyModalProps) => {
  const { handleSubmit } = useForm();

  const { mutate, isPending } = useAppMutation({
    mutationFn: () => request.post(`/companies/verify/${row.id}`),
    onSuccess: () => {
      onClose();
      handleSuccess();
      toast.success("SUCCESS");
    },
  });

  const onSubmit = handleSubmit(mutate);

  return (
    <Modal onClose={onClose} isOpen title="Verify">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
        <p>
          Are you sure you want to verify <b>{row.name}</b>?
        </p>
        <Button isPending={isPending} size="lg" fullWidth>
          Verify
        </Button>
      </form>
    </Modal>
  );
};

export default CompanyVerifyModal;
