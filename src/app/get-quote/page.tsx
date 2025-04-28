"use client";
import AccordionMenu from "@/components/AccordionMenu";
import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import Show from "@/components/Show";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import PickCategory from "./_components/PickCategory";
import Button from "@/components/Button";
import {  ArrowUpIcon2 } from "@/components/SvgIcons";
import PickSubCategory from "./_components/PickSubCategory";
import { FormProvider, useForm } from "react-hook-form";
import AboutCarStep from "./_components/AboutCarStep";
import CarConditionStep from "./_components/CarConditionStep";
import PickUpStep from "./_components/PickUpStep";
import DeliveryStep from "./_components/DeliveryStep";
import TrailerTypeStep from "./_components/TrailerTypeStep";
import PersonalInfoStep from "./_components/PersonalInfoStep";

const GetQuotePage = () => {
  const { searchParams, createQueryParams, pushToRouter } = useAppNavigation();

  const step = searchParams.get("step") || "category";

  const categoryFormMethods = useForm({
    defaultValues: {
      category: "CAR_SHIPPING",
    },
  });
  const subCategoryFormMethods = useForm({
    defaultValues: {
      category: "ENCLOSED_AUTO_SHIPPING",
    },
  });

  const aboutCarFormMethods = useForm({
    defaultValues: {},
  });
  const carConditionFormMethods = useForm({
    defaultValues: {},
  });
  const pickUpStateFormMethods = useForm({
    defaultValues: {},
  });
  const deliveryFormMethods = useForm({
    defaultValues: {},
  });
  const trailerTypeFormMethods = useForm({
    defaultValues: {},
  });
  const personalInfoFormMethods = useForm({
    defaultValues: {},
  });

  const changeStep = (value: string) => {
    const params = createQueryParams();
    params.set("step", value);

    pushToRouter(params);
  };

  const getNextStep = () => {
    switch (step) {
      case "category":
        return "sub-category";
      case "sub-category":
        return "about-car";
      case "about-car":
        return "car-condition";
      case "car-condition":
        return "pick-up-state";
      case "pick-up-state":
        return "delivery";
      case "delivery":
        return "trailer-type";
      case "trailer-type":
        return "personal-info";

      default:
        return "";
    }
  };

  const getPrevStep = () => {
    switch (step) {
      case "sub-category":
        return "category";
      case "about-car":
        return "sub-category";
      case "car-condition":
        return "about-car";
      case "pick-up-state":
        return "car-condition";
      case "delivery":
        return "pick-up-state";
      case "trailer-type":
        return "delivery";
      case "personal-info":
        return "trailer-type";
      case "category":
        return "category";
      default:
        return "";
    }
  };

  return (
    <MainLayout>
      <div className="pt-6 bg-orange-50 h-full">
        <Container className="grid grid-cols-[360px_1fr]  h-full   overflow-hidden">
          <aside className="bg-gray-25 h-full rounded-tl-lg">
            <section className="pt-12 flex flex-col gap-4">
              <header className="flex flex-col gap-2 px-10 py-6">
                <h1 className="text-d-xs-semibold text-gray-900">
                  get an offer price
                </h1>
                <p className="text-gray-500 text-xs-medium">
                  The saved data will be displayed below, you can return to it
                  at any time.
                </p>
              </header>

              <div className="p-6">
                <AccordionMenu
                  menuItems={[
                    {
                      title: "Category",
                      open: step === "category" || step === "sub-category",
                      active: step === "category" || step === "sub-category",
                      items: [
                        {
                          title: "Category",
                          onClick: () => changeStep("category"),
                          active: step === "category",
                        },
                        {
                          title: "Sub category",
                          onClick: () => changeStep("sub-category"),
                          active: step === "sub-category",
                        },
                      ],
                    },
                    {
                      title: "Vehicle",
                      active: step === "about-car" || step === "car-condition",
                      open: step === "about-car" || step === "car-condition",
                      items: [
                        {
                          title: "About car",
                          onClick: () => changeStep("about-car"),
                          active: step === "about-car",
                        },
                        {
                          title: "Condition",
                          onClick: () => changeStep("car-condition"),
                          active: step === "car-condition",
                        },
                      ],
                    },
                    {
                      title: "Location",
                      active:
                        step === "pick-up-state" ||
                        step === "delivery" ||
                        step === "trailer-type",
                      open:
                        step === "pick-up-state" ||
                        step === "delivery" ||
                        step === "trailer-type",
                      items: [
                        {
                          title: "Pick up",
                          onClick: () => changeStep("pick-up-state"),
                          active: step === "pick-up-state",
                        },
                        {
                          title: "Delivery",
                          onClick: () => changeStep("delivery"),
                          active: step === "delivery",
                        },
                        {
                          title: "Trailer Type",
                          onClick: () => changeStep("trailer-type"),
                          active: step === "trailer-type",
                        },
                      ],
                    },
                    {
                      title: "Personal info",
                      active: step === "personal-info",
                      onClick: () => changeStep("personal-info"),
                    },
                  ]}
                />
              </div>
            </section>
            <footer></footer>
          </aside>
          <section className="bg-white relative h-full rounded-tr-lg pt-24">
            <div className=" px-[87.5px]">
              <Show when={step === "category"}>
                <FormProvider {...categoryFormMethods}>
                  <PickCategory />
                </FormProvider>
              </Show>
              <Show when={step === "sub-category"}>
                <FormProvider {...subCategoryFormMethods}>
                  <PickSubCategory />
                </FormProvider>
              </Show>
              <Show when={step === "about-car"}>
                <FormProvider {...aboutCarFormMethods}>
                  <AboutCarStep />
                </FormProvider>
              </Show>
              <Show when={step === "car-condition"}>
                <FormProvider {...carConditionFormMethods}>
                  <CarConditionStep />
                </FormProvider>
              </Show>
              <Show when={step === "pick-up-state"}>
                <FormProvider {...pickUpStateFormMethods}>
                  <PickUpStep />
                </FormProvider>
              </Show>
              <Show when={step === "delivery"}>
                <FormProvider {...deliveryFormMethods}>
                  <DeliveryStep />
                </FormProvider>
              </Show>
              <Show when={step === "trailer-type"}>
                <FormProvider {...trailerTypeFormMethods}>
                  <TrailerTypeStep />
                </FormProvider>
              </Show>
              <Show when={step === "personal-info"}>
                <FormProvider {...personalInfoFormMethods}>
                  <PersonalInfoStep />
                </FormProvider>
              </Show>
            </div>

            <footer className="p-6 border-t w-full absolute bottom-0 border-gray-200 flex items-center gap-3">
              <Button
                size="md"
                startIcon={<ArrowUpIcon2 />}
                color="secondary-gray"
                className="ml-auto"
                onClick={() => {
                  const params = createQueryParams();

                  params.set("step", getPrevStep());

                  pushToRouter(params);
                }}
              >
                Previous
              </Button>
              <Show when={step !== "personal-info"}>
                <Button
                  size="md"
                  onClick={() => {
                    const params = createQueryParams();

                    params.set("step", getNextStep());

                    pushToRouter(params);
                  }}
                  endIcon={
                    <ArrowUpIcon2 className="rotate-180 [&_path]:stroke-white" />
                  }
                >
                  Next
                </Button>
              </Show>
              <Show when={step === "personal-info"}>
                <Button
                  size="md"
                  onClick={() => {
                    const params = createQueryParams();

                    params.set("step", getNextStep());

                    pushToRouter(params);
                  }}
                >
                  Get an Estimate
                </Button>
              </Show>
            </footer>
          </section>
        </Container>
      </div>
    </MainLayout>
  );
};

export default GetQuotePage;
