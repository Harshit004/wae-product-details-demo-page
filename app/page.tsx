import Image from "next/image"
import Navbar from "@/components/navbar"
import ProductCard from "@/components/product-card"
import Footer from "@/components/footer"
import { ArrowRight, ChevronDown } from "lucide-react"
import ProductSlider from "@/components/product-slider"
import DownloadsSection from "@/components/downloads-section"
import ContactForm from "@/components/ContactForm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BLUWAE VAR",
  description: "product description of BLUWAE VAR",
}

export const specifications = [
  {
    id: 1,
    title: "Variant",
    value: "FS",
    subtitle: "VAR 150/ 100/ 50",
  },
  {
    id: 2,
    title: "Drip Tray Capacity",
    value: "1000ml",
    subtitle: "Milli Ltires",
  },
  {
    id: 3,
    title: "Hot temperature",
    value: "30°C- 80°C",
    subtitle: "Default 50°C",
  },
  {
    id: 4,
    title: "Cold temperature",
    value: "5°C- 24°C",
    subtitle: "Default 8°C",
  },
  {
    id: 5,
    title: "Compressor",
    value: "220V/50 HZ",
    subtitle: "RZ 134a1/8 HP",
  },
]

export default function Home() {
  // Sample images for the slider and thumbnails
  const sliderImages = [
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/83567a53-11de-43e2-8ace-761891cf9600/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d54589c-7306-4e99-4b93-a074d28a4500/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3dea1850-271e-4be6-d92c-173008384600/public",
  ]

  const thumbnailImages = [
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3505d88c-cf93-48cc-4609-8ccc275e2800/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6c050cca-601b-4227-3225-ab64fbb95200/public",
    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0ba65f3b-0a33-49f0-f0f6-10da20e95700/public",
  ]

  return (
    <main className="min-h-screen bg-white font-helvetica">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-[80px] max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Product Image Slider */}
          <div className="relative max-w-[600px] max-h-[600px] md:mr-[132px]">
            <ProductSlider
              images={[
                "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/83567a53-11de-43e2-8ace-761891cf9600/public",
                "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d54589c-7306-4e99-4b93-a074d28a4500/public",
                "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3dea1850-271e-4be6-d92c-173008384600/public",
              ]}
            />
          </div>

          {/* Product Description */}
          <div className="w-[500px] h-[450.83px] flex flex-col gap-[40px] justify-center ml-[132px]">
            <div className="w-[500px] h-[35px] font-[300] text-[24px] leading-[100%] tracking-tight">
              DRINKING WATER STATION - BLUWAE Series
            </div>
            
            <h1 
              className="w-[500px] h-[64px] font-[400] text-[64px] leading-[100%] tracking-tight"
              style={{ fontFamily: "Helvetica Neue", verticalAlign: "middle" }}
            >
              BLUWAE VAR
            </h1>

            {/* Temperature Tags */}
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                <span>Hot</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <span>Cold</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <span>Ambient</span>
              </div>
            </div>

            <p className="uppercase font-normal">
              A FLOOR-STANDING MODEL DESIGNED FOR CONVENIENT PLACEMENT ON THE GROUND.
            </p>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>PLUG-IN PLAY OPERATION.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>MOUNTS AT POINT OF PURIFICATION.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-xl">•</span>
                <span>CAN BE CUSTOMIZED AS PER CLIENT NEEDS.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Thumbnail Section */}
      <section className="mt-[60px] mb-[180px]">
        <div
          className="w-[1200px] h-[360px] mx-[120px] flex justify-between"
          style={{ gap: "1%" }}
        >
          <div className="relative w-[32%] h-full">
            <Image
              src={thumbnailImages[0]}
              alt="Thumbnail 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[32%] h-full">
            <Image
              src={thumbnailImages[1]}
              alt="Thumbnail 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[32%] h-full">
            <Image
              src={thumbnailImages[2]}
              alt="Thumbnail 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Horizontal Rule added after the Thumbnail Section */}
      <hr className="w-[1440px] border-t-[0.5px] border-[#1E1E1E] mx-auto" />

      {/* Features Section with additional bottom margin */}
      <section className="mt-[10px] mx-[120px] mb-[180px]">
        {/* Features Heading with 60px gap after */}
        <div className="mb-[60px]">
          <h2
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "-2%",
              verticalAlign: "middle",
            }}
          >
            FEATURES
          </h2>
        </div>

        {/* Bullet points arranged in a 2x2 grid */}
        <div className="grid grid-cols-2 gap-[40px]">
          {/* Bullet Point 1 */}
          <div className="flex gap-4 w-[580px] h-[92px]">
            <span className="w-4 h-4 aspect-square rounded-full bg-black flex-shrink-0"></span>
            <div>
              <h3
                className="mb-[20px]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                }}
              >
                TOUCH-FREE DISPENSING
              </h3>
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Entry-level, hygienic water access via touchless sensors. Touchless technology.
              </p>
            </div>
          </div>

          {/* Bullet Point 2 */}
          <div className="flex gap-4 w-[580px] h-[92px]">
            <span className="w-4 h-4 aspect-square rounded-full bg-black flex-shrink-0"></span>
            <div>
              <h3
                className="mb-[20px]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                }}
              >
                EFFORTLESS MAINTENANCE
              </h3>
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Removable beverage dispensers, spill collection, and easy-to-clean design. All accessible for servicing.
              </p>
            </div>
          </div>

          {/* Bullet Point 3 */}
          <div className="flex gap-4 w-[580px] h-[92px]">
            <span className="w-4 h-4 aspect-square rounded-full bg-black flex-shrink-0"></span>
            <div>
              <h3
                className="mb-[20px]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                }}
              >
                BUILT TOUGH, MADE TO LAST
              </h3>
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                Crafted from premium Stainless Steel (SS-304/SS-316) and corrosion-resistant materials, ensuring long-lasting performance.
              </p>
            </div>
          </div>

          {/* Bullet Point 4 */}
          <div className="flex gap-4 w-[580px] h-[92px]">
            <span className="w-4 h-4 aspect-square rounded-full bg-black flex-shrink-0"></span>
            <div>
              <h3
                className="mb-[20px]"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "1%",
                  verticalAlign: "middle",
                  textTransform: "uppercase",
                }}
              >
                NO MESS, NO STRESS
              </h3>
              <p
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}
              >
                An efficient drip tray with generous capacity catches spills, keeping the area clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Rule added after the Features Section */}
      <hr className="w-[1440px] border-t-[0.5px] border-[#1E1E1E] mx-auto" />

      {/* Specifications Section */}
      <section className="py-12 max-w-[1200px] mx-auto px-4 border-t border-gray-200 mb-[80px]">
        <div className="flex items-center justify-between mb-6">
          <h2
            style={{
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "100%",
              letterSpacing: "0%",
              verticalAlign: "middle",
              textTransform: "uppercase",
            }}
          >
            SPECIFICATIONS
          </h2>
          <ChevronDown className="h-6 w-6" />
        </div>

        <div className="grid grid-cols-2 justify-center gap-10 md:grid-cols-3 md:gap-8 xl:grid-cols-5">
          {specifications?.map((spec, idx) => {
            return (
              <div
                key={spec.id}
                className="lg:w-full"
                data-aos="fade-in"
                data-aos-delay={`${idx}00`}
              >
                <div className="mb-3 font-secondary text-sm md:mb-4 xl:mb-5 xl:text-base">
                  {spec.title}
                </div>

                <div
                  className="mb-3 md:mb-4 xl:mb-5 whitespace-nowrap"
                  style={{
                    fontFamily: "Helvetica Neue",
                    fontWeight: 400,
                    fontSize: "40px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                  }}
                >
                  {spec.value}
                </div>

                <div className="text-sm font-extralight xl:text-base">
                  {spec.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Horizontal Rule added after the Specifications Section */}
      <hr className="w-[1440px] border-t-[0.5px] border-[#1E1E1E] mx-auto" />

      {/* Downloads Section */}
      <section className="max-w-[1200px] mx-[120px] mt-[10px] mb-[180px]">
        <DownloadsSection />
      </section>

      {/* Horizontal Rule added after the Downloads Section */}
      <hr className="w-[1440px] border-t-[0.5px] border-[#1E1E1E] mx-auto" />

      {/* More Products Section */}
      <section className="mt-[10px] mb-[180px] max-w-[1200px] mx-auto px-4">
        <h2 className="text-5xl font-normal mb-20">
          <div style={{ fontFamily: "Helvetica Neue", fontWeight: 400, fontSize: "86px", lineHeight: "140%", letterSpacing: "0%", verticalAlign: "middle" }}>
            More Products
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3be892cf-2037-4046-8d68-aff3c7328a00/public"
            title="DRINKING WATER STATIONS"
            description="Water dispensers with inbuilt purification —pure, safe water delivered efficiently."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c2a345b2-d818-48a0-69db-98b041c9ea00/public"
            title="DRINKING WATER DISPENSER"
            description="Stainless steel water dispensers give you fresh, clean water anytime."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/eddf866f-bdd3-4563-e7d1-a2f5c7dd8900/public"
            title="DRINKING WATER FAUCETS"
            description="Drinking water faucets with under the counter storage units to make access to fresh water simple."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1d17bc90-292c-4cd5-cd1a-6d32159a2e00/public"
            title="WATER COOLERS & FOUNTAINS"
            description="Water coolers cum bubblers provide chilled water on demand."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/71f8a54e-d8e0-454e-951a-dcf52863aa00/public"
            title="PUBLIC UTILITY SYSTEMS"
            description="Designed for large public spaces, PUS systems ensure clean, accessible water."
          />
          <ProductCard
            image="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b435dee3-0609-4f07-9c04-060c1e41fc00/public"
            title="COMMERCIAL/INDUSTRIAL PLANTS"
            description="Power your facility with our large-scale hydration plants. Scalable and efficient."
          />
        </div>
      </section>

      {/* Inquiry / Site Assessment Form with ContactForm component */}
      <section className="py-12 max-w-[1200px] mx-auto px-4 border-t border-gray-200 mb-[80px]">
        <h3 className="mb-4 font-secondary text-[40px] leading-normal xl:text-[64px] uppercase">
          For more info/site assessment
        </h3>
        <p className="mb-[40px] font-secondary text-[16px] leading-normal xl:text-[24px]">
          Talk to our Water Expert
        </p>

        <div className="mt-10 text-base xl:text-xl mb-[80px] flex flex-col sm:flex-row sm:items-center sm:gap-x-8"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "140%",
            letterSpacing: "4%",
          }}
        >
          {/* Email Section with updated typography */}
          <div
            className="flex items-center gap-x-3"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 flex-shrink-0"
            >
              <path
                d="M2.6665 9.33325L13.5531 16.9538C14.4346 17.5709 14.8754 17.8795 15.3549 17.999C15.7784 18.1046 16.2213 18.1046 16.6448 17.999C17.1243 17.8795 17.565 17.5709 18.4466 16.9538L29.3332 9.33325M9.0665 26.6666H22.9332C25.1734 26.6666 26.2935 26.6666 27.1491 26.2306C27.9018 25.8471 28.5137 25.2352 28.8972 24.4825C29.3332 23.6269 29.3332 22.5068 29.3332 20.2666V11.7333C29.3332 9.49304 29.3332 8.37294 28.8972 7.51729C28.5137 6.76464 27.9018 6.15272 27.1491 5.76923C26.2935 5.33325 25.1734 5.33325 22.9332 5.33325H9.0665C6.82629 5.33325 5.70619 5.33325 4.85054 5.76923C4.09789 6.15272 3.48597 6.76464 3.10248 7.51729C2.6665 8.37294 2.6665 9.49304 2.6665 11.7333V20.2666C2.6665 22.5068 2.6665 23.6269 3.10248 24.4825C3.48597 25.2352 4.09789 25.8471 4.85054 26.2306C5.70619 26.6666 6.82629 26.6666 9.0665 26.6666Z"
                stroke="#697077"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <a href="mailto:info@waecorp.com" className="hover:underline">
                info@waecorp.com
              </a><br/>
              <a href="mailto:marketing@waecorp.com" className="hover:underline">
                marketing@waecorp.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 flex-shrink-0"
            >
              <path
                d="M11.1737 11.8042C12.1017 13.7371 13.3667 15.5486 14.9689 17.1507C16.571 18.7528 18.3825 20.0178 20.3153 20.9458C20.4816 21.0257 20.5647 21.0656 20.6699 21.0962C21.0437 21.2052 21.5027 21.1269 21.8193 20.9002C21.9083 20.8365 21.9846 20.7602 22.137 20.6078C22.6031 20.1417 22.8362 19.9086 23.0706 19.7562C23.9544 19.1816 25.0938 19.1816 25.9777 19.7562C26.2121 19.9086 26.4451 20.1417 26.9113 20.6078L27.1711 20.8677C27.8797 21.5762 28.234 21.9305 28.4265 22.311C28.8092 23.0678 28.8092 23.9615 28.4265 24.7182C28.234 25.0987 27.8797 25.453 27.1711 26.1616L26.9609 26.3718C26.2548 27.078 25.9017 27.431 25.4216 27.7007C24.889 27.9999 24.0616 28.2151 23.4507 28.2133C22.9001 28.2116 22.5238 28.1048 21.7712 27.8912C17.7267 26.7433 13.9102 24.5773 10.7262 21.3933C7.54224 18.2093 5.37627 14.3929 4.22831 10.3483C4.0147 9.59574 3.9079 9.21944 3.90626 8.66885C3.90444 8.05788 4.11959 7.23056 4.41882 6.69789C4.68848 6.21785 5.04157 5.86476 5.74773 5.1586L5.95791 4.94842C6.6665 4.23983 7.02079 3.88554 7.4013 3.69308C8.15805 3.31032 9.05174 3.31032 9.80848 3.69308C10.189 3.88554 10.5433 4.23983 11.2519 4.94842L11.5117 5.20825C11.9778 5.67439 12.2109 5.90746 12.3633 6.14183C12.938 7.02568 12.938 8.16512 12.3633 9.04898C12.2109 9.28335 11.9778 9.51642 11.5117 9.98256C11.3593 10.135 11.2831 10.2112 11.2193 10.3003C10.9926 10.6168 10.9143 11.0759 11.0233 11.4497C11.054 11.5548 11.0939 11.638 11.1737 11.8042Z"
                stroke="#697077"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="tel:+91 1204069800" className="hover:underline">
              +91 1204069800
            </a>
          </div>
        </div>

        {/* Render the Contact Form (client component) */}
        <div className="mt-10 flex max-w-[440px]">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
