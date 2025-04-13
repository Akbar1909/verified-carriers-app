import PersonalInfo from "../PersonalInfo";
import Stats from "../Stats";
import TextField from "@/components/TextField";
import { DownloadIcon, SearchIcon } from "@/components/SvgIcons";
import Button from "@/components/Button";
import ExampleTable from "./ExampleTable";


const OrdersTab = () => {
  return (
    <div className="">
      <section className='overflow-auto'>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <h2 className="text-xl-medium text-gray-900">Orders</h2>
          </div>
        </div>

        <div className="flex flex-col gap-6  overflow-auto" >
          <div className="flex items-center w-full">
            <TextField
              className="w-100"
              placeholder="Search for trades"
              startIcon={<SearchIcon />}
              
            />
            <Button
              color="secondary-gray"
              size='lg'
              className="w-60"
              endIcon={<DownloadIcon />}
            >
              Download CSV
            </Button>
          </div>
          <ExampleTable/>
        </div>
      </section>
     
    </div>
  );
};

export default OrdersTab;
