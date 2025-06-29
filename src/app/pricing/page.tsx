import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import Show from "@/components/Show";
import { CheckMarkBadgeIcon, CheckMarkBadgeIcon2 } from "@/components/SvgIcons";
import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$0/Lifetime",
      isCurrentPlan: true,
      limits: {
        numberOfUsers: "20 Pages",
        usersPerPage: "5 Pages",
      },
      features: {
        essentialFeatures: true,
        advancedFeatures: true,
        designDevelopment: false,
        customizableOptions: false,
        secureDataStorage: false,
        emailSupport: false,
        customerSupport24_7: false,
        analyticsReporting: false,
        accountManagement: false,
      },
    },
    {
      name: "Plus",
      price: "$250/year",
      isCurrentPlan: false,
      limits: {
        numberOfUsers: "600 Pages",
        usersPerPage: "50 Pages",
      },
      features: {
        essentialFeatures: true,
        advancedFeatures: true,
        designDevelopment: true,
        customizableOptions: true,
        secureDataStorage: true,
        emailSupport: false,
        customerSupport24_7: false,
        analyticsReporting: false,
        accountManagement: false,
      },
    },
    {
      name: "Premium",
      price: "$50/year",
      isCurrentPlan: false,
      limits: {
        numberOfUsers: "Unlimited",
        usersPerPage: "Unlimited",
      },
      features: {
        essentialFeatures: true,
        advancedFeatures: true,
        designDevelopment: true,
        customizableOptions: true,
        secureDataStorage: true,
        emailSupport: true,
        customerSupport24_7: true,
        analyticsReporting: true,
        accountManagement: true,
      },
    },
  ];

  const limits = [
    {
      label: " Number of Users",
    },
    {
      label: "Users Per Page",
    },
  ];

  const features = [
    {
      label: "Includes essential features to get started",
      name: "essentialFeatures",
    },
    {
      label: "More advanced features for increased productivity",
      name: "advancedFeatures",
    },
    {
      label: "Designing & Development",
      name: "designDevelopment",
    },
    {
      label: "Customizable options to meet your specific needs",
      name: "customizableOptions",
    },
    {
      label: "Secure data storage",
      name: "secureDataStorage",
    },
    {
      label: "Email Support",
      name: "emailSupport",
    },
    {
      label: "24/7 customer support",
      name: "customerSupport24_7",
    },
    {
      label: "Analytics and reporting",
      name: "analyticsReporting",
    },
    {
      label: "Account Management",
      name: "accountManagement",
    },
  ];

  return (
    <MainLayout>
      <div className="py-16 lg:py-24 relative">
        <Container className="flex flex-col gap-y-24">
          <div>
            <h1 className="text-md-semibold text-primary-500 mb-3">Pricing</h1>
            <h2 className="text-d-lg-semibold text-gray-900 mb-4">
              Unlock the full potential
            </h2>
            <p className="text-xl text-gray-500">
              Scale your business performance and trust with Verified Carriers.
            </p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-gray-200 rounded-sm border border-gray-200 bg-[#f9f9f9]">
            <div>
              <div className="flex h-[224px] flex-col gap-3 py-[59px] px-8 border-b border-gray-200">
                <h3 className="text-2xl text-gray-900 font-bold">
                  Compare plans
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-5">
                  Choose your workspace plan according to your needs and
                  opportunities
                </p>
              </div>

              <div className="flex flex-col divide-y divide-gray-200">
                {[...limits, ...features].map((item, i) => (
                  <div key={i} className="h-20 px-8 flex items-center">
                    <p className="font-medium text-lg text-gray-900">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* BASIC PLAN */}
            <div>
              <div className="p-7 flex flex-col items-center border-b border-gray-200">
                <h2 className="text-[40px] text-gray-900 font-bold mb-1.75">
                  Basic
                </h2>
                <p className="text-sm font-medium text-gray-500 leading-5 mb-7">
                  $0/lifetime
                </p>
                <button className="h-13 w-full flex items-center bg-gray-900 justify-center py-4 px-6 rounded-sm text-gray-200 font-bold text-sm leading-5">
                  Choose This Plan
                </button>
              </div>

              <div className="flex flex-col divide-y divide-gray-200">
                <div className="h-20 px-8 flex items-center justify-center">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[0].limits.numberOfUsers}
                  </p>
                </div>
                <div className="h-20 px-8 flex items-center justify-center">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[0].limits.usersPerPage}
                  </p>
                </div>
                {features.map(({ name }, i) => (
                  <div
                    key={i}
                    className="h-20 px-8 flex items-center justify-center"
                  >
                    <Show when={plans[0].features[name]}>
                      <CheckMarkBadgeIcon />
                    </Show>
                    <Show when={!plans[0].features[name]}>
                      <CheckMarkBadgeIcon className="[&_path]:fill-gray-400" />
                    </Show>
                  </div>
                ))}
              </div>
            </div>
            {/* PLUS PLAN */}
            <div>
              <div className="p-7 flex flex-col items-center border-b border-gray-200">
                <h2 className="text-[40px] text-gray-900 font-bold mb-1.75">
                  Plus
                </h2>
                <p className="text-sm font-medium text-gray-500 leading-5 mb-7">
                  $250/year
                </p>
                <button className="h-13 w-full flex items-center bg-gray-900 justify-center py-4 px-6 rounded-sm text-gray-200 font-bold text-sm leading-5">
                  Choose This Plan
                </button>
              </div>
              <div className="flex flex-col divide-y divide-gray-200">
                <div className="h-20 px-8 flex items-center justify-center flex-col gap-1">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[1].limits.numberOfUsers}
                  </p>
                  <p className='text-gray-500 text-sm font-medium leading-5'>Pages Add-ons on Demand</p>
                </div>
                <div className="h-20 px-8 flex items-center justify-center">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[1].limits.usersPerPage}
                  </p>
                </div>
                {features.map(({ name }, i) => (
                  <div
                    key={i}
                    className="h-20 px-8 flex items-center justify-center"
                  >
                    <Show when={plans[1].features[name]}>
                      <CheckMarkBadgeIcon />
                    </Show>
                    <Show when={!plans[1].features[name]}>
                      <CheckMarkBadgeIcon className="[&_path]:fill-gray-400" />
                    </Show>
                  </div>
                ))}
              </div>
            </div>
            {/* Premium */}
            <div>
              <div className="p-7 flex flex-col items-center border-b border-gray-200">
                <h2 className="text-[40px] text-gray-900 font-bold mb-1.75">
                  Premium
                </h2>
                <p className="text-sm font-medium text-gray-500 leading-5 mb-7">
                  $50/year
                </p>
                <button className="h-13 w-full flex items-center bg-gray-900 justify-center py-4 px-6 rounded-sm text-gray-200 font-bold text-sm leading-5">
                  Choose This Plan
                </button>
              </div>
              <div className="flex flex-col divide-y divide-gray-200">
                <div className="h-20 px-8 flex items-center justify-center flex-col gap-1">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[2].limits.numberOfUsers}
                  </p>
                     <p className='text-gray-500 text-sm font-medium leading-5'>Pages Add-ons on Demand</p>
                </div>
                <div className="h-20 px-8 flex items-center justify-center flex-col gap-1">
                  <p className="font-medium text-lg text-gray-900">
                    {plans[2].limits.usersPerPage}
                  </p>

                     <p className='text-gray-500 text-sm font-medium leading-5'>Pages Add-ons on Demand</p>
                </div>
                {features.map(({ name }, i) => (
                  <div
                    key={i}
                    className="h-20 px-8 flex items-center justify-center"
                  >
                    <Show when={plans[2].features[name]}>
                      <CheckMarkBadgeIcon />
                    </Show>
                    <Show when={!plans[2].features[name]}>
                      <CheckMarkBadgeIcon className="[&_path]:fill-gray-400" />
                    </Show>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
