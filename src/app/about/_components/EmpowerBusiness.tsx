import Container from "@/components/Container";
import {
  ArrowRightIcon,
  AwardIcon,
  MessageCircleIcon,
  UserPlusIcon,
} from "@/components/SvgIcons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const EmpowerBusiness = () => {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-2 gap-16 px-8">
          <div className="py-20">
            <h2 className="text-d-lg-semibold text-gray-900 mb-8">
              Empower Your Business
            </h2>

            <div className="flex flex-col pl-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-orange-50 justify-center w-10 h-10 rounded-lg border border-gray-300">
                  <UserPlusIcon className="[&_path]:stroke-orange-700" />
                </div>

                <p className="text-lg text-gray-500">
                  Gain access to a vast network of interested customers.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-orange-50 justify-center w-10 h-10 rounded-lg border border-gray-300">
                  <AwardIcon className="[&_path]:stroke-orange-700" />
                </div>

                <p className="text-lg text-gray-500">
                  Enhance your reputation and reach new heights in a competitive
                  marketplace.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-orange-50 justify-center w-10 h-10 rounded-lg border border-gray-300">
                  <MessageCircleIcon className="[&_path]:stroke-orange-700" />
                </div>

                <p className="text-lg text-gray-500">
                  Gain access to a vast network of interested customers.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="flex items-center gap-3 mt-8 text-lg-medium text-gray-700"
            >
              Learn more <ArrowRightIcon />
            </Link>
          </div>

          <div className="grid grid-rows-7  grid-cols-4 gap-x-4 gap-y-4">
            <div className="row-start-1 row-end-4 rounded-lg overflow-hidden min-w-40 min-h-40  relative col-start-2 col-end-3">
              <Image
                style={{ aspectRatio: "3/4" }}
                src="/images/person1.png"
                alt="person1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="row-start-2 min-w-40 rounded-lg overflow-hidden min-h-40 relative row-end-4 col-start-3 col-end-4">
              <Image
                style={{ aspectRatio: "3/4" }}
                src="/images/person2.png"
                alt="person1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="w-40 rounded-lg overflow-hidden min-h-40 relative row-start-4  row-end-6 col-start-1 col-end-2">
              <Image
                
                src="/images/person3.png"
                alt="person1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="w-40 rounded-lg overflow-hidden min-h-40 relative row-start-4  row-end-7 col-start-2 col-end-3">
              <Image
                
                src="/images/person4.png"
                alt="person1"
                fill
                objectFit="cover"
              />
            </div>
            <div className="w-40 rounded-lg overflow-hidden min-h-40 relative row-start-4  row-end-6 col-start-3 col-end-4">
              <Image
                
                src="/images/person5.png"
                alt="person1"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EmpowerBusiness;
