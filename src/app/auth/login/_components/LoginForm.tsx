"use client";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import { GoogleIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { searchParams, router } = useAppNavigation();
  const mode = searchParams.get("mode") ?? "user";

  const { control, register, handleSubmit } = useForm();

  const { mutate, isPending } = useAppMutation({
    mutationFn: (data) =>
      signIn("credentials", {
        redirect: false,
        email: data?.email,
        password: data?.password,
        role: mode,
      }),
    onSuccess: (res) => {
      if (res?.ok) {
        toast.success("Login successfully");

        if (mode === "company") {
          router.replace("/business");
        } else {
          router.replace("/");
        }
      }
    },
  });

  const onSubmit = handleSubmit(mutate);

  return (
    <form onSubmit={onSubmit} className="w-90">
      <h1 className="text-d-xs-semibold text-center lg:text-start lg:text-d-md-semibold text-gray-900 mb-3">Log in</h1>
      <p className="text-center lg:text-start text-md text-gray-500">
        Welcome back! Please enter your details.
      </p>

      <div className="mt-8">
        <TextField
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          rootClassName="mb-5"
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          rootClassName="mb-6"
        />

        <div className="flex justify-between items-center">
          <Controller
            control={control}
            name=""
            render={({ field }) => (
              <div>
                <Checkbox
                  labelProps={{ className: "text-sm" }}
                  label="Remember for 30 days"
                />
              </div>
            )}
          />

          <Link href="#" className="text-sm-medium text-orange-700">
            Forgot password
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Button isPending={isPending} fullWidth size="lg">
            Sign in
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
          <span className="text-sm text-gray-500">Don’t have an account?</span>
          <Link
            href={`/auth/sign-up?mode=${mode}`}
            className="text-sm-medium text-orange-700"
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
