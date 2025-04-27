'use client';
import AccordionMenu from "@/components/AccordionMenu";
import Container from "@/components/Container";
import MainLayout from "@/components/Layout/MainLayout";
import Show from "@/components/Show";
import useAppNavigation from "@/hooks/helpers/useAppNavigation";
import PickCategory from "./_components/PickCategory";
import Button from "@/components/Button";
import { ArrowDownIcon, ArrowUpIcon2 } from "@/components/SvgIcons";
import PickSubCategory from "./_components/PickSubCategory";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const GetQuotePage = () => {

  const {searchParams, createQueryParams, pushToRouter} = useAppNavigation()

  const step=searchParams.get('step') || 'category';

  const categoryFormMethods=useForm({
    defaultValues:{
      category:'CAR_SHIPPING'
    }
  });
  const subCategoryFormMethods=useForm({
    defaultValues:{
      category:'CAR_SHIPPING'
    }
  });



  const changeStep=(value:string)=>{
    const params=createQueryParams();
    params.set('step', value);

    pushToRouter(params)

  }

  const getNextStep=()=>{
     switch(step){
       case 'category':
        return 'sub-category';
       default:
        return ''
     }
  }

  return (
    <MainLayout>
      <div className="pt-6 bg-orange-50 h-full">
        <Container className="grid grid-cols-[360px_1fr]  h-full   overflow-hidden">
          <aside className="bg-gray-25 h-full rounded-tl-lg">
            <section className="pt-12 flex flex-col gap-4">
              <header className="flex flex-col gap-2 px-10 py-6">
                <h1 className="text-d-xs-semibold text-gray-900">
                  get an offer price
                </h1>
                <p className="text-gray-500 text-xs-medium">
                  The saved data will be displayed below, you can return to it
                  at any time.
                </p>
              </header>

              <div className="p-6">
                <AccordionMenu
                  menuItems={[
                    {
                      title: "Category",
                      open:step === 'category' || step === 'sub-category',
                      active: step === 'category' || step === 'sub-category',
                      items: [
                        {
                          title: "Category",
                          onClick:()=>changeStep('category'),
                          active: step === 'category'
                        },
                        {
                          title: "Sub category",
                          onClick:()=>changeStep('sub-category'),
                          active: step === 'sub-category'
                        },
                      ],
                    },
                    {
                      title: "Vehicle",
                      items: [
                        {
                          title: "About car",
                        },
                        {
                          title: "Condition",
                        },
                      ],
                    },
                    {
                      title: "Location",
                      items: [
                        {
                          title: "Pick up",
                        },
                        {
                          title: "Delivery",
                        },
                        {
                          title: "Trailer Type",
                        },
                      ],
                    },
                    {
                      title: "Personal info",
                    },
                  ]}
                />
              </div>
            </section>
            <footer></footer>
          </aside>
          <section className="bg-white relative h-full rounded-tr-lg pt-24">
             <div className=" px-[87.5px]">
             <Show when={step === 'category'}>
               <FormProvider {...categoryFormMethods}>
                <PickCategory/>
               </FormProvider>
             </Show>
             <Show when={step === 'sub-category'}>
               <FormProvider {...subCategoryFormMethods}>
                  <PickSubCategory/>
               </FormProvider>
             </Show>
             </div>

             <footer className="p-6 border-t w-full absolute bottom-0 border-gray-200 flex items-center gap-3">
                  <Button size='md' startIcon={<ArrowUpIcon2/>} color='secondary-gray' className="ml-auto">Previous</Button>
                  <Button size='md' onClick={()=>{
                    const params=createQueryParams();

                    params.set('step', getNextStep());

                    pushToRouter(params)

                  }} endIcon={<ArrowUpIcon2 className='rotate-180 [&_path]:stroke-white' />}>Next</Button>
             </footer>
          </section>
        </Container>
      </div>
    </MainLayout>
  );
};

export default GetQuotePage;
