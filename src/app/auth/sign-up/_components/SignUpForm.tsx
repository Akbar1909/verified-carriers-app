"use client";
import Button from "@/components/Button";
import { GoogleIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useAppValidations from "@/hooks/helpers/useAppValidations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import { signIn } from "next-auth/react";

type SignUpFormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const { searchParams } = useAppNavigation();
  const router = useRouter();
  const mode = searchParams.get("mode") ?? "user";

  const { getStringValidation, getEmailValidation } = useAppValidations();

  const validationSchema = object().shape({
    name: getStringValidation(),
    email: getEmailValidation(),
    password: getStringValidation(),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isPending } = useAppMutation({
    mutationFn: (data: Record<string, any>) =>
      request.post( mode === 'user' ? "/auth/register":'/auth/company/register', data),
    mutationKey: ["/auth/register"],
    onSuccess: async ({ data }, variables: SignUpFormValuesType) => {
      const res = await signIn("credentials", {
        redirect: false,
        email: variables.email,
        password: variables.password,
        role:mode
      });

      if (res?.ok) {
        router.push(mode === "user" ? "/dashboard/user/complete-profile" : "/dashboard/company/complete-profile");
        return;
      }
    },
  });

  const onSubmit = handleSubmit((values) => {
    mutate({...values, ...(mode === 'company' && {workEmail:values.email})});
  });

  return (
    <form onSubmit={onSubmit} className="w-90">
      <h1 className="text-d-md-semibold text-gray-900 mb-3">Sign up</h1>
      <p className="text-md text-gray-500">
        Find your perfect transporter based on genuine experience{" "}
      </p>

      <div className="mt-8">
       
        <TextField
          label="Name"
          placeholder="Enter your name"
          {...register("name")}
          rootClassName="mb-5"
          helperText={errors.name?.message}
          hasError={Boolean(errors.name?.message)}
        />
        <TextField
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          rootClassName="mb-5"
          helperText={errors.email?.message}
          hasError={Boolean(errors.email?.message)}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          rootClassName="mb-6"
          helperText={errors.password?.message}
          hasError={Boolean(errors.password?.message)}
        />

        <div className="mt-6 flex flex-col gap-4">
          <Button fullWidth size="lg" isPending={isPending}>
            Sign up
          </Button>
          <Button
            startIcon={<GoogleIcon />}
            color="secondary-gray"
            size="lg"
            fullWidth
          >
            Sign in with Google
          </Button>
        </div>

        <div className="mt-8 flex items-center gap-1 justify-center">
          <span className="text-sm text-gray-500">
            Already have an account?
          </span>
          <Link href="/auth/login" className="text-sm-medium text-orange-700">
            Log in
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
