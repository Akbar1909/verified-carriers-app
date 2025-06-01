import Show from "@/components/Show";
import { CloseIcon } from "@/components/SvgIcons";
import useGetServices from "@/hooks/endpoints/services/useGetServices";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { jsonParse, jsonStringify } from "@/utils/common";
import { useMemo } from "react";

interface FilterTagsProps {
  total: number;
}

const FilterTags = ({ total }: FilterTagsProps) => {
  const { searchParams, pushToRouter, router, createQueryParams, pathname } =
    useAppNavigation();

  const { options } = useGetServices({ enabled: false });

  const selectedExperience = searchParams.get("experience");
  const selectedServiceIds = jsonParse(searchParams.get("serviceIds")) || [];

  const hasFilter =
    searchParams.has("experience") ||
    (searchParams.has("serviceIds") && selectedServiceIds.length > 0);

  const tags = useMemo(() => {
    const list: Array<{ label: string; value?: number; property: string }> = [];

    if (selectedExperience) {
      list.push({
        label: `${selectedExperience} & up`,
        value: Number(selectedExperience),
        property: "experience",
      });
    }

    if (selectedServiceIds && selectedServiceIds.length > 0) {
      const services = selectedServiceIds.map((s) =>
        options.find((option) => option?.value === s)
      );

      services.forEach((service: any) => {
        list.push({
          label: service?.label,
          value: service?.value,
          property: "serviceIds",
        });
      });
    }

    return list;
  }, [selectedExperience, selectedServiceIds, options]);

  return (
    <header className="flex px-4 lg:px-0 gap-6 lg:gap-0 flex-col lg:flex-row justify-between items-start lg:items-center pb-4">
      <div className="flex flex-wrap items-center gap-3">
        {tags.map(({ label, property, value }, i) => (
          <div
            className="pl-3 text-sm-medium text-gray-700 pr-2.5 py-1 flex items-center gap-1 rounded-2xl bg-gray-100"
            key={i}
          >
            {label}
            <button
              type="button"
              onClick={() => {
                const params = createQueryParams();

                switch (property) {
                  case "experience":
                    {
                      params.delete(property);
                    }
                    break;
                  case "serviceIds":
                    {
                      const updatedIds = selectedServiceIds.filter(
                        (item) => item !== value
                      );

                      params.set("serviceIds", jsonStringify(updatedIds));
                    }
                    break;
                }

                pushToRouter(params, { scroll: false });
              }}
            >
              <CloseIcon />
            </button>
          </div>
        ))}
        <Show when={hasFilter}>
          <div className="pl-3 text-sm-medium text-rose-700 pr-2.5 py-1 flex items-center gap-1 rounded-2xl bg-rose-50">
            Clear all{" "}
            <button
              type="button"
              onClick={() => {
                router.replace(pathname, { scroll: false });
              }}
            >
              <CloseIcon className="[&_path]:stroke-rose-500" />
            </button>
          </div>
        </Show>
      </div>
      <span className="text-sm-medium text-gray-700">{total} companies</span>
    </header>
  );
};

export default FilterTags;
