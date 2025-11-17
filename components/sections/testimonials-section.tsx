"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { forwardRef } from "react"

export const TestimonialsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="mx-auto mt-16 sm:mt-24 max-w-7xl px-[20px] sm:px-[20px] lg:px-[20px] lg:mt-32 pb-16 opacity-0"
    >
      <div className="text-center">
        <h2 className="mb-2 text-3xl sm:text-4xl font-bold text-white lg:text-5xl">What our traders are saying</h2>
        <div className="mx-auto mb-12 sm:mb-16 h-1 w-64 sm:w-96 bg-gradient-to-r from-[#6D1D7D] via-[#5F0BE8] to-[#6D1D7D]" />
      </div>

      <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 - Roberto Lima */}
        <div className="testimonial-card opacity-0 rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                  <Image
                    src="/professional-trader-man-in-suit.jpg"
                    alt="Roberto Lima"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">Roberto Lima</h3>
              <p className="text-sm text-gray-300">
                Day Trader • <span className="text-[#8b5cf6]">42</span> years
              </p>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
              VERIFIED
            </div>
          </div>
          <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
            <p className="text-base leading-relaxed text-gray-200">
              "After 10 years on the market, finally find a tool that really it works. My results have improved 300%!"
            </p>
          </div>
        </div>

        {/* Testimonial 2 - Isabella Alves */}
        <div className="testimonial-card opacity-0 rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                  <Image
                    src="/professional-trader-woman.jpg"
                    alt="Isabella Alves"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">Isabella Alves</h3>
              <p className="text-sm text-gray-300">
                Swing Trader • <span className="text-[#8b5cf6]">36</span> years
              </p>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
              VERIFIED
            </div>
          </div>
          <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
            <p className="text-base leading-relaxed text-gray-200">
              "As the mother of two children, I need fast and efficient analysis. NEXTGREEN allows me to operate in the
              intervals of my day!"
            </p>
          </div>
        </div>

        {/* Testimonial 3 - Carlos Eduardo */}
        <div className="testimonial-card opacity-0 rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                  <Image
                    src="/young-trader-student.jpg"
                    alt="Carlos Eduardo"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">Carlos Eduardo</h3>
              <p className="text-sm text-gray-300">
                Scalper • <span className="text-[#8b5cf6]">23</span> years old
              </p>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-4 py-1.5 text-xs font-semibold text-white">
              VERIFIED
            </div>
          </div>
          <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
            <p className="text-base leading-relaxed text-gray-200">
              "Economics student who does trading to pay for college. With the NEXTGREEN, I can be consistent in
              operations!"
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {/* Testimonial 1 - Roberto Lima */}
            <CarouselItem className="pl-2 md:pl-4">
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/professional-trader-man-in-suit.jpg"
                          alt="Roberto Lima"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Roberto Lima</h3>
                    <p className="text-sm text-gray-300">
                      Day Trader • <span className="text-[#8b5cf6]">42</span> years
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-3 py-1 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "After 10 years on the market, finally find a tool that really it works. My results have improved
                    300%!"
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Testimonial 2 - Isabella Alves */}
            <CarouselItem className="pl-2 md:pl-4">
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/professional-trader-woman.jpg"
                          alt="Isabella Alves"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Isabella Alves</h3>
                    <p className="text-sm text-gray-300">
                      Swing Trader • <span className="text-[#8b5cf6]">36</span> years
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-3 py-1 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "As the mother of two children, I need fast and efficient analysis. NEXTGREEN allows me to operate
                    in the intervals of my day!"
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* Testimonial 3 - Carlos Eduardo */}
            <CarouselItem className="pl-2 md:pl-4">
              <div className="rounded-3xl border-2 border-[#5F0BE8]/50 bg-[#1a0f2e]/40 p-6 shadow-[0_0_30px_rgba(95,11,232,0.3)] backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8b5cf6] via-[#5F0BE8] to-[#6D1D7D] p-[2px]">
                      <div className="h-full w-full overflow-hidden rounded-full bg-[#1a0f2e]">
                        <Image
                          src="/young-trader-student.jpg"
                          alt="Carlos Eduardo"
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">Carlos Eduardo</h3>
                    <p className="text-sm text-gray-300">
                      Scalper • <span className="text-[#8b5cf6]">23</span> years old
                    </p>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] px-3 py-1 text-xs font-semibold text-white">
                    VERIFIED
                  </div>
                </div>
                <div className="rounded-2xl border border-[#5F0BE8]/30 bg-[#0f0820]/60 p-6 shadow-[inset_0_0_20px_rgba(95,11,232,0.2)]">
                  <p className="text-base leading-relaxed text-gray-200">
                    "Economics student who does trading to pay for college. With the NEXTGREEN, I can be consistent in
                    operations!"
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>

          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselPrevious className="static translate-x-0 translate-y-0 h-12 w-12 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] border-none text-white hover:from-[#5F0BE8] hover:to-[#6D1D7D] shadow-lg" />

            <div className="flex justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
              <div className="h-2 w-2 rounded-full bg-[#5F0BE8]/50" />
            </div>

            <CarouselNext className="static translate-x-0 translate-y-0 h-12 w-12 bg-gradient-to-r from-[#6D1D7D] to-[#5F0BE8] border-none text-white hover:from-[#5F0BE8] hover:to-[#6D1D7D] shadow-lg" />
          </div>
        </Carousel>
      </div>
    </section>
  )
})

TestimonialsSection.displayName = "TestimonialsSection"
