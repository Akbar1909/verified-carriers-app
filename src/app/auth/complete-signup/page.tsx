"use client";
import Image from "next/image";
import Link from "next/link";
import JoinForm from "./_components/JoinForm";
import CompanyInfoForm from "./_components/CompanyInfoForm";
import { useState } from "react";
import useAppConstants from "@/hooks/helpers/useAppConstants";
import Show from "@/components/Show";
import { motion } from "framer-motion";
import { MailIcon } from "@/components/SvgIcons";
import AboutCompanyForm from "./_components/AboutCompanyForm";

const CompleteSignUpPage = () => {
  const [step, setStep] = useState(0);

  const { containerVariants } = useAppConstants();

  const nextStep = (nextStep?: number) => {
    setStep(nextStep ?? step + 1);
  };

  return (
    <div className="flex flex-col h-full-screen">
      <header className="w-full h-24 bg-white">
        <Image
          alt="Verified carriers logo"
          width={116}
          height={32}
          src="/images/main-logo.png"
          className="absolute top-8 left-8"
        />
      </header>

     <div className="flex-1 flex items-center justify-center">
     <Show when={step === 0}>
        <div className="w-105 m-auto">
          <div className="flex flex-col gap-3 mb-8">
            <h1 className="text-center text-d-sm-semibold text-gray-900">
              Join Verified Carriers
            </h1>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm text-gray-500">Already have an account?</p>
              <Link
                href="/auth/login"
                className="text-sm-medium text-orange-700"
              >
                Log in
              </Link>
            </div>
          </div>
          <JoinForm nextStep={nextStep} />
        </div>
      </Show>

      <Show when={step === 1}>
        <motion.div
          key="1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-180 m-auto"
        >
          <div className="flex flex-col gap-3 mb-8">
            <h1 className="text-center text-d-sm-semibold text-gray-900">
            Add Company Information
            </h1>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm text-gray-500">All fields are required unless specified optional.</p>
              
            </div>
          </div>
          <CompanyInfoForm nextStep={nextStep} />
        </motion.div>
      </Show>

      <Show when={step === 2}>
        <motion.div
          key="2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-180 m-auto"
        >
          <div className="flex flex-col gap-3 mb-8">
            <h1 className="text-center text-d-sm-semibold text-gray-900">
            About company
            </h1>
            <div className="flex items-center justify-center gap-1">
              <p className="text-sm text-gray-500">Write your company information.</p>
              
            </div>
          </div>
          <AboutCompanyForm nextStep={nextStep} />
        </motion.div>
      </Show>
     </div>

     <footer className='h-24 px-8 w-full flex items-center justify-between'>
         <span className='text-sm text-gray-500'>© Verified Carriers 2024</span>
         <Link href='#' className="flex items-center gap-2 text-sm text-gray-500">
         <MailIcon width={16} height={16} className='[&_path]:stroke-gray-500' />
         help@verifiedcarriers.com
          </Link>
     </footer>
    </div>
  );
};

export default CompleteSignUpPage;
