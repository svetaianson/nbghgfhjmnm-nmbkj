"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"

const questions = [
  {
    question: "What is a key difference between forex and cryptocurrency markets?",
    options: [
      "Crypto markets close on weekends",
      "Crypto markets trade 24/7 without closing",
      "Forex is more volatile than crypto",
      "Crypto pairs cannot be traded with leverage",
    ],
    correctAnswer: 1,
    explanation:
      "Cryptocurrency markets trade 24 hours a day, 7 days a week without any market closures. Unlike forex which has trading sessions and closes on weekends, crypto markets never stop.",
  },
  {
    question: "Why should you use smaller position sizes when trading cryptocurrencies?",
    options: [
      "Because crypto has lower profit potential",
      "Because of significantly higher volatility and risk",
      "Because crypto exchanges charge higher fees",
      "Because crypto cannot be traded on margin",
    ],
    correctAnswer: 1,
    explanation:
      "Cryptocurrencies are much more volatile than traditional forex pairs. To manage the higher risk, traders should use smaller position sizes - for example, risking 1% per crypto trade instead of 2% per forex trade.",
  },
  {
    question: "What primarily drives cryptocurrency price movements?",
    options: [
      "Central bank interest rate decisions",
      "GDP and employment reports",
      "Technology updates, regulations, and adoption rates",
      "International trade balances",
    ],
    correctAnswer: 2,
    explanation:
      "Cryptocurrency prices are driven by factors like blockchain technology updates, regulatory news, adoption rates, and market sentiment rather than traditional economic indicators that affect forex pairs.",
  },
]

export function TradingCryptocurrenciesQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const isQuizComplete = showResult && currentQuestion === questions.length - 1

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Test Your Knowledge</h2>
        <p className="text-white/60">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/60 backdrop-blur-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6">{questions[currentQuestion].question}</h3>

        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? showResult
                    ? index === questions[currentQuestion].correctAnswer
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : "border-purple-500 bg-purple-500/10"
                  : showResult && index === questions[currentQuestion].correctAnswer
                    ? "border-green-500 bg-green-500/10"
                    : "border-white/10 bg-white/5 hover:border-purple-500/50"
              } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-white/90">{option}</span>
                {showResult && index === questions[currentQuestion].correctAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                )}
                {showResult && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showResult && (
          <Card className="border border-purple-500/30 bg-purple-950/20 p-4 mb-4">
            <p className="text-white/90">{questions[currentQuestion].explanation}</p>
          </Card>
        )}

        <div className="flex gap-3">
          {!showResult ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
            >
              Submit Answer
            </Button>
          ) : isQuizComplete ? (
            <>
              <Card className="flex-1 border border-purple-500/30 bg-purple-950/20 p-4">
                <p className="text-center text-white">
                  Your Score: <span className="text-2xl font-bold text-purple-400">{score}</span> / {questions.length}
                </p>
              </Card>
              <Button onClick={handleReset} className="bg-purple-600 hover:bg-purple-700 text-white">
                Restart Quiz
              </Button>
            </>
          ) : (
            <Button onClick={handleNext} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
              Next Question
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
