"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAppConstants from "@/hooks/helpers/useAppConstants";
import Show from "@/components/Show";
import { motion } from "motion/react";
import { MailIcon } from "@/components/SvgIcons";
import PersonalInfoForm from "@/components/Forms/User/PersonalInfoForm";
import { FormProvider, useForm } from "react-hook-form";
import useGetMe from "@/hooks/endpoints/users/useGetMe";
import PublicInfoForm from "@/components/Forms/User/PublicInfoForm";
import SocialMediaForm from "@/components/Forms/User/SocialMediaForm";
import { object } from "yup";
import useAppValidations from "@/hooks/helpers/useAppValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";
import toast from "react-hot-toast";
import { returnArray } from "@/utils/common";
import {omit} from 'lodash';

const CompleteSignUpPage = () => {
  const [step, setStep] = useState(0);
  const { user, isSuccess } = useGetMe();
  const [values, setValues] = useState({});

  const { containerVariants } = useAppConstants();

  const {
    getStringValidation,
    getUrlValidation,
    getEmailValidation,
    getSelectValidation,
    getFilesValidation,
  } = useAppValidations();


  const {mutate, isPending} = useAppMutation({
    mutationFn:(data)=>request.patch('/users/complete-profile',data),
    onSuccess:()=>{
      toast.success('Success')
    },
    
  })

  const personalValidationSchema = object().shape({
    firstName: getStringValidation(),
    lastName: getStringValidation(),
    email: getEmailValidation(),
    files: getFilesValidation(1, 1),
  });

  const publicValidationSchema = object().shape({
    visibleName: getStringValidation(),
    contactEmail: getEmailValidation(),
    country: getSelectValidation(),
    state: getSelectValidation(),
    bio: getStringValidation(),
    phoneNumber: getStringValidation(),
  });

  const socialValidationSchema = object().shape({
    twitter: getUrlValidation(),
    linkedin: getUrlValidation(),
    facebook: getUrlValidation(),
  });

  const personalInfoProvider = useForm({
    resolver: yupResolver(personalValidationSchema),
  });
  const publicInfoProvider = useForm({
    resolver: yupResolver(publicValidationSchema),
  });
  const socialInfoProvider = useForm({
    resolver: yupResolver(socialValidationSchema),
  });

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    personalInfoProvider.reset({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    });
  }, [isSuccess, user]);

  const nextStep = async (nextStep?: number) => {
  
    if (step === 0) {
      const isValid = await personalInfoProvider.trigger();

      if (!isValid) {
        return;
      }


      setValues((prev) => ({ ...prev, ...personalInfoProvider.getValues() }));
    }

    if (step === 1) {
      const isValid = await publicInfoProvider.trigger();

      if (!isValid) {
        return;
      }

      setValues((prev) => ({ ...prev, ...publicInfoProvider.getValues() }));
    }

    if (step === 2) {
      const isValid = await socialInfoProvider.trigger();

      if (!isValid) {
        return;
      }

      const body = {
        ...omit(values,'files'),
        ...socialInfoProvider.getValues(),
        state:values?.state?.value,
        country:values?.country?.value,
        fileId:returnArray(values?.files)?.[0]?.id
      };




      mutate(body)

      return;
    }

    setStep(nextStep ?? step + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full h-24 bg-white">
       <Link href='/'>
       <Image
          alt="Verified carriers logo"
          width={116}
          height={32}
          src="/images/main-logo.png"
          className="absolute top-8 left-8"
        />
         </Link>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <Show when={step === 0}>
          <div className="w-180 m-auto">
            <div className="flex flex-col gap-3 mb-8">
              <h1 className="text-center text-d-sm-semibold text-gray-900">
                Personal info
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Update your photo and personal details here.
                </p>
              </div>
            </div>
            <FormProvider {...personalInfoProvider}>
              <PersonalInfoForm nextStep={nextStep} />
            </FormProvider>
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
                Public info
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Update your public information.
                </p>
              </div>
            </div>
            <FormProvider {...publicInfoProvider}>
              <PublicInfoForm nextStep={nextStep} />
            </FormProvider>
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
                Social Media
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Add your social media links.
                </p>
              </div>
            </div>
            <FormProvider {...socialInfoProvider}>
              <SocialMediaForm isPending={isPending} nextStep={nextStep} />
            </FormProvider>
          </motion.div>
        </Show>
      </div>

      <footer className="h-24 px-8 w-full flex items-center justify-between">
        <span className="text-sm text-gray-500">© Verified Carriers 2024</span>
        <Link
          href="#"
          className="flex items-center gap-2 text-sm text-gray-500"
        >
          <MailIcon
            width={16}
            height={16}
            className="[&_path]:stroke-gray-500"
          />
          help@verifiedcarriers.com
        </Link>
      </footer>
    </div>
  );
};

export default CompleteSignUpPage;
