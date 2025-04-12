import CompanyView from "@/components/CompanyView";
import PersonalInfo from "../PersonalInfo";
import Stats from "../Stats";

const SavedTab = () => {
  return (
    <div className="grid grid-cols-[1fr_352px] gap-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Saved companies</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {new Array(5).fill({}).map((_, i) => (
            <CompanyView
              key={i}
              saved
              className="border-0 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] bg-white"
            />
          ))}
        </div>
      </section>
      <section>
        <aside className="flex flex-col gap-6">
          <Stats />
          <PersonalInfo />
        </aside>
      </section>
    </div>
  );
};

export default SavedTab;
