import Button from "@/components/Button";
import Modal from "@/components/Modal";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { signOut } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface LogoutModalProps {
  onClose: () => void;
  handleSuccess: () => void;
  isOpen: boolean;
}

const LogoutModal = ({
  onClose,
  handleSuccess,
  isOpen,
}: LogoutModalProps) => {
  const { handleSubmit } = useForm();

  const { mutate, isPending } = useAppMutation({
    mutationFn: () => signOut({ redirect: true, callbackUrl: "/" }),
    onSuccess: () => {
      onClose();
      handleSuccess();
      toast.success("SUCCESS");
    },
  });

  const onSubmit = handleSubmit(mutate);

  return (
    <Modal onClose={onClose} isOpen={isOpen} title="Sign out">
      <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
        <p>Are you sure you want to signout ?</p>

        <Button isPending={isPending} size="lg" fullWidth>
          Sign out
        </Button>
      </form>
    </Modal>
  );
};

export default LogoutModal;
