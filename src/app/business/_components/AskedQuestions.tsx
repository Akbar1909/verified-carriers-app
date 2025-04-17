"use client";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import { MinusCircleIcon, PlusCircleIcon } from "@/components/SvgIcons";

const AskedQuestions = () => {
  const collapseItems = [
    {
      title: "Is there a free trial available?",
      content:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      title: "Can I change my plan later?",
      content: "",
    },
    {
      title: "What is your cancellation policy?",
      content: "",
    },
    {
      title: "Can other info be added to an invoice?",
      content: "",
    },
    {
      title: "How does billing work?",
      content: "",
    },
    {
      title: "How do I change my account email?",
      content: "",
    },
  ];

  return (
    <div className="bg-white py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-d-md-semibold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know.</p>
        </div>

        <div className="max-w-192 w-192 m-auto [&>div]:w-full flex items-center flex-col">
          {collapseItems.map(({ title, content }, i) => (
            <Collapse
              
              up={
                <button>
                  <PlusCircleIcon />
                </button>
              }
              down={
                <button>
                  <MinusCircleIcon />
                </button>
              }
              open={i === 0}
              key={i}
              header={title}
            >
              {content}
            </Collapse>
          ))}
        </div>

        <article className='bg-gray-50 py-8 rounded-2xl flex flex-col items-center gap-8'>
             <div className='relative w-34 h-14'>
                 <Avatar  url="/images/avatar-1.png" className="h-14 w-14 absolute left-0 z-5" />
                 <Avatar url="/images/avatar.png" className="h-14 w-14 absolute z-10 left-1/2 -translate-x-1/2" />
                 <Avatar url="/images/avatar-2.png" className="h-14 w-14 absolute z-5 right-0" />
             </div>

             <div className="flex flex-col gap-2 items-center">
                  <h3 className='text-xl-medium text-gray-900'>Still have questions?</h3>
                  <p className="text-lg text-gray-600">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
             </div>
             <Button size='lg'>Get in touch</Button>
        </article>
      </Container>
    </div>
  );
};

export default AskedQuestions;
