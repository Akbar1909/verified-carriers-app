import CompanyView from "@/components/CompanyView";
import PersonalInfo from "../PersonalInfo";
import Stats from "../Stats";
import NotificationView from "./NotificationView";

const NotificationTab = () => {
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
            <NotificationView key={i} />
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

export default NotificationTab;
