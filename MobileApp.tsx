/**
 * Mobile-optimized app component with touch-friendly interface,
 * gesture support, and mobile-first responsive design
 */
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Menu,
  X,
  Home,
  BookOpen,
  BarChart3,
  Users,
  Video,
  Search,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  CheckCircle,
  Clock,
  Target,
  Award,
  Star,
  MessageSquare,
  Share2,
  Download,
  Bookmark,
  Heart,
  ThumbsUp,
  Eye,
  Filter,
  Plus,
  Camera,
  Mic,
  Send,
  Phone,
  VideoIcon,
  MoreVertical
} from 'lucide-react';

interface MobileAppProps {
  initialView?: 'home' | 'test' | 'dashboard' | 'collaborative' | 'solutions';
}

export default function MobileApp({ initialView = 'home' }: MobileAppProps) {
  const [currentView, setCurrentView] = useState(initialView);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTest, setCurrentTest] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [testTimer, setTestTimer] = useState(1800); // 30 minutes
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mobile-optimized navigation
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'test', label: 'Tests', icon: BookOpen },
    { id: 'dashboard', label: 'Progress', icon: BarChart3 },
    { id: 'collaborative', label: 'Study', icon: Users },
    { id: 'solutions', label: 'Solutions', icon: Video }
  ];

  // Sample mobile-optimized content
  const mobileQuestions = [
    {
      id: 1,
      subject: 'Math',
      question: 'Find derivative of x³ + 2x² - 5x + 3',
      options: ['3x² + 4x - 5', '3x² + 4x + 5', 'x³ + 4x - 5', '3x + 4x² - 5'],
      correct: 0,
      explanation: 'Apply power rule to each term',
      videoId: 'WUvTyaaNkzM',
      difficulty: 'Medium'
    },
    {
      id: 2,
      subject: 'Physics',
      question: 'Ball thrown up at 20 m/s. Max height?',
      options: ['15 m', '20 m', '25 m', '30 m'],
      correct: 1,
      explanation: 'Use v² = u² + 2as with v=0 at max height',
      videoId: 'hG9SzQzUTM0',
      difficulty: 'Hard'
    }
  ];

  // Timer effect for mobile test
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentTest !== null && testTimer > 0) {
      interval = setInterval(() => {
        setTestTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentTest, testTimer]);

  // Format time for mobile display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Swipe gesture handler
  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentTest !== null) {
      const questions = mobileQuestions;
      if (direction === 'right' && currentTest > 0) {
        setCurrentTest(currentTest - 1);
        setSelectedAnswer(null);
        setShowSolution(false);
      } else if (direction === 'left' && currentTest < questions.length - 1) {
        setCurrentTest(currentTest + 1);
        setSelectedAnswer(null);
        setShowSolution(false);
      }
    }
  };

  // Touch event handlers
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleSwipe('left');
    if (isRightSwipe) handleSwipe('right');
  };

  const HomeView = () => (
    <div className="space-y-6 p-4">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <div>
              <div className="text-2xl font-bold">78%</div>
              <div className="text-xs text-gray-600">Avg Score</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-green-600" />
            <div>
              <div className="text-2xl font-bold">#247</div>
              <div className="text-xs text-gray-600">Rank</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-purple-600" />
            <div>
              <div className="text-2xl font-bold">42h</div>
              <div className="text-xs text-gray-600">Study Time</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-orange-600" />
            <div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-gray-600">Tests</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={() => {
              setCurrentTest(0);
              setCurrentView('test');
            }}
            className="h-20 flex-col space-y-2"
          >
            <Play className="h-6 w-6" />
            <span>Start Test</span>
          </Button>
          <Button 
            variant="outline"
            onClick={() => setCurrentView('solutions')}
            className="h-20 flex-col space-y-2"
          >
            <Video className="h-6 w-6" />
            <span>Watch Videos</span>
          </Button>
          <Button 
            variant="outline"
            onClick={() => setCurrentView('dashboard')}
            className="h-20 flex-col space-y-2"
          >
            <BarChart3 className="h-6 w-6" />
            <span>View Progress</span>
          </Button>
          <Button 
            variant="outline"
            onClick={() => setCurrentView('collaborative')}
            className="h-20 flex-col space-y-2"
          >
            <Users className="h-6 w-6" />
            <span>Join Study</span>
          </Button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Recent Activity</h3>
        <div className="space-y-2">
          {[
            { action: 'Completed JEE Mock Test #15', score: '85%', time: '2 hours ago' },
            { action: 'Watched Calculus video', score: 'Completed', time: '5 hours ago' },
            { action: 'Joined Physics study group', score: 'Active', time: '1 day ago' }
          ].map((activity, index) => (
            <Card key={index} className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-sm">{activity.action}</div>
                  <div className="text-xs text-gray-600">{activity.time}</div>
                </div>
                <Badge variant="secondary" className="text-xs">{activity.score}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const TestView = () => {
    if (currentTest === null) {
      return (
        <div className="p-4 space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Select a Test</h2>
            <p className="text-gray-600">Choose from our AI-generated practice tests</p>
          </div>
          <div className="space-y-3">
            {mobileQuestions.map((question, index) => (
              <Card key={question.id} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">Question {question.id}</div>
                    <div className="text-sm text-gray-600">{question.subject}</div>
                    <Badge className={
                      question.difficulty === 'Easy' ? 'bg-green-100 text-green-800 text-xs mt-1' :
                      question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 text-xs mt-1' :
                      'bg-red-100 text-red-800 text-xs mt-1'
                    }>
                      {question.difficulty}
                    </Badge>
                  </div>
                  <Button 
                    onClick={() => setCurrentTest(index)}
                    size="sm"
                  >
                    Start
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    const question = mobileQuestions[currentTest];
    
    return (
      <div 
        className="h-full flex flex-col"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Test Header */}
        <div className="bg-white border-b p-4 flex items-center justify-between sticky top-0 z-10">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setCurrentTest(null)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-center">
            <div className="font-medium">Question {currentTest + 1}/{mobileQuestions.length}</div>
            <div className="text-sm text-gray-600">{question.subject}</div>
          </div>
          <div className="text-sm font-mono text-red-600">
            {formatTime(testTimer)}
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 p-4 space-y-6 overflow-y-auto">
          <div className="space-y-2">
            <Badge className={
              question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }>
              {question.difficulty}
            </Badge>
            <h3 className="text-lg font-medium leading-relaxed">{question.question}</h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                className={`w-full p-4 text-left border rounded-lg transition-all ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 active:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && (
                      <CheckCircle className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="font-medium">{String.fromCharCode(65 + index)}.</span>
                  <span className="flex-1">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Solution */}
          {showSolution && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg ${
                    selectedAnswer === question.correct
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <div className="flex items-center space-x-2">
                      {selectedAnswer === question.correct ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <X className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-medium">
                        {selectedAnswer === question.correct ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="text-sm mt-2">
                      Correct answer: {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Explanation:</h4>
                    <p className="text-sm text-gray-700">{question.explanation}</p>
                  </div>

                  {/* Video Solution */}
                  {question.videoId && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Video Explanation:</h4>
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${question.videoId}`}
                          title="Solution Video"
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="bg-white border-t p-4 space-y-3">
          {!showSolution ? (
            <Button 
              onClick={() => setShowSolution(true)}
              className="w-full"
              disabled={selectedAnswer === null}
            >
              Check Answer
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button 
                variant="outline"
                onClick={() => handleSwipe('right')}
                disabled={currentTest === 0}
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button 
                onClick={() => handleSwipe('left')}
                disabled={currentTest === mobileQuestions.length - 1}
                className="flex-1"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="flex justify-center space-x-2">
            {mobileQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentTest 
                    ? 'bg-blue-500' 
                    : index < currentTest 
                    ? 'bg-green-500' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const SolutionsView = () => (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Video Solutions</h2>
        <p className="text-gray-600 text-sm">Watch detailed explanations for every question</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search topics..."
          className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Video Grid */}
      <div className="space-y-4">
        {mobileQuestions.map((question) => (
          <Card key={question.id}>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="aspect-video bg-gray-100 rounded-lg relative overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${question.videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <Play className="h-12 w-12 text-white" />
                  </button>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black bg-opacity-75 text-white text-xs">
                      HD
                    </Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">{question.subject} - Question {question.id}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{question.question}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{question.difficulty}</Badge>
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        2.1K
                      </span>
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        98%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const CollaborativeView = () => (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Study Together</h2>
        <p className="text-gray-600 text-sm">Join study groups and collaborate with peers</p>
      </div>

      {/* Active Study Sessions */}
      <div className="space-y-3">
        <h3 className="font-semibold">Live Study Sessions</h3>
        {[
          { title: 'JEE Math Problem Solving', participants: 24, subject: 'Mathematics', isLive: true },
          { title: 'Physics Doubt Clearing', participants: 18, subject: 'Physics', isLive: true },
          { title: 'Chemistry Reactions', participants: 15, subject: 'Chemistry', isLive: false }
        ].map((session, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-sm">{session.title}</h4>
                    {session.isLive && (
                      <Badge className="bg-red-500 text-white text-xs animate-pulse">LIVE</Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                    <span>{session.participants} participants</span>
                    <Badge variant="outline" className="text-xs">{session.subject}</Badge>
                  </div>
                </div>
                <Button size="sm" disabled={!session.isLive}>
                  {session.isLive ? 'Join' : 'Watch'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Chat */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Help</CardTitle>
          <CardDescription>Ask questions to the community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask a quick question..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <Button size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Camera className="h-4 w-4 mr-1" />
                Photo
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Mic className="h-4 w-4 mr-1" />
                Voice
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const DashboardView = () => (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Your Progress</h2>
        <p className="text-gray-600 text-sm">Track your learning journey</p>
      </div>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weekly Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const score = Math.floor(Math.random() * 40) + 60;
              return (
                <div key={day} className="flex items-center space-x-3">
                  <div className="w-8 text-sm font-medium">{day}</div>
                  <div className="flex-1">
                    <Progress value={score} className="h-2" />
                  </div>
                  <div className="w-12 text-sm font-medium text-right">{score}%</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Subject Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Subject Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { subject: 'Mathematics', score: 85, color: 'text-blue-600', bgColor: 'bg-blue-100' },
              { subject: 'Physics', score: 72, color: 'text-green-600', bgColor: 'bg-green-100' },
              { subject: 'Chemistry', score: 78, color: 'text-purple-600', bgColor: 'bg-purple-100' }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{item.subject}</span>
                  <span className={`font-bold ${item.color}`}>{item.score}%</span>
                </div>
                <Progress value={item.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: '20 Day Streak', icon: '🔥', desc: 'Consistent daily practice' },
              { title: 'Math Master', icon: '🧮', desc: 'Scored 90%+ in 5 math tests' },
              { title: 'Helper Badge', icon: '🤝', desc: 'Helped 10 students' }
            ].map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-gray-600">{achievement.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Mobile Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="font-bold text-lg">ExamAI Pro</h1>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-lg">Menu</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentView(item.id as any);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      currentView === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {currentView === 'home' && <HomeView />}
        {currentView === 'test' && <TestView />}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'collaborative' && <CollaborativeView />}
        {currentView === 'solutions' && <SolutionsView />}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t px-2 py-1">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as any)}
                className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'text-blue-600'
                    : 'text-gray-500'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
