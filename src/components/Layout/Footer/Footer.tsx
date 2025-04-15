import Container from "@/components/Container";
import { LinkedinIcon, MetaIcon, XIcon } from "@/components/SvgIcons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-50 border border-gray-300">
      <Container className="flex flex-col">
        <div className="border-x border-b border-gray-300 py-24 px-16.25 flex justify-between items-center">
          <h2 className="text-d-lg-semibold text-gray-900">
            Find the perfect carrier <br /> Find with us
          </h2>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="rounded-[999px] bg-black text-white text-lg-medium py-3.5 px-7"
            >
              Get a Free Quote
            </button>
            <button
              type="button"
              className="shadow-xs rounded-[999px] border-[0.8px] border-gray-300 py-3.5 px-7 text-lg-medium text-gray-500"
            >
              All Companies
            </button>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="py-12 border-x col-span-2 border-gray-300 px-20">
            <Image
              alt="Verified carriers logo"
              width={116}
              height={32}
              src="/images/main-logo.png"
              className="mb-8"
            />

            <div className="flex items-center gap-6" role='group' aria-label="Social buttons">
               <Link href='#'>
                  <XIcon/>
                </Link>
               <Link href='#'>
                  <LinkedinIcon/>
                </Link>
               <Link href='#'>
                  <MetaIcon/>
                </Link>
            </div>

            <p className="mt-6 mb-4 text-gray-400 text-md" >
            © 2024 Verified Carriers. All rights <br/> reserved.
            </p>

            <div className='text-gray-400 text-md flex items-center gap-8'>
               <span className='relative after:content after:absolute after:h-6 after:w-0.25 after:bg-gray-300 after:-right-4'>Terms & Conditions</span>
               <span>Privacy Policy</span>
            </div>
          </div>

          <div className="py-12 border-r border-gray-300 px-12">
             <h3 className='text-md-semibold text-gray-500 mb-4'>Company</h3>

             <ul className="flex flex-col gap-3 text-md-medium text-gray-400">
                 <li>
                    <Link href='/about'>About us</Link>
                 </li>
                 <li>
                    <Link href='/companies'>Companies</Link>
                 </li>
                 <li>
                    <Link href='#'>Free Estimate</Link>
                 </li>
                 <li>
                    <Link href='#'>Sign up</Link>
                 </li>
             </ul>
          </div>
          <div className="py-12 border-r border-gray-300 px-12">
             <h3 className='text-md-semibold text-gray-500 mb-4'>Services</h3>

             <ul className="flex flex-col gap-3 text-md-medium text-gray-400">
                 <li>
                    <Link href='#'>Car Shipping</Link>
                 </li>
                 <li>
                    <Link href='#'>Motorcycle Shipping</Link>
                 </li>
                 <li>
                    <Link href='#'>Boat Shipping</Link>
                 </li>
                 <li>
                    <Link href='#'>Heavy Equipment</Link>
                 </li>
                 <li>
                    <Link href='#'>Door-to-Door</Link>
                 </li>
                 <li>
                    <Link href='#'>Expedited</Link>
                 </li>
                 <li>
                    <Link href='#'>Enclosed Trailer</Link>
                 </li>
                 <li>
                    <Link href='#'>Open Trailer</Link>
                 </li>
             </ul>
          </div>

          <div className="py-12 border-r border-gray-300 px-12">
             <h3 className='text-md-semibold text-gray-500 mb-4'>Resources</h3>

             <ul className="flex flex-col gap-3 text-md-medium text-gray-400">
                 <li>
                    <Link href='#'>Blog</Link>
                 </li>
                 <li>
                    <Link href='#'>Help Center</Link>
                 </li>
                 <li>
                    <Link href='#'>For Business</Link>
                 </li>
                 <li>
                    <Link href='#'>Pricing</Link>
                 </li>
                 <li>
                    <Link href='#'>Contact us</Link>
                 </li>
                 <li>
                    <Link href='#'>File a complain
                    </Link>
                 </li>
             </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
