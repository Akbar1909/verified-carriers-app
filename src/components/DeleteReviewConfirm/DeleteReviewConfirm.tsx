import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TruncatedText from "../TruncatedText";

interface DeleteReviewConfirmProps {
  onClose: () => void;
  review: Record<string, any>;
  handleSuccess: () => void;
  isOpen:boolean;
}

const DeleteReviewConfirm = ({
  onClose,
  review,
  handleSuccess,
  isOpen
}: DeleteReviewConfirmProps) => {
  const { handleSubmit } = useForm();


  const { mutate, isPending } = useAppMutation({
    mutationFn: () => request.delete(`/reviews/${review.id}`),
    onSuccess: () => {
      onClose();
      handleSuccess();
      toast.success("SUCCESS");
    },
  });

  const onSubmit = handleSubmit(mutate);

  return (
    <Modal  onClose={onClose} isOpen={isOpen} title="Delete">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
        <p>
          Are you sure you want to delete the review ?
         
          
        </p>

        <TruncatedText>{review?.reviewText}</TruncatedText>
        <Button isPending={isPending} size="lg" fullWidth>
          Delete
        </Button>
      </form>
    </Modal>
  );
};

export default DeleteReviewConfirm;
