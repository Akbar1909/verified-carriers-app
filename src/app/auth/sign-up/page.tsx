import Image from "next/image";
import SignUpForm from "./_components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="grid grid-cols-1 pt-12 lg:pt-0  lg:grid-cols-2 w-auto h-screen">
      <div className="flex flex-1 gap-y-8 lg:gap-y-0 flex-col lg:flex-row lg:flex-auto relative h-full items-center lg:justify-center">
        <Image
          alt="Verified carriers logo"
          width={116}
          height={32}
          src="/images/main-logo.png"
          className="lg:absolute lg:top-8 lg:left-8"
        />
        <SignUpForm />
      </div>
      <div className="relative hidden lg:block">
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
