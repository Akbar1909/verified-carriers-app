"use client";
import Button from "@/components/Button";
import { GoogleIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import Link from "next/link";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { control, register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((values) => console.log(values));

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
        />
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

        <div className="mt-6 flex flex-col gap-4">
          <Button fullWidth size="lg">
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
