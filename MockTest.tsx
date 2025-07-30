/**
 * Enhanced mock test component with detailed solutions, video explanations,
 * collaborative features, and mobile-optimized design
 */
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Flag,
  Eye,
  Brain,
  Timer,
  PlayCircle,
  BookOpen,
  Users,
  MessageSquare,
  Share2,
  Download,
  Bookmark,
  Lightbulb,
  Video,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Star
} from 'lucide-react';

interface Question {
  id: number;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  detailedSolution: string;
  videoExplanation?: string;
  youtubeVideoId?: string;
  conceptVideo?: string;
  timeLimit: number;
  tags: string[];
  previousYearQuestion?: boolean;
  examYear?: string;
  relatedQuestions?: number[];
}

interface MockTestProps {
  examType?: string;
  duration?: number;
  questionCount?: number;
}

export default function MockTest({ 
  examType = "JEE Main", 
  duration = 180, 
  questionCount = 90 
}: MockTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(duration * 60);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [viewingMode, setViewingMode] = useState<'test' | 'review' | 'solutions'>('test');
  const [collaborativeMode, setCollaborativeMode] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(42);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<number>>(new Set());
  const [questionRatings, setQuestionRatings] = useState<{ [key: number]: number }>({});

  // Enhanced AI-generated questions with detailed solutions and video links
  const questions: Question[] = [
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Calculus',
      difficulty: 'Medium',
      question: 'Find the derivative of f(x) = x³ + 2x² - 5x + 3',
      options: ['3x² + 4x - 5', '3x² + 4x + 5', 'x³ + 4x - 5', '3x + 4x² - 5'],
      correctAnswer: 0,
      explanation: 'Using the power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5x) = -5, d/dx(3) = 0',
      detailedSolution: `
**Step-by-Step Solution:**

1. **Identify the function**: f(x) = x³ + 2x² - 5x + 3

2. **Apply the power rule**: For any term ax^n, the derivative is n·ax^(n-1)

3. **Differentiate each term**:
   - d/dx(x³) = 3x²
   - d/dx(2x²) = 2 × 2x = 4x
   - d/dx(-5x) = -5
   - d/dx(3) = 0 (constant)

4. **Combine the results**: f'(x) = 3x² + 4x - 5

**Key Concepts:**
- Power Rule: d/dx(x^n) = nx^(n-1)
- Derivative of constant = 0
- Linearity of derivatives

**Common Mistakes to Avoid:**
- Forgetting to multiply by the coefficient
- Incorrectly handling negative signs
      `,
      youtubeVideoId: 'WUvTyaaNkzM',
      conceptVideo: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/1e78c1ee-bc45-4cf9-82fd-a3d7775afefb.jpg',
      timeLimit: 120,
      tags: ['power-rule', 'polynomial', 'basic-calculus'],
      previousYearQuestion: true,
      examYear: '2023',
      relatedQuestions: [2, 15, 23]
    },
    {
      id: 2,
      subject: 'Physics',
      topic: 'Mechanics',
      difficulty: 'Hard',
      question: 'A ball is thrown vertically upward with initial velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)',
      options: ['15 m', '20 m', '25 m', '30 m'],
      correctAnswer: 1,
      explanation: 'Using v² = u² - 2gh, at maximum height v = 0. So 0 = 400 - 20h, h = 20 m',
      detailedSolution: `
**Problem Analysis:**
- Initial velocity (u) = 20 m/s (upward)
- Final velocity (v) = 0 m/s (at maximum height)
- Acceleration due to gravity (g) = 10 m/s² (downward)

**Method 1: Using Kinematic Equation**
v² = u² + 2as

Where a = -g = -10 m/s² (negative because gravity opposes motion)

0² = 20² + 2(-10)h
0 = 400 - 20h
20h = 400
h = 20 m

**Method 2: Using Energy Conservation**
Initial KE = Final PE
½mu² = mgh
½(20)² = gh
200 = 10h
h = 20 m

**Verification:**
Time to reach maximum height: v = u + at
0 = 20 + (-10)t
t = 2 seconds

Using s = ut + ½at²:
h = 20(2) + ½(-10)(2)²
h = 40 - 20 = 20 m ✓
      `,
      youtubeVideoId: 'hG9SzQzUTM0',
      conceptVideo: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/701f9cf8-2f0a-4dba-934a-f5c88cd4a725.jpg',
      timeLimit: 150,
      tags: ['kinematics', 'projectile-motion', 'energy'],
      previousYearQuestion: true,
      examYear: '2022',
      relatedQuestions: [8, 12, 19]
    },
    {
      id: 3,
      subject: 'Chemistry',
      topic: 'Organic Chemistry',
      difficulty: 'Easy',
      question: 'What is the IUPAC name of CH₃CH₂CH₂OH?',
      options: ['Propanol', '1-Propanol', 'Propan-1-ol', 'All of the above'],
      correctAnswer: 2,
      explanation: 'The IUPAC name for primary alcohols uses the suffix -ol with position number',
      detailedSolution: `
**IUPAC Naming Rules for Alcohols:**

1. **Find the longest carbon chain** containing the -OH group
   - CH₃-CH₂-CH₂-OH has 3 carbons → propane base

2. **Number the chain** to give -OH the lowest possible number
   - Starting from the -OH end: C1-C2-C3
   - -OH is on carbon 1

3. **Apply naming convention**:
   - Base name: propane
   - Functional group: -ol (alcohol)
   - Position: 1
   - IUPAC name: **propan-1-ol**

**Why other options are incorrect:**
- "Propanol" - lacks position number (ambiguous)
- "1-Propanol" - older naming system, not current IUPAC
- "All of the above" - incorrect because IUPAC specifically requires "propan-1-ol"

**Memory Aid:**
Primary alcohol → carbon 1
Secondary alcohol → carbon 2, 3, etc.
Always use "propan-1-ol" format for IUPAC naming
      `,
      youtubeVideoId: 'fmuYGQ7ZCvU',
      conceptVideo: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/8ab4aaea-3f18-4550-a520-60eb90ffc33e.jpg',
      timeLimit: 90,
      tags: ['nomenclature', 'alcohols', 'IUPAC'],
      previousYearQuestion: false,
      relatedQuestions: [5, 11, 17]
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (testStarted && !testCompleted && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setTestCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testStarted, testCompleted, timeRemaining]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    if (viewingMode === 'test') {
      setSelectedAnswers(prev => ({
        ...prev,
        [currentQuestion]: optionIndex
      }));
    }
  };

  const toggleMarkForReview = () => {
    setMarkedForReview(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion)) {
        newSet.delete(currentQuestion);
      } else {
        newSet.add(currentQuestion);
      }
      return newSet;
    });
  };

  const toggleBookmark = () => {
    setBookmarkedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion)) {
        newSet.delete(currentQuestion);
      } else {
        newSet.add(currentQuestion);
      }
      return newSet;
    });
  };

  const rateQuestion = (rating: number) => {
    setQuestionRatings(prev => ({
      ...prev,
      [currentQuestion]: rating
    }));
  };

  const getQuestionStatus = (index: number) => {
    if (selectedAnswers[index] !== undefined && markedForReview.has(index)) {
      return 'answered-marked';
    } else if (selectedAnswers[index] !== undefined) {
      return 'answered';
    } else if (markedForReview.has(index)) {
      return 'marked';
    }
    return 'not-attempted';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'answered': return 'bg-green-500 text-white';
      case 'answered-marked': return 'bg-purple-500 text-white';
      case 'marked': return 'bg-yellow-500 text-white';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const shareQuestion = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${examType} Question - ${questions[currentQuestion].topic}`,
          text: questions[currentQuestion].question,
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  const downloadSolution = () => {
    const question = questions[currentQuestion];
    const content = `
${examType} - ${question.subject}
Topic: ${question.topic}
Difficulty: ${question.difficulty}

Question: ${question.question}

Options:
${question.options.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`).join('\n')}

Correct Answer: ${String.fromCharCode(65 + question.correctAnswer)}

Detailed Solution:
${question.detailedSolution}

Tags: ${question.tags.join(', ')}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solution-${question.id}-${question.topic.replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!testStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl flex items-center justify-center">
              <Brain className="h-8 w-8 mr-3 text-blue-600" />
              {examType} Mock Test
            </CardTitle>
            <CardDescription className="text-lg">AI-Generated Practice Test with Video Solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">{questionCount}</div>
                <div className="text-sm text-blue-800 mt-1">Questions</div>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600">{duration}</div>
                <div className="text-sm text-green-800 mt-1">Minutes</div>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">+4/-1</div>
                <div className="text-sm text-purple-800 mt-1">Marking</div>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-orange-600 flex items-center justify-center">
                  <Users className="h-6 w-6 mr-1" />
                  {onlineUsers}
                </div>
                <div className="text-sm text-orange-800 mt-1">Online Now</div>
              </div>
            </div>

            {/* Enhanced Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">🚀 New Features Available:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Video className="h-4 w-4 text-blue-600" />
                    <span>Video explanations for every question</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-green-600" />
                    <span>Detailed step-by-step solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span>Collaborative mode with live discussions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Bookmark className="h-4 w-4 text-orange-600" />
                    <span>Bookmark questions for later review</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">📚 Test Instructions:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Each question carries 4 marks for correct answer</li>
                  <li>• 1 mark will be deducted for wrong answer</li>
                  <li>• No marks for unattempted questions</li>
                  <li>• You can mark questions for review</li>
                  <li>• AI will analyze your performance and provide feedback</li>
                  <li>• Access video solutions after test completion</li>
                </ul>
              </div>
            </div>

            {/* Mode Selection */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setTestStarted(true)} 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
              >
                <Timer className="h-5 w-5 mr-2" />
                Start Timed Test
              </Button>
              <Button 
                onClick={() => {
                  setTestStarted(true);
                  setViewingMode('review');
                }} 
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                <Eye className="h-5 w-5 mr-2" />
                Practice Mode
              </Button>
              <Button 
                onClick={() => {
                  setCollaborativeMode(true);
                  setTestStarted(true);
                }} 
                variant="outline"
                className="px-8 py-4 text-lg bg-purple-50 border-purple-200"
              >
                <Users className="h-5 w-5 mr-2" />
                Collaborative Mode
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (testCompleted && !showSolutions) {
    const score = Object.entries(selectedAnswers).reduce((acc, [questionIndex, selectedOption]) => {
      const question = questions[parseInt(questionIndex)];
      if (question && selectedOption === question.correctAnswer) {
        return acc + 4;
      } else if (selectedOption !== undefined) {
        return acc - 1;
      }
      return acc;
    }, 0);

    const correctAnswers = Object.entries(selectedAnswers).filter(([idx, ans]) => 
      questions[parseInt(idx)]?.correctAnswer === ans
    ).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 p-4">
        <Card className="max-w-6xl mx-auto">
          <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl">🎉 Test Completed!</CardTitle>
            <CardDescription className="text-green-100 text-lg">Here's your comprehensive performance analysis</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600">{score}</div>
                <div className="text-sm text-green-800 mt-1">Total Score</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600">
                  {Object.keys(selectedAnswers).length}
                </div>
                <div className="text-sm text-blue-800 mt-1">Attempted</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-600">{correctAnswers}</div>
                <div className="text-sm text-purple-800 mt-1">Correct</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl border-2 border-orange-200">
                <div className="text-4xl font-bold text-orange-600">
                  {Math.round((correctAnswers / Object.keys(selectedAnswers).length) * 100)}%
                </div>
                <div className="text-sm text-orange-800 mt-1">Accuracy</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => setShowSolutions(true)}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Detailed Solutions
              </Button>
              <Button 
                onClick={() => setViewingMode('solutions')}
                variant="outline"
                className="px-6 py-3"
              >
                <Video className="h-4 w-4 mr-2" />
                Watch Video Explanations
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Share2 className="h-4 w-4 mr-2" />
                Share Results
              </Button>
              <Button variant="outline" className="px-6 py-3">
                <Brain className="h-4 w-4 mr-2" />
                AI Performance Analysis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isCorrectAnswer = selectedAnswers[currentQuestion] === currentQ.correctAnswer;
  const hasAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">{examType} Mock Test</h1>
            <Badge variant="secondary">
              Question {currentQuestion + 1} of {questions.length}
            </Badge>
            {collaborativeMode && (
              <Badge className="bg-purple-100 text-purple-800">
                <Users className="h-3 w-3 mr-1" />
                {onlineUsers} online
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-4">
            {viewingMode === 'test' && (
              <div className="flex items-center space-x-2 text-lg font-mono">
                <Clock className="h-5 w-5 text-red-600" />
                <span className={timeRemaining < 600 ? 'text-red-600' : 'text-gray-700'}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
            )}
            <Button 
              onClick={() => setTestCompleted(true)}
              variant="outline"
              className="bg-red-50 border-red-200 hover:bg-red-100"
            >
              {viewingMode === 'test' ? 'Submit Test' : 'Exit Review'}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Enhanced Question Panel */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{currentQ.subject}</Badge>
                    <Badge variant="outline">{currentQ.topic}</Badge>
                    <Badge className={
                      currentQ.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      currentQ.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {currentQ.difficulty}
                    </Badge>
                    {currentQ.previousYearQuestion && (
                      <Badge className="bg-blue-100 text-blue-800">
                        {currentQ.examYear} Question
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleBookmark}
                      className={bookmarkedQuestions.has(currentQuestion) ? 
                        'bg-yellow-100 border-yellow-300' : ''}
                    >
                      <Bookmark className="h-4 w-4 mr-1" />
                      {bookmarkedQuestions.has(currentQuestion) ? 'Saved' : 'Save'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={toggleMarkForReview}
                      className={markedForReview.has(currentQuestion) ? 
                        'bg-orange-100 border-orange-300' : ''}
                    >
                      <Flag className="h-4 w-4 mr-1" />
                      {markedForReview.has(currentQuestion) ? 'Marked' : 'Mark'}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={shareQuestion}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-lg leading-relaxed font-medium">
                    {currentQ.question}
                  </div>
                  
                  <div className="space-y-3">
                    {currentQ.options.map((option, index) => {
                      let optionClass = `p-4 border rounded-lg cursor-pointer transition-all duration-200 `;
                      
                      if (viewingMode === 'solutions' || showSolutions) {
                        if (index === currentQ.correctAnswer) {
                          optionClass += 'border-green-500 bg-green-50 ring-2 ring-green-200';
                        } else if (selectedAnswers[currentQuestion] === index && index !== currentQ.correctAnswer) {
                          optionClass += 'border-red-500 bg-red-50 ring-2 ring-red-200';
                        } else {
                          optionClass += 'border-gray-200 bg-gray-50';
                        }
                      } else {
                        if (selectedAnswers[currentQuestion] === index) {
                          optionClass += 'border-blue-500 bg-blue-50 ring-2 ring-blue-200';
                        } else {
                          optionClass += 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                        }
                      }

                      return (
                        <div
                          key={index}
                          className={optionClass}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              (viewingMode === 'solutions' || showSolutions) && index === currentQ.correctAnswer
                                ? 'border-green-500 bg-green-500'
                                : selectedAnswers[currentQuestion] === index
                                ? 'border-blue-500 bg-blue-500'
                                : 'border-gray-300'
                            }`}>
                              {((viewingMode === 'solutions' || showSolutions) && index === currentQ.correctAnswer) ||
                               (selectedAnswers[currentQuestion] === index) ? (
                                <CheckCircle className="h-4 w-4 text-white" />
                              ) : null}
                            </div>
                            <span className="font-medium text-gray-700">
                              {String.fromCharCode(65 + index)}.
                            </span>
                            <span className="flex-1">{option}</span>
                            {(viewingMode === 'solutions' || showSolutions) && index === currentQ.correctAnswer && (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-500">Tags:</span>
                    {currentQ.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution Panel */}
            {(showSolutions || viewingMode === 'solutions') && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                    Detailed Solution
                    <div className="ml-auto flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={downloadSolution}>
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                      <div className="flex items-center space-x-1">
                        <button onClick={() => rateQuestion(1)}>
                          <ThumbsUp className={`h-4 w-4 ${questionRatings[currentQuestion] === 1 ? 'text-green-600' : 'text-gray-400'}`} />
                        </button>
                        <button onClick={() => rateQuestion(-1)}>
                          <ThumbsDown className={`h-4 w-4 ${questionRatings[currentQuestion] === -1 ? 'text-red-600' : 'text-gray-400'}`} />
                        </button>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Quick Explanation */}
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <h4 className="font-medium text-blue-800 mb-2">Quick Explanation:</h4>
                      <p className="text-blue-700">{currentQ.explanation}</p>
                    </div>

                    {/* Detailed Solution */}
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {currentQ.detailedSolution}
                      </div>
                    </div>

                    {/* Video Explanations */}
                    {currentQ.youtubeVideoId && (
                      <div className="space-y-4">
                        <h4 className="font-medium text-lg flex items-center">
                          <Video className="h-5 w-5 mr-2 text-red-600" />
                          Video Explanation
                        </h4>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <iframe
                            src={`https://www.youtube.com/embed/${currentQ.youtubeVideoId}`}
                            title="Solution Video"
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Watch on YouTube
                        </Button>
                      </div>
                    )}

                    {/* Concept Video */}
                    {currentQ.conceptVideo && (
                      <div className="space-y-4">
                        <h4 className="font-medium text-lg">Related Concept</h4>
                        <img 
                          src={currentQ.conceptVideo} 
                          alt="Concept illustration"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* Related Questions */}
                    {currentQ.relatedQuestions && currentQ.relatedQuestions.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-lg">Related Questions</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentQ.relatedQuestions.map((qId, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => setCurrentQuestion(qId - 1)}
                            >
                              Question {qId}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Collaborative Discussion Panel */}
            {collaborativeMode && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Live Discussion
                    <Badge className="ml-2 bg-green-100 text-green-800">
                      {Math.floor(Math.random() * 15) + 5} active
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-64 overflow-y-auto">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">Sarah_M</span>
                        <span className="text-xs text-gray-500">2 min ago</span>
                      </div>
                      <p className="text-sm">Can someone explain why option C is wrong? I thought the power rule applies differently here.</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">Math_Genius_99</span>
                        <span className="text-xs text-gray-500">1 min ago</span>
                      </div>
                      <p className="text-sm">@Sarah_M Remember that the power rule is d/dx(x^n) = nx^(n-1). For -5x, the derivative is just -5!</p>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <input 
                      placeholder="Join the discussion..." 
                      className="flex-1 px-3 py-2 border rounded-lg text-sm"
                    />
                    <Button size="sm">Send</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="sm:w-auto w-full"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <div className="flex gap-2">
                {viewingMode !== 'solutions' && (
                  <Button
                    variant="outline"
                    onClick={() => setShowSolutions(!showSolutions)}
                    className="flex-1 sm:flex-none"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showSolutions ? 'Hide' : 'Show'} Solution
                  </Button>
                )}
              </div>
              <Button
                onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                disabled={currentQuestion === questions.length - 1}
                className="sm:w-auto w-full"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Enhanced Question Navigation Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Question Palette</CardTitle>
                <CardDescription>Click on question number to navigate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {questions.map((_, index) => {
                    const status = getQuestionStatus(index);
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentQuestion(index)}
                        className={`relative w-10 h-10 rounded text-sm font-medium border transition-all ${
                          index === currentQuestion
                            ? 'border-blue-500 bg-blue-500 text-white ring-2 ring-blue-200'
                            : getStatusColor(status)
                        }`}
                      >
                        {index + 1}
                        {bookmarkedQuestions.has(index) && (
                          <Star className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 fill-current" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Enhanced Legend */}
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded" />
                    <span>Answered ({Object.keys(selectedAnswers).length})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded" />
                    <span>Answered & Marked ({Array.from(markedForReview).filter(q => selectedAnswers[q] !== undefined).length})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded" />
                    <span>Marked for Review ({markedForReview.size})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-200 rounded" />
                    <span>Not Attempted ({questions.length - Object.keys(selectedAnswers).length})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Bookmarked ({bookmarkedQuestions.size})</span>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{Object.keys(selectedAnswers).length}/{questions.length}</span>
                    </div>
                    <Progress 
                      value={(Object.keys(selectedAnswers).length / questions.length) * 100} 
                      className="h-2"
                    />
                  </div>

                  {viewingMode === 'test' && (
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Time Used</span>
                        <span>{Math.floor(((duration * 60) - timeRemaining) / 60)}m</span>
                      </div>
                      <Progress 
                        value={((duration * 60) - timeRemaining) / (duration * 60) * 100} 
                        className="h-2"
                      />
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Bookmark className="h-4 w-4 mr-2" />
                    View Bookmarked ({bookmarkedQuestions.size})
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Flag className="h-4 w-4 mr-2" />
                    Review Marked ({markedForReview.size})
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
