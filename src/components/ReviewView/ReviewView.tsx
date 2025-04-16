'use client'
import Avatar from "../Avatar/Avatar";
import Stars from "../Stars";
import TruncatedText from "../TruncatedText";
import Link from "next/link";

const ReviewView = () => {
  return (
    <article className="border border-gray-200 bg-white min-w-70 w-fit rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.06),0px_1px_3px_rgba(16,24,40,0.1)]">
      <header className="p-4 flex flex-col gap-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link href='/users/2'>
            <Avatar
              size="sm"
              url="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
            />
          </Link>
          <Stars rating={3} />
        </div>

        <div className="py-1">
          <span className="text-xs-semibold text-gray-600">
            Lauren Vosburgh 
          </span>{" "}
          <span className="text-xs-medium text-gray-500">about </span>{" "}
          <span className="text-xs-semibold text-gray-600">Safeeds</span>
        </div>
      </header>
      <TruncatedText lines={5} className="text-sm text-gray-900 p-4">
        “Brian at safeeds was helpful in finding me a carrier to ship my car
        from Massachusetts to New York. Driver was very nice and although the
        pickup/delivery was 2 days...”
      </TruncatedText>
      <footer className="mt-2 px-4 pb-4 flex items-end justify-between">
        <span className="text-xl-semibold text-gray-900">$1440</span>

        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="relative after:content after:absolute after:h-3.5 after:w-[1px] after:bg-gray-300 after:-right-1.25 after:top-1/2 after:-translate-y-1/2">
            FROM: LA
          </span>
          <span>TO: CA</span>
        </div>
      </footer>
    </article>
  );
};

export default ReviewView;
