"use client";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Datepicker from "@/components/Datepicker";
import FileUploader from "@/components/FileUploader";
import MainLayout from "@/components/Layout/MainLayout";
import Select from "@/components/Select";
import Show from "@/components/Show";
import StarRating from "@/components/Stars";
import { VerifiedIcon } from "@/components/SvgIcons";
import Textarea from "@/components/Textarea";
import TextField from "@/components/TextField";
import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import useGetUsStates from "@/hooks/endpoints/locations/useGetUsStates";
import useAppMutation from "@/hooks/helpers/useAppMutation";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { request } from "@/services/request";
import { returnArray } from "@/utils/common";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const WriteReviewPage = () => {
  const { params, router } = useAppNavigation();
  const { companyId } = params;
  const { company, companyLogo } = useGetCompanyById(companyId as string);

  const { mutate, isPending } = useAppMutation({
    mutationFn: (body) => request.post("/reviews", body),
    onSuccess: (res) => {
      toast.success("Review has been created successfully");

      router.push(`/companies/${companyId}`);
    },
  });

  const { handleSubmit, setValue, trigger, control, register } = useForm();

  const { usStates, isLoading: usStatesLoading } = useGetUsStates();

  const onSubmit = handleSubmit((values) => {
    const { files, ...rest } = values;
    const body = {
      ...rest,
      fileIds: returnArray(files).map((item) => item.id),
      companyId,
      pickupState: rest.pickupState?.value,
      deliveryState: rest.deliveryState?.value,
      orderId: rest.orderId,
    };

    mutate(body);
  });

  return (
    <MainLayout>
      <section className="bg-orange-25 pt-16 pb-24">
        <Container maxWidth="lg" className="flex flex-col gap-8">
          <article className="flex items-start gap-4">
            <Avatar
              url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
              className="w-18 h-18 rounded-lg"
            />

            <div>
              <h2 className="text-lg-semibold text-gray-900">{company.name}</h2>

              <div className="flex items-center gap-4">
                <StarRating size="16px" rating={Math.round(company.averageRating)} />
                <span className='text-md-medium relative text-gray-500 after:content-[""] after:absolute after:h-5 after:w-[1px] after:bg-gray-300 after:-right-2 after:top-1/2 after:-translate-y-1/2'>
                  {company.averageRating}
                </span>
                <span className="text-md-medium text-gray-500 underline">
                  {company.reviewCount} reviews
                </span>
              </div>

              <Show when={company.isVerified}>
                <div className="flex items-center gap-0.5">
                  <VerifiedIcon />
                  <span className="text-sm-medium text-gray-500">
                    Verified company
                  </span>
                </div>
              </Show>
            </div>

            <Show when={company.isTopRated}>
              <div className="ml-auto px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
              Top Rated
            </div>
            </Show>
          </article>

          <form
            onSubmit={onSubmit}
            className=" bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)]"
          >
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <label className="text-d-xs-semibold text-gray-900" htmlFor="">
                  Rate your experience
                </label>
                <Controller
                  control={control}
                  name="rating"
                  render={({ field }) => (
                    <StarRating
                      interactive
                      size="48px"
                      rating={field.value}
                      {...field}
                    />
                  )}
                />
              </div>
              <hr className="text-gray-200 my-6" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <h2 className="text-d-xs-semibold text-gray-900">
                    Leave a review
                  </h2>
                  <p className="text-sm text-gray-500">
                    By submitting this review, you confirm it’s based on a
                    genuine experience and you haven’t received an incentive to
                    write it.
                  </p>
                </div>
                <TextField
                  {...register("orderId")}
                  placeholder="Enter order ID"
                  label="Order ID"
                />
                <Textarea
                  {...register("reviewText")}
                  label="Review"
                  placeholder="Write"
                />
                <Controller
                  control={control}
                  name="pickupState"
                  render={({ field }) => (
                    <Select
                      options={usStates}
                      label="Pick up State"
                      isLoading={usStatesLoading}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="deliveryState"
                  render={({ field }) => (
                    <Select
                      options={usStates}
                      label="Delivery State"
                      isLoading={usStatesLoading}
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="deliveryDate"
                  render={({ field }) => (
                    <Datepicker
                      textFieldProps={{ label: "Date" }}
                      {...field}
                      selected={field.value}
                    />
                  )}
                />
                <TextField
                  startIcon={"$"}
                  startIconProps={{
                    className: "text-md text-gray-500",
                  }}
                  {...register("transportationPrice")}
                  label="Transportation price"
                  endIcon={"USD"}
                  placeholder="Write"
                />

                <FileUploader
                  name="files"
                  setValue={setValue}
                  trigger={trigger}
                  rootClassName="lg:col-span-2"
                />
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200">
              <Button
                isPending={isPending}
                className="h-13 text-lg-semibold text-white"
                fullWidth
              >
                Submit review
              </Button>
            </div>
          </form>
        </Container>
      </section>
    </MainLayout>
  );
};

export default WriteReviewPage;
