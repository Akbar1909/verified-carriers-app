import Container from "@/components/Container";
import Image from "next/image";

const Partners = () => {
  const partners = [
    {
      src: "/images/company-logo-1.png",
    },
    {
      src: "/images/company-logo-2.png",
    },
    {
      src: "/images/company-logo-3.png",
    },
    {
      src: "/images/company-logo-4.png",
    },
    {
      src: "/images/company-logo-5.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <Container className='grid grid-cols-5 justify-between'>
        {partners.map(({ src }, i) => (
          <div className='relative h-12'>
             <Image objectFit='contain' fill className='absolute' src={src} alt="company logo" />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Partners;
