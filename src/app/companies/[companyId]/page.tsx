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

const CompanyProfilePage = () => {
  const { searchParams } = useAppNavigation();

  const tab = searchParams.get("tab") || "reviews";

  return (
    <MainLayout>
      <div className="pt-16 pb-8 flex items-center justify-center relative">
        <Container maxWidth="xl">
          <article className="flex items-start gap-6">
            <div>
              <Avatar className="w-24 h-24" url="/images/broadway.png" />
            </div>
            <div className="flex gap-4 flex-1">
              <div>
                <h1 className="text-d-sm-medium text-gray-900">
                  Broadway Auto Transport
                </h1>

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
                  <div className="flex items-center gap-0.5">
                    <VerifiedIcon />
                    <span className="text-sm-medium text-gray-500">
                      Verified company
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex  gap-3 ml-auto">
                <Link href="#">
                  <Button
                    size="md"
                    startIcon={<ExternalLinkIcon />}
                    color="secondary-gray"
                  >
                    broadways.com
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
            <ReviewTab />
          </Show>
          <Show when={tab === "info"}>
            <InfoTab />
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
