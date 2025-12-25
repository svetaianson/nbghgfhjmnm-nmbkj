"use client"

import { Card } from "@/components/ui/card"

export function HowMuchLessonContent() {
  return (
    <div className="space-y-6">
      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Number #1 question asked by new traders is "how much money can I make trading?" While the answer to that
          question varies depending on a variety of factors such as market conditions, your strategy, and risk
          management, we can explore some scenarios to get an idea of what's possible.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">START WITH WHAT YOU HAVE!</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          Our graduates who become skilled day traders make around{" "}
          <strong className="text-purple-400">1-3% profit per day</strong>.
        </p>
        <ul className="space-y-3 text-white/80 text-base leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              Start trading with <strong className="text-white">$100</strong> that's around{" "}
              <strong className="text-purple-400">$24 - $87 per month</strong>
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 font-bold">•</span>
            <span>
              Start with <strong className="text-white">$5k</strong> and 1-3% per day totals to anywhere between{" "}
              <strong className="text-purple-400">$674 and $2,262</strong> of profit per month.
            </span>
          </li>
        </ul>
        <p className="text-white/80 text-base leading-relaxed mt-4">
          Not too bad right? While it's possible to start with as low as $10 with modern trading platforms, to make a
          decent profit and have some leeway in your trades it's best to start with{" "}
          <strong className="text-purple-400">$1k - $5k</strong>.
        </p>
        <p className="text-white/60 italic text-sm mt-4">
          It's ok to start with less, it will just take longer to build up your portfolio.
        </p>
      </Card>

      <Card className="border border-[#5F0BE8]/20 bg-[#1a0f2e]/60 backdrop-blur-sm p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-4">IS IT EASY TO LEARN TO TRADE?</h2>
        <p className="text-white/80 text-base leading-relaxed mb-4">There are two answers to the question:</p>

        <div className="space-y-4 mb-4">
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <p className="text-white/90 font-semibold mb-2">Answer 1:</p>
            <p className="text-white/80 text-base leading-relaxed">
              Yes, learning how to trade is extremely easy. You click "buy" if you believe the price will rise, or click
              "sell" if you think it will fall.
            </p>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
            <p className="text-white/90 font-semibold mb-2">Answer 2:</p>
            <p className="text-white/80 text-base leading-relaxed">
              Yes, learning how to trade is extremely easy, but making consistent profits is a big challenge.
            </p>
          </div>
        </div>

        <p className="text-white/80 text-base leading-relaxed mb-4">
          There's a common misconception that trading is only for the ultra-rich or exceptionally intelligent
          individuals, but this is simply not true.
        </p>

        <p className="text-white/80 text-base leading-relaxed mb-4">
          Trading is a skill, much like playing chess or learning a new language, and anyone can learn it with enough
          time and practice. Your age, background, education, and current financial situation do not matter. What
          matters most is understanding this:
        </p>

        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 mt-4">
          <p className="text-white text-base leading-relaxed font-medium">
            Regardless of your current circumstances, the path to consistent profitability starts with{" "}
            <strong className="text-purple-300">learning the fundamentals</strong>,{" "}
            <strong className="text-purple-300">developing a solid trading plan</strong>, and applying{" "}
            <strong className="text-purple-300">basic risk management principles</strong>.
          </p>
        </div>

        <p className="text-white/60 text-base leading-relaxed mt-4">
          In the upcoming lessons Goforex will help you learn each concept in detail.
        </p>
      </Card>
    </div>
  )
}
