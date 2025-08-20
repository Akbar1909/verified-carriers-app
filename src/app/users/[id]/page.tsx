"use client";
import MainLayout from "@/components/Layout/MainLayout";

import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import { LinkIcon } from "@/components/SvgIcons";
import Button from "@/components/Button";
import Link from "next/link";
import Tab from "@/components/Tab";

import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import Show from "@/components/Show";
import ReviewTab from "./_components/ReviewTab";
import SavedTab from "./_components/SavedTab";
import NotificationTab from "./_components/NotificationTab";
import OrdersTab from "./_components/OrdersTab";
import useGetUserOne from "@/hooks/endpoints/users/useGetUserOne";
import { joinStrings } from "@/utils/common";
import useGetUserStatsById from "@/hooks/endpoints/users/useGetUserStatsById";

const UserProfilePage = () => {
  const { searchParams, params } = useAppNavigation();

  const { id } = params;

  const { data } = useGetUserOne({ id });

  useGetUserStatsById({
    id
  })

 

  const tab = searchParams.get("tab") || "reviews";

  return (
    <MainLayout>
      <div className="pt-16 pb-8 flex items-center justify-center relative">
        <Container maxWidth="xl">
          <article className="flex items-center gap-6">
            <div>
              <Avatar
                url={`${process?.env?.NEXT_PUBLIC_API_URL}/files/download/${data?.image?.id}`}
                className="w-24 h-24"
              />
            </div>
            <div className="flex items-center gap-4 flex-1">
              <div>
                <h1 className="text-d-sm-medium text-gray-900">
                  {joinStrings([data?.firstName, data?.lastName])}
                </h1>

                <span className="text-md text-gray-500">{data?.email}</span>
              </div>

              <div className="flex  gap-3 ml-auto">
                <Link href="#">
                  <Button
                    size="md"
                    startIcon={<LinkIcon />}
                    color="secondary-gray"
                  >
                    Share
                  </Button>
                </Link>
                <Link href='/companies'>
                   <Button size="md">Find a company</Button>
                 </Link>
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
                label: "Saved",
                value: "saved",
              },
              {
                label: "Notifications",
                value: "notifications",
              },
              {
                label: "Orders",
                value: "orders",
              },
              {
                label: "Billing",
                value: "billing",
              },
              {
                label: "Settings",
                value: "settings",
              },
            ]}
          />
        </Container>
      </section>

      <main className="bg-gray-50 pt-8 pb-24">
        <Container maxWidth="xl">
          <Show when={tab === "reviews"}>
            <ReviewTab userId={id as string} />
          </Show>
          <Show when={tab === "saved"}>
            <SavedTab userId={id as string} />
          </Show>
          <Show when={tab === "notifications"}>
            <NotificationTab />
          </Show>
          <Show when={tab === "orders"}>
            <OrdersTab />
          </Show>
        </Container>
      </main>
    </MainLayout>
  );
};

export default UserProfilePage;
