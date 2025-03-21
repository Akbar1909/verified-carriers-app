import Image from "next/image";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-2 w-auto h-full-screen">
      <div className="flex relative h-full items-center justify-center">
        <Image
          alt="Verified carriers logo"
          width={116}
          height={32}
          src="/images/main-logo.png"
          className="absolute top-8 left-8"
        />
        <SignUpForm />
      </div>
      <div className="relative">
        <Image
          alt=""
          priority
          className="absolute"
          src="/images/login-hero.png"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
