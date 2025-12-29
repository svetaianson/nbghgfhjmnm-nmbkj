"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react"

const questions = [
  {
    question: "What does it mean when price is trading above the moving average?",
    options: ["The trend is bearish", "The trend is neutral", "The trend is bullish", "The market is ranging"],
    correct: 2,
  },
  {
    question: "What is a 'Golden Cross'?",
    options: [
      "When price crosses above the MA",
      "When a short-term MA crosses above a long-term MA",
      "When a short-term MA crosses below a long-term MA",
      "When two MAs are parallel",
    ],
    correct: 1,
  },
  {
    question: "Which moving average is more responsive to recent price changes?",
    options: [
      "Simple Moving Average (SMA)",
      "Exponential Moving Average (EMA)",
      "Both are equally responsive",
      "Neither responds to price changes",
    ],
    correct: 1,
  },
]

interface MovingAverageQuizProps {
  onBack: () => void
}

export function MovingAverageQuiz({ onBack }: MovingAverageQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
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

  const isQuizComplete = currentQuestion === questions.length - 1 && showResult

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[linear-gradient(315deg,#0a090c_0.38%,#1a092d_99.62%)]" />

      <main className="relative z-10 px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Button onClick={onBack} variant="ghost" className="mb-6 text-white/60 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lesson
          </Button>

          <Card className="border-2 border-[#5F0BE8]/30 bg-[#1a0f2e]/40 backdrop-blur-xl p-8 rounded-2xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-2">Moving Average Quiz</h1>
              <p className="text-white/60">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            {!isQuizComplete ? (
              <>
                <div className="mb-8">
                  <h2 className="text-xl text-white mb-6">{questions[currentQuestion].question}</h2>

                  <RadioGroup
                    value={selectedAnswer?.toString()}
                    onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
                  >
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-4 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors"
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="text-white/80 cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {showResult && (
                  <div
                    className={`mb-6 p-4 rounded-lg border ${selectedAnswer === questions[currentQuestion].correct ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"}`}
                  >
                    <div className="flex items-center gap-2 text-white">
                      {selectedAnswer === questions[currentQuestion].correct ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                          <span>Correct!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-500" />
                          <span>
                            Incorrect. The correct answer is:{" "}
                            {questions[currentQuestion].options[questions[currentQuestion].correct]}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmit}
                      disabled={selectedAnswer === null}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={handleNext} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                      Next Question
                    </Button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6">
                  <div className="text-6xl font-bold text-white mb-4">
                    {score}/{questions.length}
                  </div>
                  <p className="text-xl text-white/80">
                    {score === questions.length
                      ? "Perfect score! 🎉"
                      : score >= questions.length / 2
                        ? "Good job!"
                        : "Keep learning!"}
                  </p>
                </div>
                <Button onClick={onBack} className="bg-purple-600 hover:bg-purple-700 text-white">
                  Back to Lesson
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
