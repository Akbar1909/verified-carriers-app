"use client";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Datepicker from "@/components/Datepicker";
import FileUploader from "@/components/FileUploader";
import MainLayout from "@/components/Layout/MainLayout";
import Select from "@/components/Select";
import StarRating from "@/components/Stars";
import { VerifiedIcon } from "@/components/SvgIcons";
import Textarea from "@/components/Textarea";
import TextField from "@/components/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const WriteReviewPage = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = handleSubmit(() => {});

  return (
    <MainLayout>
      <section className="bg-orange-25 pt-16 pb-24">
        <Container maxWidth="lg" className="flex flex-col gap-8">
          <article className="flex items-start gap-4">
            <Avatar
              url="/images/broadway.png"
              className="w-18 h-18 rounded-lg"
            />

            <div>
              <h2 className="text-lg-semibold text-gray-900">
                Broadway Auto Transport
              </h2>

              <div className="flex items-center gap-4">
                <StarRating size="16px" rating={4} />
                <span className='text-md-medium relative text-gray-500 after:content-[""] after:absolute after:h-5 after:w-[1px] after:bg-gray-300 after:-right-2 after:top-1/2 after:-translate-y-1/2'>
                  4.9
                </span>
                <span className="text-md-medium text-gray-500 underline">
                  165 reviews
                </span>
              </div>

              <div className="flex items-center gap-0.5">
                <VerifiedIcon />
                <span className="text-sm-medium text-gray-500">
                  Verified company
                </span>
              </div>
            </div>

            <div className="ml-auto px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
              Top Rated
            </div>
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
                <StarRating size="48px" rating={4} />
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
                <Textarea
                  {...register("d")}
                  label="Review"
                  placeholder="Write"
                />
                <Controller
                  control={control}
                  name=""
                  render={({ field }) => (
                    <Select options={[]}  label="Pick up State" {...field} />
                  )}
                />
                <Controller
                  control={control}
                  name=""
                  render={({ field }) => (
                    <Select options={[]}  label="Delivery State" {...field} />
                  )}
                />
                <Controller control={control} name='date' render={({field})=><Datepicker/>} />
                 <TextField
                   startIcon={'$'}
                   startIconProps={{
                    className:'text-md text-gray-500'
                   }}
                  {...register("d")}
                  label="Transportation price"
                  endIcon={'USD'}
                  placeholder="Write"
                />

                <FileUploader label="Upload photo reivew" name='files' />
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200">
                 <Button  className='h-13 text-lg-semibold text-white' fullWidth>Submit review</Button> 
            </div>
          </form>
        </Container>
      </section>
    </MainLayout>
  );
};

export default WriteReviewPage;
