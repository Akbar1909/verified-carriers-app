"use client";
import MainLayout from "@/components/Layout/MainLayout";

import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import StarRating from "@/components/Stars";
import { ExternalLinkIcon, VerifiedIcon } from "@/components/SvgIcons";
import Button from "@/components/Button";
import Link from "next/link";
import Tab from "@/components/Tab";

import ReviewTab from "./_components/ReviewTab";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import Show from "@/components/Show";
import InfoTab from "./_components/InfoTab";
import ServicesTab from "./_components/ServicesTab";
import useGetCompanyById from "@/hooks/endpoints/companies/useGetCompanyById";
import { returnArray } from "@/utils/common";

const CompanyProfilePage = () => {
  const { params } = useAppNavigation();
  const { searchParams } = useAppNavigation();
  const companyId = params?.companyId as string;

  const tab = searchParams.get("tab") || "reviews";

  const { company } = useGetCompanyById(companyId);

  const companyLogo = returnArray(company.companyLogos).at(0);

  return (
    <MainLayout>
      <div className="pt-16 pb-8 flex items-center justify-center relative">
        <Container maxWidth="xl">
          <article className="flex items-start gap-6">
            <div>
              <Avatar
                url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${companyLogo?.file?.id}`}
                className="w-24 h-24"
              />
            </div>
            <div className="flex gap-4 flex-1">
              <div>
                <Link
                  href={`${params.companyId}/dashboard`}
                  className="text-d-sm-medium text-gray-900"
                >
                  {company.name}
                </Link>

                <div className="flex items-center gap-2 mt-1 mb-2">
                  <span className="text-md-medium text-gray-500">4.9</span>
                  <StarRating rating={4} />
                  <span className="text-sm-medium text-gray-500 underline">
                    165 reviews
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3.5 py-1 text-orange-700 text-sm-medium bg-orange-50 rounded-sm">
                    Top Rated
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
              </div>

              <div className="flex  gap-3 ml-auto">
                <Link href="#">
                  <Button
                    size="md"
                    startIcon={<ExternalLinkIcon />}
                    color="secondary-gray"
                  >
                    {company.website}
                  </Button>
                </Link>
                <Button size="md">Write a review</Button>
              </div>
            </div>
          </article>
        </Container>
      </div>

      <section className="bg-white border border-gray-200">
        <Container maxWidth="xl">
          <Tab
            tabs={[
              {
                label: "Reviews",
                value: "reviews",
              },
              {
                label: "Information",
                value: "info",
              },
              {
                label: "Services",
                value: "services",
              },
              {
                label: "Contacts",
                value: "contacts",
              },
            ]}
          />
        </Container>
      </section>

      <main className="bg-gray-50 pt-8 pb-24">
        <Container maxWidth="xl">
          <Show when={tab === "reviews"}>
            <ReviewTab companyId={companyId} />
          </Show>
          <Show when={tab === "info"}>
            <InfoTab  companyId={companyId}/>
          </Show>
          <Show when={tab === "services"}>
            <ServicesTab />
          </Show>
        </Container>
      </main>
    </MainLayout>
  );
};

export default CompanyProfilePage;
