import CompanyView from "@/components/CompanyView";
import PersonalInfo from "../PersonalInfo";
import Stats from "../Stats";
import useGetUserSavedCompanies from "@/hooks/endpoints/saved-companies/useGetUserSavedCompanies";

interface SavedTabProps {
  userId: string;
}

const SavedTab = ({ userId }: SavedTabProps) => {
  const { companies, isLoading, inValidateQuery } = useGetUserSavedCompanies({ userId });

  console.log(companies)

  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Saved companies</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {(isLoading ? new Array(6).fill({}) : companies).map((company, i) => (
            <CompanyView
              key={i}
              company={company}
              inValidateQuery={inValidateQuery}
              className="border-0 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] bg-white"
            />
          ))}
        </div>
      </section>
      <section>
        <aside className="flex flex-col gap-6">
          <Stats userId={userId} />
          <PersonalInfo userId={userId} />
        </aside>
      </section>
    </div>
  );
};

export default SavedTab;
