"use client";
import Image from "next/image";
import Link from "next/link";
import JoinForm from "./_components/JoinForm";
import CompanyInfoForm from "./_components/CompanyInfoForm";
import { useState } from "react";
import useAppConstants from "@/hooks/helpers/useAppConstants";
import Show from "@/components/Show";
import { motion } from "motion/react";
import { MailIcon } from "@/components/SvgIcons";
import AboutCompanyForm from "./_components/AboutCompanyForm";
import ServiceForm from "./_components/ServiceForm";
import ContactForm from "./_components/ContactForm";
import { FormProvider, useForm } from "react-hook-form";
import { array, object } from "yup";
import useAppValidations from "@/hooks/helpers/useAppValidations";
import { yupResolver } from "@hookform/resolvers/yup";

const CompleteSignUpPage = () => {
  const [step, setStep] = useState(0);

  const { containerVariants } = useAppConstants();
  const {
    getStringValidation,
    getEmailValidation,
    getSelectValidation,
    getFilesValidation,
  } = useAppValidations();

  const generalValidationSchema = object().shape({
    firstName: getStringValidation(),
    lastName: getStringValidation(),
    workEmail: getEmailValidation(),
  });

  const infoValidationSchema = object().shape({
    name: getStringValidation(),
    website: getStringValidation(),
    salesEmail: getEmailValidation(),
    contactPhone: getStringValidation(),
    mcNumber: getStringValidation(),
    usdotNumber: getStringValidation(),
    foundingYear: getSelectValidation(),
    totalEmployees: getSelectValidation(),
    companyLogos: getFilesValidation(1, 1),
  });

  const servicesValidationSchema = object().shape({
    services: array().of(
      object().shape({
        serviceName: getSelectValidation(),
        description: getStringValidation(),
      })
    ),
  });

  const aboutValidationSchema = object().shape({
    aboutCompany: getStringValidation(),
  });

  const contactValidationSchema=object().shape({
    contactInformation:array().of(
      object().shape({
        phone:getStringValidation(),
        email:getEmailValidation(),
        address:getStringValidation()
      })
    )
  })

  const generalMethods = useForm({
    // resolver: yupResolver(generalValidationSchema),
  });

  const infoMethods = useForm({
    // resolver:yupResolver(infoValidationSchema)
  });

  const aboutMethods = useForm({
    // resolver:yupResolver(aboutValidationSchema)
  });

  const servicesMethods = useForm({
    defaultValues: {
      services: [{}],
    },
    // resolver:yupResolver(servicesValidationSchema)
  });

  const contactMethods=useForm({
    defaultValues:{
      contactInformation:[{}]
    },
    resolver:yupResolver(contactValidationSchema)
  })

  const nextStep = async (nextStep?: number) => {
    if (step === 0) {
      const isValid = await generalMethods.trigger();

      if (!isValid) {
        return;
      }
    }
    if (step === 1) {
      const isValid = await infoMethods.trigger();

      if (!isValid) {
        return;
      }
    }
    if (step === 2) {
      const isValid = await aboutMethods.trigger();

      if (!isValid) {
        return;
      }
    }
    if (step === 3) {
      const isValid = await servicesMethods.trigger();

      if (!isValid) {
        return;
      }
    }
    if (step === 4) {
      const isValid = await contactMethods.trigger();

      if (!isValid) {
        return;
      }
    }

    setStep(nextStep ?? step + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
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
                <p className="text-sm text-gray-500">
                  Already have an account?
                </p>
                <Link
                  href="/auth/login"
                  className="text-sm-medium text-orange-700"
                >
                  Log in
                </Link>
              </div>
            </div>
            <FormProvider {...generalMethods}>
              <JoinForm nextStep={nextStep} />
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
                Add Company Information
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  All fields are required unless specified optional.
                </p>
              </div>
            </div>
            <FormProvider {...infoMethods}>
              <CompanyInfoForm nextStep={nextStep} />
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
                About company
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Write your company information.
                </p>
              </div>
            </div>
            <FormProvider {...aboutMethods}>
              <AboutCompanyForm nextStep={nextStep} />
            </FormProvider>
          </motion.div>
        </Show>

        <Show when={step === 3}>
          <motion.div
            key="3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-180 m-auto"
          >
            <div className="flex flex-col gap-3 mb-8">
              <h1 className="text-center text-d-sm-semibold text-gray-900">
                Add services
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Add services your company provide.
                </p>
              </div>
            </div>
            <FormProvider {...servicesMethods}>
              <ServiceForm nextStep={nextStep} />
            </FormProvider>
          </motion.div>
        </Show>

        <Show when={step === 4}>
          <motion.div
            key={step}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-180 m-auto"
          >
            <div className="flex flex-col gap-3 mb-8">
              <h1 className="text-center text-d-sm-semibold text-gray-900">
                Contact information
              </h1>
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-500">
                  Include your contact information for customers.
                </p>
              </div>
            </div>
            <FormProvider {...contactMethods}>
               <ContactForm nextStep={nextStep} />
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
