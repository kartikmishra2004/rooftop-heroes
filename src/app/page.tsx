import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-end px-margin-mobile md:px-margin-desktop pt-6">
          <div className="w-full max-w-container-max mx-auto z-10 relative">
            <div className="grid grid-cols-1 gap-2 mb-6">
              <h1 className="font-display-xl text-display-xl uppercase text-on-background">
                Engineering<br />
                <span className="text-primary-container">Permanence</span>
              </h1>
              <div className="flex justify-between items-end">
                <p className="font-label-caps text-label-caps text-secondary-container max-w-xs opacity-60">
                  ELITE ARCHITECTURAL SOLUTIONS<br />FOR MODERN INFRASTRUCTURE.
                </p>
                <span className="font-display-lg text-headline-lg text-surface-variant opacity-30">EST. 1994</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-container-max mx-auto h-[500px] overflow-hidden relative">
            <img 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0lYNhL9z-BoXCcD2LZDDtOZpi55SnkBJntJABI7ahJoLzrxGEGkCk9kH1KTyld0eAG9CgbaY2PS6AmZq7vpY7U_8t2aIf0FppAHiX7Rp_It7GEd6sjelqcPqzuY8jXfADTAOedmXWNGdXFyVVeiWd2ZllUyabmimQ68UuVvgy0MTJcxVgAkI3Q2gfeOoqFZJanH0vedURE-IOPR1_CHG-5uzvpmSh94-A4wg9F0clDX_aGtDDf7vW9xtDQXnOHe4reNMRCpTCSH0" 
              alt="Industrial Roofing"
            />
            <div className="absolute bottom-10 right-10 z-20">
              <Button variant="hero-cta" href="/contact">
                Request Quote
                <span className="material-symbols-outlined text-4xl">north_east</span>
              </Button>
            </div>
          </div>
          <div className="w-full bg-on-background py-4 overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-12 animate-marquee items-center text-surface font-label-caps">
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
              <span>RESIDENTIAL MASTERY</span> <span className="material-symbols-outlined">diamond</span>
              <span>INDUSTRIAL GRADE</span> <span className="material-symbols-outlined">diamond</span>
              {/* Duplicate for seamless loop */}
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
              <span>RESIDENTIAL MASTERY</span> <span className="material-symbols-outlined">diamond</span>
              <span>INDUSTRIAL GRADE</span> <span className="material-symbols-outlined">diamond</span>
              <span>COMMERCIAL ROOFS</span> <span className="material-symbols-outlined">diamond</span>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 space-y-6">
              <span className="font-label-caps text-primary tracking-widest uppercase">Solutions</span>
              <h2 className="font-headline-lg text-display-lg text-on-background leading-tight">
                We Have<br />Completed<br /><span className="text-primary-container font-bold">700+ Projects</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                Our agents will guide you through the entire process of roofing, ensuring every angle meets the engineering standards of tomorrow.
              </p>
              <Button variant="primary" href="/contact" className="px-8 py-4">Contact Us</Button>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4 relative">
              <div className="col-span-1 mt-8">
                <img 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcid2s7frm2Q6mfzPgdmH2_IsHG1G4mUNuz7MjnUVgIOy4zGIA0ODP3ENs2BTB_TfDhWUnzGKlfgp9mLkuqd-b8c7GcJnQc4Q4p_idSgwq6aVMR6bPe2dz2GZ3_UXna1TOFRPRvHYxHflqyCHMA1NHZIO-aIivYaqTpNP1Kt8W1p1NhIo6tEmu8SwlX5DjctQ4tNU_t7mS0UAU-ja-filUHsADhoQCMuRT4pWD5Wi7kRN_7lBzVkLSZoP66KzVcJ6by6mVLRrcyYk" 
                  alt="Project 1"
                />
              </div>
              <div className="col-span-1">
                <img 
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABqq7JU-8iskmeXbIZpD3VwWTBAQ3sFljYLMssoMyoxHZQO6om3DIdqjvJgYYbYtJEqfEcaoqe_OZle5j3VmFUnAYIIQUGIGEfd2r_gPjsfJeRdvKQzgDqJR3ZANSNN6H5DDAxI7PzxfbnWcrvblUgpz_ii0TkeVQ6LPYkfGe7pBDHaMN6cnl3WOlakX12xzudE1F--n6J3E4spKxUIO1WbXkkQbB-i3o2ttG8drJU6XccphzDDb74IGD2ENxP7F4A3pzEiqr32XI" 
                  alt="Project 2"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-container-highest p-8 grid grid-cols-1 gap-6 border border-white/20 backdrop-blur-lg">
                <div className="space-y-1">
                  <span className="font-stats-num text-stats-num text-primary-container block">21</span>
                  <span className="font-label-caps text-label-caps uppercase opacity-60">Countries</span>
                </div>
                <div className="space-y-1">
                  <span className="font-stats-num text-stats-num text-on-background block">250+</span>
                  <span className="font-label-caps text-label-caps uppercase opacity-60">Global Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-on-background py-16 md:py-24 text-surface overflow-hidden relative">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <img 
                className="w-3/4 aspect-square object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKLsUkl0qpdzv1bK_mljU9eS3stNMSYLbRrBgM0mRDTNyRXcfV_qfzaYtf2JbnYDtQPh0msLM9IU8GDTM4NWNpTVeygaJPSIIjF4tsnhkv-kXvM6Bn7AXJOphfLVL-rPhJDx6moMgdYtvFXDGWhBW65lXdLS3EOA-v9byzaqdi-7EEGDuE4qj4o1CDaRP0k51AAj4Wqe5wdB1Lq2NuFYLIyG6sbxhuOFpzPuU_7irePcTv8NmW04uWpF0h_Ql96x23G5DvFAisSs" 
                alt="Story Image 1"
              />
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square border-8 border-on-background overflow-hidden z-10">
                <img 
                  className="w-full h-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi-g8-sGRKkjbxqFnhu6ye6rfi3XIK9GzQxvmAnlC62Me6owtq9WVtePLL-4CPinBUHVLu3qne4hZnufRO5hRh1YjE9_3U0X0kmxPBy54H7LwZhQhXQRx64W--3UfOBCgdZBPCQWanaFmn1cG6seoh6WhznsPhGrvgDUuO_aHrsAiRvpMRfJhTBSIkQ6IjZBFfpPNIKcYAZRZTh36lGtla1zs9Wv3YNIt25ecr0aiT_YhDBehtClbMqi44404yBYFfrs94ZW9EuAE" 
                  alt="Story Image 2"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="font-label-caps text-label-caps text-primary-container uppercase tracking-[0.2em]">Our Heritage</span>
                <h2 className="font-display-lg text-headline-lg uppercase leading-none">Our Story<br />Started From<br />Our Own House</h2>
              </div>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-lg opacity-80 leading-relaxed">
                We don't just build roofs; we engineer envelopes of protection. Founded on the principle of "Engineered Permanence," Rooftop Heroes utilizes aeronautical grade materials and architectural precision to ensure your investment stands the test of time and climate.
              </p>
              <div className="flex items-center gap-8 border-t border-surface/10 pt-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-on-background bg-surface-variant overflow-hidden">
                      <img 
                        alt={`Team Member ${i}`}
                        src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBVfOSk_ap1FhivIVVaolO0bSyACxqdF2bMa6JnRHKVKtKdVejZVXOMSrsXPhn5DkzQD9r638mSItCzKiQsXFOWKbH_ZqPRFWQlLpCZX4AmPURjHKWbNlMOZR4OOyEEZ1Y6eQOHT7VQKPCzwn3csbxfroGaH8N6oYeu4BN01fEVVfz5JUXj_TyWtydJKLS_p3PV5TKAYOmz7dkSfdAaBgmnv6iWFzcjKCJH5PNhBAyCjZMRbTkwyPw4S0oTFb1h_WRb0u392mgptSM`} 
                      />
                    </div>
                  ))}
                </div>
                <span className="font-label-caps text-label-caps">Trusted by 250+ Elite Developers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-12">
            <span className="font-label-caps text-primary uppercase">Specializations</span>
            <h2 className="font-headline-lg text-display-lg leading-tight mt-2">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden group min-h-[400px]">
              <img 
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR9oRFheWe39W5sWvBnUP9mx_CClOc5vnVHGCuEWNoDdrhNQG0Gx0o8A--tNkphjI63lAmkhOMqszy34JQlY8YDAyAKpRNpk3OMx-_D1jvlzRvXhXUHB5iIi1TnEcgu6TU19gWOUtC2KTokb9POKmhvtsvz_RZnnpTKq7oVL6prxuMnn510Ll_pwM2HJUHqHdPie3Z6GD_ZavGdnIRg8bAIOYjxl1Vf1AIkiHJv_BZmd9_7jhUVap3f2emFj_Ef-QYACFkeY5pYh4" 
                alt="Residential Services"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-surface">
                <span className="font-label-caps text-label-caps text-primary-container">PREMIUM RESIDENTIAL</span>
                <h3 className="font-headline-lg text-headline-lg mt-2">Architectural Shingles</h3>
              </div>
            </div>
            <div className="flex flex-col gap-0 border-t border-surface-variant">
              {[
                { id: '01', title: 'Roof Repairing' },
                { id: '02', title: 'Roof Replacement' },
                { id: '03', title: 'Leakage Solutions' },
                { id: '04', title: 'Solar Integration' },
              ].map((service) => (
                <div key={service.id} className="group border-b border-surface-variant py-8 flex justify-between items-center hover:bg-surface-container-low px-6 transition-colors duration-300 cursor-pointer">
                  <div className="flex items-start gap-6">
                    <span className="font-label-caps text-label-caps text-on-surface-variant opacity-40 mt-1">{service.id}</span>
                    <h4 className="font-headline-lg text-headline-lg text-on-background transition-transform group-hover:translate-x-4">
                      {service.title}
                    </h4>
                  </div>
                  <span className="material-symbols-outlined text-3xl group-hover:rotate-45 transition-transform duration-300">north_east</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 md:py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase">Portfolio</span>
                <h2 className="font-headline-lg text-display-lg leading-none mt-2">Selected<br /><span className="text-primary-container">Works</span></h2>
              </div>
              <Button variant="ghost" className="border-b-2 border-on-background pb-1 hover:border-primary">View All Projects</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:min-h-[800px] h-auto">
              <div className="md:col-span-7 h-[400px] md:h-full overflow-hidden relative group cursor-pointer">
                <img 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBANrKUwlcLuIbJFH8PebAgXgg8X_5Nt6Csbk2sw8jC1ibOlwx2tfdRUNxDGjkq_2kd8ekqyWhdi0AA_Ajb89OVdsiAb2Uwl1WAFgzP-UlqvZqXNhLakLov7OMjjmTW6XVAORiG_E1QsAfYiBBGvd9GQGdM50d2ZK-s0QPaj4OgLTBphUyfwAisN0IQTjnw20WEO4PpW0UI0D_Duskn1VMoztORoezaOcv4Qm1WPTweztdfL7Z2WggiQXpwMjtnlgOY_en-vydmeH8" 
                  alt="Portfolio Large"
                />
                <div className="absolute inset-0 bg-on-background/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-8 right-8 p-4 bg-surface-container-lowest/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-label-caps text-label-caps">HERITAGE PRESERVATION</span>
                </div>
              </div>
              <div className="md:col-span-5 grid grid-rows-2 gap-6 md:h-full h-auto">
                <div className="overflow-hidden relative group cursor-pointer h-[300px] md:h-full">
                  <img 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHetVzACqDKccCtoGOED4ENamy6T4S7QdiG6U2emmDUSQMMPdsAXtHLs5i6picctu0mO1JW93OuKknfAkaQg9mE8HK-9Cy1P5FNTF8Dz6g0JhK9Q9y4O2dknbiylsayX4rg8UYA1ep9nYT5RQfNdM7b1hmIVmn86Oye5G_O0IJWTetVEip0ttOE3bIYnt4S1O6xsHOqr2ncqCSmZXtnV-9KOLCssNUEA1WcJBBaEQvFsITGf8O1k_tAIb1HcCZ5tAJD4vNEJVfj30" 
                    alt="Portfolio Small 1"
                  />
                </div>
                <div className="overflow-hidden relative group cursor-pointer h-[300px] md:h-full">
                  <img 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcnj7zSfVhQBdTg6p8lvvRPq_jUDCmdwj5v52h51cmSqIXszKX13gPFp3Pb6JpNbjXjIt_DTzD6N71zDkn1M3aHkzuYyU8roa5_Ni4iHnGivu8ZJ5bTIYApBSYAKgcqcvCLf1_DCDDbMlFxQYC0xiqe9cyQuJj6V3jJ_bDvUJGTqGvY7J_8ZlWBtKjKbs5UCRXMljK4RYmFm09Zj0UDgZ5uxfbTMHeNOUuZRJADN-xG8ExOR_qbAKTtI693VcSTHC-4NbBAWyMdZg" 
                    alt="Portfolio Small 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 px-margin-mobile md:px-margin-desktop bg-on-background text-surface">
          <div className="max-w-container-max mx-auto text-center space-y-8">
            <div className="relative inline-block">
              <h2 className="font-display-xl text-display-xl uppercase leading-tight relative z-10">Is your Roof<br /><span className="text-primary-container italic">crying?</span></h2>
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
            </div>
            <p className="font-body-lg opacity-60 max-w-2xl mx-auto">
              Ignoring the signs leads to structural decay. Our engineers provide a free diagnostic scan to ensure your sanctuary remains permanent.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
              <Button variant="hero-cta" href="/contact">BOOK INSPECTION</Button>
              <Button variant="outline" href="/services">Emergency Services</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
