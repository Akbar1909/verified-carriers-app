import Container from "@/components/Container";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <h2 className="text-d-lg-semibold text-gray-900 mb-16 text-center">
          Our key partners
        </h2>
        <div className='grid grid-cols-8 gap-x-8 gap-y-8'>
          {[
            { url: "/images/notion.png" },
            { url: "/images/slack.png" },
            { url: "/images/google_drive.png" },
            { url: "/images/intercom.png" },
            { url: "/images/jira.png" },
            { url: "/images/dropbox.png" },
            { url: "/images/stripe.png" },
            { url: "/images/zapier.png" },
            { url: "/images/figma.png" },
            { url: "/images/confluence.png" },
            { url: "/images/mailchimp.png" },
            { url: "/images/zendesk.png" },
            { url: "/images/g-calendar.png" },
            { url: "/images/whatsapp.png" },
            { url: "/images/discord.png" },
            { url: "/images/bitbucket.png" },
          ].map(({ url }, i) => (
            <div key={i} className='w-20 h-20 relative'>
               <Image src={url} alt="" fill objectFit='cover' />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
