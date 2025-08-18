"use client";
import AccordionMenu from "@/components/AccordionMenu";
import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import Show from "@/components/Show";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import PickCategory from "./_components/PickCategory";
import Button from "@/components/Button";
import { ArrowUpIcon2 } from "@/components/SvgIcons";
import PickSubCategory from "./_components/PickSubCategory";
import { FormProvider, useForm } from "react-hook-form";
import AboutCarStep from "./_components/AboutCarStep";
import CarConditionStep from "./_components/CarConditionStep";
import PickUpStep from "./_components/PickUpStep";
import DeliveryStep from "./_components/DeliveryStep";
import TrailerTypeStep from "./_components/TrailerTypeStep";
import PersonalInfoStep from "./_components/PersonalInfoStep";
import DateStep from "./_components/DateStep";
import { jsonParse } from "@/utils/common";
import useTabletOrMobile from "@/hooks/helpers/useTabletOrMobile";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import { request } from "@/services/request";

import CalculatingModal from "./_components/CalculatingModal";
import useAppToggle from "@/hooks/helpers/useAppToggle";
import ResultStep from "./_components/ResultStep";

const GetQuotePage = () => {
  const { isTabletOrMobile } = useTabletOrMobile();
  const { searchParams, createQueryParams, pushToRouter } = useAppNavigation();

  const { open, close, modal } =
    useAppToggle<"calculating-modal">("calculating-modal");

  const step = searchParams.get("step") || "category";
  const category = searchParams.get("category") || "CAR_SHIPPING";
  const subCategory =
    searchParams.get("subCategory") || "ENCLOSED_AUTO_SHIPPING";
  const carCondition = searchParams.get("carCondition") || "CAR_SHIPPING";
  const shipViaId = searchParams.get("shipViaId") || 1;
  const carManufactureYear = searchParams.has("carManufactureYear")
    ? jsonParse(searchParams.get("carManufactureYear"))
    : null;
  const carMake = searchParams.has("carMake")
    ? jsonParse(searchParams.get("carMake"))
    : null;
  const carModel = searchParams.has("carModel")
    ? jsonParse(searchParams.get("carModel"))
    : null;
  const pickup = searchParams.has("pickup")
    ? jsonParse(searchParams.get("pickup"))
    : null;
  const pickupType = searchParams.has("pickupType")
    ? jsonParse(searchParams.get("pickupType"))
    : null;
  const dropOff = searchParams.has("dropOff")
    ? jsonParse(searchParams.get("dropOff"))
    : null;
  const dropOffType = searchParams.has("dropOffType")
    ? jsonParse(searchParams.get("dropOffType"))
    : null;
  const estimatedShipDate = searchParams.get("estimatedShipDate");
  const fullName = searchParams.get("fullName") ?? "";
  const email = searchParams.get("email") ?? "";
  const phone = searchParams.get("phone") ?? "";

  const categoryFormMethods = useForm({
    defaultValues: {
      category,
    },
  });
  const subCategoryFormMethods = useForm({
    defaultValues: {
      subCategory,
    },
  });

  const aboutCarFormMethods = useForm({
    defaultValues: {
      carMake,
      carManufactureYear,
      carModel,
    },
  });
  const carConditionFormMethods = useForm({
    defaultValues: {
      carCondition,
    },
  });
  const pickUpStateFormMethods = useForm({
    defaultValues: {
      pickup,
      pickupType,
    },
  });
  const deliveryFormMethods = useForm({
    defaultValues: {
      dropOff,
      dropOffType,
    },
  });
  const trailerTypeFormMethods = useForm({
    defaultValues: {
      shipViaId,
    },
  });
  const personalInfoFormMethods = useForm({
    defaultValues: {
      fullName,
      phone,
      email,
    },
  });
  const dateFormMethods = useForm({
    defaultValues: {
      estimatedShipDate,
    },
  });

  const { mutate, isPending } = useAppMutation({
    mutationFn: (body) => request.post("/quotes", body),
    onSuccess: ({ data }) => {
      const params = createQueryParams();
      params.set("step", "result");
      params.set("quoteId", data?.id);
      pushToRouter(params, { scroll: false });
    },
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
        return "estimatedShipDate";
      case "estimatedShipDate":
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
        return "estimatedShipDate";
      case "estimatedShipDate":
        return "trailer-type";
      case "category":
        return "category";
      default:
        return "";
    }
  };

  return (
    <MainLayout>
      <div className="p-0 lg:pt-6 bg-orange-50 h-full">
        <Container
          fluid={isTabletOrMobile}
          className="grid grid-cols-1 px-0 bg-white lg:bg-orange-50 lg:px-4 lg:grid-cols-[360px_1fr]  h-full  overflow-hidden"
        >
          <aside className="hidden lg:block bg-gray-25 h-full rounded-tl-lg">
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
                      title: "Estimated ship date",
                      active: step === "estimatedShipDate",
                      onClick: () => changeStep("estimatedShipDate"),
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
          </aside>
          <section className="bg-white relative h-full rounded-tr-lg pt-8 lg:pt-24">
            <div className="px-4 pb-24 lg:pb-0 lg:px-[87.5px]">
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
              <Show when={step === "estimatedShipDate"}>
                <FormProvider {...dateFormMethods}>
                  <DateStep />
                </FormProvider>
              </Show>
              <Show when={step === "personal-info"}>
                <FormProvider {...personalInfoFormMethods}>
                  <PersonalInfoStep />
                </FormProvider>
              </Show>

              <Show when={step === "result"}>
                <ResultStep />
              </Show>
            </div>

            <Show when={step !== "result"}>
              <footer className="w-full fixed lg:absolute bottom-0">
                <div className="p-4 lg:p-6 border-t bg-gray-50 lg:bg-white border-gray-200 flex items-center gap-3">
                  <Button
                    size="md"
                    startIcon={<ArrowUpIcon2 />}
                    color="secondary-gray"
                    className="ml-auto flex-1 lg:flex-none"
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
                      className="flex-1 lg:flex-none"
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
                      className="flex-1 lg:flex-none"
                      onClick={() => {
                        const body = {
                          category,
                          subCategory,
                          carCondition: carCondition === "CAR_SHIPPING" ? 1 : 0,
                          shipViaId: parseInt(shipViaId as string, 10),
                          carManufactureYear: carManufactureYear.value,
                          carMakeId: carMake?.value,
                          carModelId: carModel?.value,
                          pickupId: pickup?.value,
                          pickupType: pickupType?.value,
                          dropoffId: dropOff?.value,
                          dropoffType: dropOffType?.value,
                          vehicleType: "CAR",
                          vehicleRuns: 1,
                          fullName,
                          phone,
                          email,
                          estimatedShipDate,
                        };

                        mutate(body);
                      }}
                      isPending={isPending}
                    >
                      Get an Estimate
                    </Button>
                  </Show>
                </div>
              </footer>
            </Show>
          </section>
        </Container>
      </div>

      <CalculatingModal isOpen={isPending} onClose={close} />
    </MainLayout>
  );
};

export default GetQuotePage;
