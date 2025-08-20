import CompaniesSearchView from "@/components/CompaniesSearchView";
import FloatingPanel from "@/components/FloatingPanel";
import { SearchIcon } from "@/components/SvgIcons";
import TextField from "@/components/TextField";
import useGetCompaniesHeaderSearch from "@/hooks/endpoints/companies/useGetCompaniesHeaderSearch";
import useAppDebounce from "@/hooks/helpers/useAppDebounce";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import { ComponentProps, useState } from "react";

interface SearchFieldProps {
    textFieldProps?: Partial<ComponentProps<typeof TextField>>;
}

const SearchField = ({textFieldProps}:SearchFieldProps) => {
  const { createQueryParams, pushToRouter, searchParams } = useAppNavigation();
  const [search, setSearch] = useState(() => searchParams.get("search") || "");

  const debouncedSearch = useAppDebounce(search);

  const { companies, isLoading, isSuccess } = useGetCompaniesHeaderSearch({
    keyword: debouncedSearch,
  });

  const handleChange = (e) => {
    const { value } = e.target;

    const params = createQueryParams();
    params.set("search", value);
    pushToRouter(params, { scroll: false });
    setSearch(value);
  };

  return (
    <FloatingPanel
      toggler={
        <TextField
          value={search}
          onChange={handleChange}
          placeholder="Company name"
          startIcon={<SearchIcon />}
          rootClassName="flex-1 min-w-[300px] max-w-[492px]"
          {...textFieldProps}
        />
      }
    >
      <CompaniesSearchView
        companies={companies}
        isLoading={isLoading}
        isSuccess={isSuccess}
        search={search}
      />
    </FloatingPanel>
  );
};

export default SearchField;
