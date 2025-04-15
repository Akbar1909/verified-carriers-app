import Avatar from "@/components/Avatar";
import Container from "@/components/Container";
import React from "react";

const Feedback = () => {
  return (
    <div className="bg-white py-24">
      <Container>
        <article className="flex flex-col items-center bg-orange-50 py-16 px-8 rounded-3xl">
          <h2 className='text-center text-d-md-medium text-orange-900'>
            "We are driven by the desire to transform transportation into a
            realm of transparency and trust. Our goal is to empower users to
            make informed decisions based on authentic experiences."
          </h2>

          <Avatar className="mt-8 mb-4" size='2xl' url="/images/avatar.png" />

          <span className='text-lg-medium text-orange-900 mb-1'>Koray Okumus</span>
          <span className='text-md text-orange-700'>Founder, Verified Carriers</span>
        </article>
      </Container>
    </div>
  );
};

export default Feedback;
