import Image from "next/image";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex relative h-full items-center justify-center">
        <Image
          alt="Verified carriers logo"
          width={116}
          height={32}
          src="/images/main-logo.png"
          className="absolute top-8 left-8"
        />
        <LoginForm />
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

export default LoginPage;
