"use client";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import { ExternalLinkIcon } from "@/components/SvgIcons";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { twMerge } from "tailwind-merge";
import StatCard from "./_components/StatCard";
import TrafficSourceCard from "./_components/TrafficSourceCard";

const CompanyDashboardPage = () => {
  const { searchParams } = useAppNavigation();
  const tab = searchParams.get("tab") ?? "overview";
  const tabs = [
    {
      label: "Overview",
      value: "overview",
    },
    {
      label: "Notifications",
      value: "notifications",
    },
    {
      label: "Edit profile",
      value: "edit-profile",
    },
    {
      label: "Reviews",
      value: "reviews",
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
      label: "Team",
      value: "team",
    },
  ];

  return (
    <MainLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 border-b border-gray-200">
          <Container>
            <header className="bg-white py-2  flex items-center gap-1">
              {tabs.map(({ label, value }, i) => (
                <div
                  key={i}
                  className={twMerge(
                    "text-md-medium rounded-md text-gray-700 px-3 py-2",
                    tab === value && "bg-gray-50"
                  )}
                >
                  {label}
                </div>
              ))}
            </header>
          </Container>
        </div>

        <Container>
          <div className="py-8 flex items-center gap-6 border-b border-gray-200">
            <Avatar className="w-[54px] h-[54px]" url="/images/broadway.png" />

            <div className="flex flex-col gap-1">
              <h1 className="text-d-xs-medium text-gray-900">
                Welcome, Broadway Auto Transport
              </h1>
              <p className="text-md text-gray-500">
                Track reviews, manage your orders, communicate with customers.
              </p>
            </div>

            <div className="ml-auto flex items-center gap-1">
                <Button color='tertiary'>Upgrade profile</Button>
                <Button startIcon={<ExternalLinkIcon/>} color='secondary-gray'>Request review</Button>
            </div>
          </div>
        </Container>

       <div className="mt-8">
         <Container>
             <div className="py-8">
                  <div className='grid grid-cols-3 gap-6'>
                      <StatCard/>
                      <StatCard/>
                      <StatCard/>
                  </div>

                  {/* <div className='grid grid-cols-2 gap-6 mt-8'>
                      <TrafficSourceCard/>
                  </div> */}
             </div>
         </Container>
       </div>
      </div>
    </MainLayout>
  );
};

export default CompanyDashboardPage;
