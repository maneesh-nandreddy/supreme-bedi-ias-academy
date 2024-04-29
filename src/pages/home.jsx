import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/upscbg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/30 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                <span>join the transformation</span>
          <br />
          <span>from Aspiring to Inspiring!!</span>
              </Typography>
              <button className="pl-1 pr-1 border-white bg-[#4AC5B5] text-xl roun text-white">Request a demo</button>
              <Typography variant="lead" color="white" className="opacity-80">
              Join our prestigious IAS coaching center for expert educators, a 10-month course, personalized feedback sessions, interactions with IAS officers, and a new batch starting in June 2024. Prepare for IAS, IPS, and IFS exams with us.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  {featuresData.map(({ color, title, icon, description }) => (
    <div
      key={title}
      className="overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      <FeatureCard
        color={color}
        title={title}
        icon={React.createElement(icon, {
          className: "w-5 h-5 text-white",
        })}
        description={description}
      />
    </div>
  ))}
</div>

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12 bg-overallbg bg-cover bg-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Welcome to our IAS Academy
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                
                Enhance your learning experience with our IAS Academy Training Center. 
                Avoid confusion by providing tooltips and popovers on elements, ensuring you've enabled them using JavaScript. 
                <br />
                <br />
                Our training kit includes three pre-built pages, accelerating your learning process. 
                Customize the content and images to suit your needs, ensuring JavaScript is enabled for optimal functionality.
              
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teawork.png"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">kiran bedi</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Supreme Bedi IAS Academy, with the blessings of Mrs Kiran Bedi, is looking for a Faculty of Polity and Governance for General Studies for the USPC examination. 

Supreme Bedi IAS Academy aims to empower & equip the students with the approach to follow and the path to use for the available information, not to teach but train with strategy. It attempts to provide Clarity of Concepts, build a strong foundation and learn to synchronize events to understand the world holistically with a 360 degree perspective.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Meet the Faculty">
            Introducing our esteemed faculty, each with a wealth of experience in teaching and mentoring UPSC aspirants.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-4 px-4">
        <div className="container mx-auto">
          {/* <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle> */}
          <PageTitle section="Why Choose Us" heading="Supreme Bedi IAS Academy">
            Elevate your UPSC preparation with Supreme Bedi IAS Academy. 
            Our expert faculty, personalized feedback sessions, and interactions with IAS officers provide you with a transformative learning experience.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Apply Now" heading="Ready to Start Your Journey with Us?">
            Complete the application form below to begin your journey towards becoming a successful civil servant. Our team will review your application and get back to you soon.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
