import { ExternalLinkIcon } from "@/components/SvgIcons";
import Link from "next/link";
import React from "react";

const Services = () => {
  const links = [
    {
      label: "Car Transport",
      path: "#",
    },
    {
      label: "Open Trailer Auto Shipping",
      path: "#",
    },
    {
      label: "Motorcycle Shipping",
      path: "#",
    },
    {
      label: "Door-to-Door Shipping",
      path: "#",
    },
    {
      label: "Heavy Equipment Shipment",
      path: "#",
    },
    {
      label: "Boat Shipping",
      path: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl-medium text-gray-900">Services</h3>

      <article className="w-full gap-4 flex flex-col bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] p-6">
        {links.map(({ label, path }) => (
          <Link
            className="flex items-center gap-2 text-lg-medium underline"
            href={path}
          >
            {label}
            <ExternalLinkIcon className="[&_path]:stroke-gray-500" />
          </Link>
        ))}
      </article>
    </div>
  );
};

export default Services;
