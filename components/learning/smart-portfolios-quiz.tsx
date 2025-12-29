"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"

const questions = [
  {
    question: "What is the primary benefit of portfolio diversification?",
    options: [
      "It guarantees profits on every trade",
      "It reduces overall risk by spreading investments",
      "It maximizes leverage opportunities",
      "It eliminates the need for stop losses",
    ],
    correctAnswer: 1,
    explanation:
      "Diversification reduces overall risk by spreading your capital across different assets, markets, and timeframes. It doesn't guarantee profits but helps protect against major losses.",
  },
  {
    question: "What is a recommended maximum risk per position in a smart portfolio?",
    options: ["10-15% of capital", "5-10% of capital", "1-2% of capital", "0.1-0.5% of capital"],
    correctAnswer: 2,
    explanation:
      "A common best practice is to risk no more than 1-2% of your total capital on any single position. This allows you to have multiple positions while keeping total portfolio risk at 5-10%.",
  },
  {
    question: "Why should you consider asset correlation when building a portfolio?",
    options: [
      "To ensure all assets move in the same direction",
      "To maximize trading volume",
      "To avoid false diversification from highly correlated assets",
      "To increase leverage potential",
    ],
    correctAnswer: 2,
    explanation:
      "Asset correlation matters because trading multiple highly correlated pairs (like EUR/USD and GBP/USD) doesn't provide true diversification. You want assets with different economic drivers to spread risk effectively.",
  },
]

export function SmartPortfoliosQuiz() {
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
