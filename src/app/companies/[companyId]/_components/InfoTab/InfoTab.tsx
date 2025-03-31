import GallerySection from "./GallerySection"
import OtherReviews from "./OtherReviews"

const InfoTab = () => {
  return (
    <section>
          <h2 className='text-xl-medium text-gray-900 mb-4'>About company</h2>

          <div className='w-full p-6 bg-white shadow-[0px_1px_2px_0px_rgba(16,16,40,0.06),0px_1px_3px_0px_rgba(16,16,40,0.1)] mb-6 rounded-lg'>
          What is monday Work Management?
Voted one of the top Global Software companies of 2023 on G2, monday.com Work OS is a customizable platform where teams can create and shape the tools they need to run every aspect of their work. 
With easy-to-use building blocks like dashboards, automations, and integrations, teams are empowered to build their ideal workflow in one intuitive workspace. The platform is flexible and adaptable by design, customizable to fit any business needs, and easily scales with your organization as it grows. 
With the industry-specific products - monday work management, monday sales CRM, and monday dev - organizations can easily build solutions tailored to their exact use case and team size.
More than 180,000 customers worldwide use monday.com to run their organizations smarter, execute faster, and collaborate seamlessly across departments. 
Get the 14-day free trial to find out how monday.com can help your team work more efficiently and reach bigger goals.
          </div>

          <GallerySection/>
          <OtherReviews/>
    </section>

  )
}

export default InfoTab