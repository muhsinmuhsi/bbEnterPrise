import Image from "../assets/ElectronicsImage.jpg";
import Logo from "../assets/logo 1.png";
import Button from "../components/Ui/button";
import {
  ChevronRight,
  CheckCircle,
  ArrowRight,
  MousePointer,
  BarChart,
  Search,
  Globe,
  PenTool,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import HeroAnimation from "../components/hero-animation";
import ServiceCard from "../components/service-card";
import TestimonialCard from "../components/testimonial-card";
import CountUp from "../components/count-up";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";


export default function Home() {

   useEffect(() => {
    AOS.init({ duration: 800 })
  }, []);

  return (
    <div className="flex min-h-screen flex-col p-3">
      <Navbar />
      {/* main */}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8 max-w-xl">
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-900">
                  <span>Full-Service Digital Marketing Agency</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Elevate Your{" "}
                  <span className="text-violet-950">Digital Presence</span> With
                  Us
                </h1>
                <p className="text-lg text-gray-600">
                  As a leading Digital Marketing agency, We operate from UAE and
                  India, delivering top-tier marketing and advertising solutions
                  to clients globally. With extensive experience across diverse
                  sectors, We partnered with a range of businesses from small
                  and medium enterprises to large corporations, as well as
                  collaborating with agencies and fellow freelancers. Our focus
                  is on leveraging proven strategies to drive impactful results
                  and elevate your brand in today's competitive digital
                  landscape.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  Seo, ppc, sem, smm, google analytics, design and branding
                  {[
                    { label: "SEO", icon: "🔍" },
                    { label: "PPC", icon: "🖱️" },
                    { label: "SMM", icon: "📱" },
                    { label: "design and branding", icon: "🏷️" },
                    { label: "Google Analytics", icon: "📊" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-full border  px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-violet-900 hover:bg-violet-950 text-white"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4 inline mb-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-violet-900 border-violet-200 text-violet-900 hover:bg-violet-950"
                  >
                    Our Services
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        style={{
                          background: `linear-gradient(140deg, rgb(${
                            100 + i * 20
                          }, ${50 + i * 10}, ${150 + i * 20}), rgb(${
                            80 + i * 10
                          }, ${30 + i * 5}, ${120 + i * 15}))`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-900">100+</span>{" "}
                    satisfied clients
                  </div>
                </div>
              </div>
              <div className="relative lg:pl-8">
                <HeroAnimation />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[800px] w-[800px] rounded-full bg-violet-50/80 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-50/50 blur-3xl" />
          </div>
        </section>

        <section id="services" className="bg-gray-50 py-20">
          <div   className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2  data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Digital Marketing Services
              </h2>
              <p  data-aos="fade-up" className="mt-4 text-lg text-gray-600">
                Everything you need to succeed in the digital landscape, all
                under one roof.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-violet-950" />}
                title="Web Design & Development"
                description="Custom, responsive websites that convert visitors into customers."
                features={[
                  "Responsive Design",
                  "UX/UI Optimization",
                  "E-commerce Solutions",
                ]}
              />
              <ServiceCard
                icon={<Search className="h-10 w-10 text-violet-950" />}
                title="Search Engine Optimization"
                description="Improve your visibility and drive organic traffic to your website."
                features={["Keyword Research", "On-page SEO", "Link Building"]}
              />
              <ServiceCard
                icon={<MousePointer className="h-10 w-10 text-violet-950" />}
                title="PPC & SEM"
                description="Targeted paid campaigns that deliver immediate results."
                features={["Google Ads", "Bing Ads", "Retargeting"]}
              />
              <ServiceCard
               
                icon={<Instagram className="h-10 w-10 text-violet-950" />}
                title="Social Media Marketing"
                description="Engage your audience and build brand loyalty across platforms."
                features={[
                  "Content Strategy",
                  "Community Management",
                  "Paid Social",
                ]}
              />
              <ServiceCard
               
                icon={<BarChart className="h-10 w-10 text-violet-950" />}
                title="Analytics & Reporting"
                description="Data-driven insights to optimize your marketing strategy."
                features={[
                  "Google Analytics",
                  "Conversion Tracking",
                  "Custom Dashboards",
                ]}
              />
              <ServiceCard
                icon={<PenTool className="h-10 w-10 text-violet-950" />}
                title="Branding & Design"
                description="Create a memorable brand identity that resonates with your audience."
                features={[
                  "Logo Design",
                  "Brand Guidelines",
                  "Marketing Materials",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="">
              <div className="space-y-8">
                <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-900">
                  <span  data-aos="fade-right">Why Choose BB Enterprise</span>
                </div>
                <h2  data-aos="fade-left" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We're Not Just Another Agency
                </h2>
                <p className="text-lg text-gray-600">
                  At BB Enterprise, we combine creativity with data-driven
                  strategies to deliver exceptional results. Our team of experts
                  is passionate about helping businesses grow and succeed in the
                  digital world.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Data-Driven Approach",
                      description:
                        "We make decisions based on analytics and insights, not guesswork.",
                    },
                    {
                      title: "Tailored Strategies",
                      description:
                        "Custom solutions designed specifically for your business goals.",
                    },
                    {
                      title: "Transparent Reporting",
                      description:
                        "Regular updates and clear metrics to track your ROI.",
                    },
                    {
                      title: "Continuous Optimization",
                      description:
                        "We never stop improving your campaigns for better results.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle className="h-6 w-6 flex-none text-violet-600" />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-violet-900 py-16 text-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              {[
                { value: 200, label: "Happy Clients" },
                { value: 500, label: "Projects Completed" },
                { value: 10, label: "Years Experience" },
                { value: 25, label: "Team Members" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <CountUp
                    end={stat.value}
                    className="text-4xl font-bold text-white"
                    suffix={stat.value >= 100 ? "+" : ""}
                  />
                  <p className="text-violet-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="py-20 bg-white overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2  data-aos="zoom-in-up" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Recent Work
              </h2>
              <p  data-aos="fade-up" className="mt-4 text-lg text-gray-600">
                Take a look at some of our successful projects and the results
                we've delivered.
              </p>
            </div>

            {/* Horizontal scrollable project list */}
            <div  data-aos="fade-up" className="flex gap-6 overflow-x-auto pb-4 px-2 hide-scrollbar">
              {[
                {
                  img: "/images/work1.jpg",
                  title: "Brand Identity",
                  desc: "Design, Branding",
                },
                {
                  img: "/images/work2.jpg",
                  title: "Marketing Campaign",
                  desc: "SMM, Strategy",
                },
                {
                  img: "/images/work3.jpg",
                  title: "E-commerce Site",
                  desc: "Web Design, SEO",
                },
                {
                  img: "/images/work4.jpg",
                  title: "Logo & Identity",
                  desc: "Design, Branding",
                },
                {
                  img: "/images/work5.jpg",
                  title: "Social Growth",
                  desc: "SMM, Analytics",
                },
                {
                  img: "/images/work6.jpg",
                  title: "Landing Page",
                  desc: "UI/UX, Conversion",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative min-w-[300px] max-w-sm flex-shrink-0 overflow-hidden rounded-xl bg-gray-100 transition-all hover:shadow-lg"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2  data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h2>
              <p  data-aos="fade-up" className="mt-4 text-lg text-gray-600">
                Don't just take our word for it. Here's what our clients have to
                say about working with us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="BB Enterprise transformed our online presence. Our website traffic has increased by 200% and our leads have doubled since working with them."
                name="Mansoor"
                title=" CEO, wisdom management."
                rating={5}
                image="https://ui-avatars.com/api/?name=Mansoor&background=7c3aed&color=#7621a3&rounded=true"
              />
              <TestimonialCard
                quote="Their social media management transformed our online presence. Engagement has skyrocketed, and we've built a loyal community that's actively driving traffic and sales to our business."
                name="Abdul Azeez "
                title="Owner, Socialize academy"
                rating={5}
                image="https://ui-avatars.com/api/?name=Azeez&background=7c3aed&color=#7621a3&rounded=true"
              />
              <TestimonialCard
                quote="The team at BB Enterprise is professional, responsive, and truly cares about our success. They're not just a vendor, they're a partner in our growth."
                name="Niyas karakkal"
                title="marketing manager, Tharbiya international"
                rating={4}
                image="https://ui-avatars.com/api/?name=Niyaz&background=7c3aed&color=#7621a3&rounded=true"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Have a question or ready to start your project? Reach out to
                  us and we'll get back to you as soon as possible.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 flex-none text-violet-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        builbrandenterprise@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 flex-none text-violet-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+917902939096</p>
                      <p className="text-gray-600">+917902939096</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 flex-none text-violet-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        kottakkal ,Malappuram, kerala, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    <Link
                      to={'https://www.facebook.com/share/1ByhBnZ9Xv/?mibextid=wwXIfr'}
                      className=" hover:text-violet-950 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>

                    <Link
                      
                      to={
                        "https://www.instagram.com/bb_enterprise._?igsh=NGppYnd3NTEwcHRs&utm_source=qr"
                      }
                      className=" hover:text-violet-950 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                   <a
  href="https://wa.me/917902939096?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-violet-950 transition-colors"
>
  <img
    src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
    alt="WhatsApp"
    width="24"
    height="24"
  />
  <span className="sr-only">whatsapp</span>
</a>


                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-8 shadow-lg">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-gray-900"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">
                        Web Design & Development
                      </option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="ppc">PPC & SEM</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="analytics">Analytics & Reporting</option>
                      <option value="branding">Branding & Design</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-violet-500 focus:ring-violet-500"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-violet-950 hover:bg-violet-950 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* //footer */}
      <footer className="bg-gray-900 text-white py-12 p-4">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img
                  src={Logo}
                  alt="BB Enterprise Logo"
                  width={150}
                  height={40}
                  className="h-auto w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 mb-6">
                Full-service digital marketing agency helping businesses grow
                through strategic online marketing solutions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Design & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    PPC & SEM
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Analytics & Reporting
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Branding & Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <HashLink smooth to="/#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#work"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Work
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#testimonials"
                    href=""
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </HashLink>
                </li>
               
                <li>
                  <HashLink smooth to="/#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </HashLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 flex-none text-violet-400" />
                  <span className="text-gray-400">
                    builbrandenterprise@gmail.com
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 flex-none text-violet-400" />
                  <span className="text-gray-400">+917902939096</span>
                  <span className="text-gray-400">+918606762939</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-none text-violet-400" />
                  <span className="text-gray-400">
                    Kottakkal , Malappuram , kerala , India
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} BB Enterprise. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
