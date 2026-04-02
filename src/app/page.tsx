import { Navigation } from "@/components/Navigation";
import { FadeUp, ParallaxImage, MagneticButton } from "@/components/MotionComponents";
import { ArrowUpRight, Star } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="relative bg-[#fdfbf7] selection:bg-black/10">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row items-center pt-24 pb-12 px-4 md:px-8 max-w-[1600px] mx-auto gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start z-10 md:pr-12">
          <FadeUp delay={0.1}>
            <div className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 mb-8 bg-white/50 backdrop-blur-md">
              High-End Nail Artistry
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-6xl md:text-8xl tracking-tighter leading-[0.9] font-medium mb-8 text-balance">
              The Canvas <br className="hidden md:block"/> For Your <br className="hidden md:block"/> Hands.
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="text-lg md:text-xl text-black/60 max-w-[45ch] leading-relaxed mb-12">
              Step into a sanctuary of precision and calm. Create Beauty Nail offers an unparalleled manicure and pedicure experience, tailored specifically to your aesthetic.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <MagneticButton className="rounded-full bg-black text-white px-8 py-4 flex items-center gap-4 text-sm uppercase tracking-widest hover:bg-black/90">
              <span>Book Appointment</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-[1px]">
                <ArrowUpRight weight="light" size={16} />
              </div>
            </MagneticButton>
          </FadeUp>
        </div>
        
        <div className="w-full md:w-1/2 h-[60vh] md:h-[85vh] relative rounded-[2.5rem] overflow-hidden p-1.5 ring-1 ring-black/5 bg-black/5">
          <div className="w-full h-full relative rounded-[calc(2.5rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] bg-white">
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop" 
              alt="Nail Salon Experience" 
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl tracking-tighter leading-none font-medium">Curated <br/> Services</h2>
            <p className="text-black/60 max-w-[40ch] text-lg">Every treatment is executed with surgical precision and premium, non-toxic materials.</p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Signature Manicure",
              price: "$65+",
              desc: "Complete cuticle care, precise shaping, and a flawless gel polish application that lasts weeks.",
              img: "https://images.unsplash.com/photo-1519014816548-bf5fe459e366?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Spa Pedicure",
              price: "$85+",
              desc: "An immersive relaxation experience featuring exfoliation, deep hydration, and perfect polish.",
              img: "https://images.unsplash.com/photo-1632898748375-7b198198f244?q=80&w=800&auto=format&fit=crop"
            },
            {
              title: "Custom Nail Art",
              price: "$110+",
              desc: "Bespoke designs ranging from minimalist micro-french to complex structural 3D textures.",
              img: "https://images.unsplash.com/photo-1596556133887-fb2cb7ff6f92?q=80&w=800&auto=format&fit=crop"
            }
          ].map((service, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1}>
              <div className="group rounded-[2.5rem] bg-white ring-1 ring-black/5 p-2 h-full flex flex-col shadow-[0_40px_80px_-20px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-shadow duration-700">
                <div className="w-full h-64 md:h-80 relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden mb-6 bg-black/5">
                  <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                </div>
                <div className="px-6 pb-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                    <span className="text-sm font-medium bg-black/5 px-3 py-1 rounded-full">{service.price}</span>
                  </div>
                  <p className="text-black/60 leading-relaxed mb-8 flex-1">{service.desc}</p>
                  <MagneticButton className="w-full py-4 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors duration-500 uppercase tracking-widest text-xs font-medium">
                    Book Treatment
                  </MagneticButton>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about-us" className="py-24 md:py-40 px-4 md:px-8 bg-black text-[#fdfbf7] rounded-[3rem] mx-4 md:mx-8 my-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16 items-center relative z-10">
          <div className="w-full md:w-1/2">
            <FadeUp delay={0.1}>
              <h2 className="text-5xl md:text-7xl tracking-tighter leading-none font-medium mb-12">Redefining <br/> The Standard.</h2>
              <div className="space-y-8 text-white/70 text-lg max-w-[50ch] leading-relaxed font-light">
                <p>
                  Create Beauty was founded on a simple premise: a manicure should be an architectural endeavor, not just a coat of paint. We view nails as a blank canvas for self-expression, blending technical perfection with avant-garde aesthetics.
                </p>
                <p>
                  Our studio is a retreat from the chaos of the city. No overwhelming fumes, no rushed appointments. Just meticulous craftsmanship in a serene, meticulously designed environment.
                </p>
              </div>
              <div className="mt-12 flex gap-12 border-t border-white/10 pt-12">
                <div>
                  <div className="text-4xl font-medium mb-2 tracking-tighter">10+</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">Master Artists</div>
                </div>
                <div>
                  <div className="text-4xl font-medium mb-2 tracking-tighter">5k+</div>
                  <div className="text-white/50 text-sm uppercase tracking-widest">Happy Clients</div>
                </div>
              </div>
            </FadeUp>
          </div>
          <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden p-1.5 ring-1 ring-white/10 bg-white/5">
            <div className="w-full h-full relative rounded-[calc(2.5rem-0.375rem)] overflow-hidden">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Studio" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-40 px-4 md:px-8 max-w-[1400px] mx-auto">
        <FadeUp delay={0.1}>
          <div className="text-center mb-20">
            <div className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 inline-block mb-8 bg-white">
              Client Stories
            </div>
            <h2 className="text-5xl md:text-7xl tracking-tighter leading-none font-medium mb-8">What They Say</h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Eleanor Vance",
              role: "Creative Director",
              text: "The precision here is unmatched. It’s not just a salon; it’s an atelier. My nails have never looked so structurally perfect and healthy."
            },
            {
              name: "Sophia Sterling",
              role: "Architect",
              text: "I appreciate the minimalist aesthetic and the absolute quiet of the studio. It’s the only place I trust for my monthly reset."
            },
            {
              name: "Amara Lin",
              role: "Fashion Editor",
              text: "Their nail art is genuinely high fashion. The technicians understand color theory and negative space better than most designers."
            }
          ].map((review, i) => (
            <FadeUp key={i} delay={0.2 + i * 0.1} className="h-full">
              <div className="bg-white ring-1 ring-black/5 p-10 rounded-[2.5rem] h-full flex flex-col shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} weight="fill" size={16} className="text-black" />
                  ))}
                </div>
                <p className="text-black/80 text-lg leading-relaxed mb-12 flex-1">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/5"></div>
                  <div>
                    <div className="font-medium tracking-tight">{review.name}</div>
                    <div className="text-sm text-black/50">{review.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 px-4 md:px-8 border-t border-black/10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <h2 className="text-4xl tracking-tighter font-medium mb-6">Create Beauty.</h2>
            <p className="text-black/60 max-w-[30ch]">Elevating the art of the manicure through meticulous design and premium care.</p>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs">Studio</h4>
            <ul className="space-y-4 text-black/60">
              <li>142 Style Avenue</li>
              <li>New York, NY 10012</li>
              <li>hello@createbeautynail.com</li>
              <li>+1 (212) 555-0199</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 uppercase tracking-widest text-xs">Hours</h4>
            <ul className="space-y-4 text-black/60">
              <li>Mon - Fri: 9am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-sm text-black/40">
          <p>© {new Date().getFullYear()} Create Beauty. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">TikTok</a>
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
