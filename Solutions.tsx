/**
 * Comprehensive solutions component with video explanations,
 * multiple learning resources, and interactive features
 */
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  PlayCircle,
  Video,
  BookOpen,
  ExternalLink,
  Download,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Clock,
  Star,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  Users,
  Eye,
  Bookmark,
  Search,
  Filter
} from 'lucide-react';

interface VideoResource {
  id: string;
  title: string;
  channel: string;
  duration: string;
  youtubeId: string;
  quality: 'HD' | '4K' | 'Standard';
  rating: number;
  views: string;
  description: string;
}

interface Solution {
  questionId: number;
  subject: string;
  topic: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  explanation: string;
  detailedSolution: string;
  videoResources: VideoResource[];
  conceptVideos: VideoResource[];
  relatedTopics: string[];
  commonMistakes: string[];
  tips: string[];
  additionalResources: {
    khanAcademy?: string;
    coursera?: string;
    edx?: string;
    textbookRef?: string;
  };
}

export default function Solutions() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [filterSubject, setFilterSubject] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const solutions: Solution[] = [
    {
      questionId: 1,
      subject: 'Mathematics',
      topic: 'Calculus - Derivatives',
      difficulty: 'Medium',
      question: 'Find the derivative of f(x) = x³ + 2x² - 5x + 3',
      correctAnswer: '3x² + 4x - 5',
      explanation: 'Using the power rule for each term and combining the results.',
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

**Alternative Methods:**
- **First Principles**: Using limit definition of derivative
- **Chain Rule**: If function was composite
- **Product Rule**: If terms were multiplied

**Verification:**
Check by differentiating the result: f''(x) = 6x + 4
      `,
      videoResources: [
        {
          id: '1a',
          title: 'Power Rule for Derivatives - Complete Guide',
          channel: 'Khan Academy',
          duration: '12:45',
          youtubeId: 'WUvTyaaNkzM',
          quality: 'HD',
          rating: 4.8,
          views: '2.3M',
          description: 'Comprehensive explanation of the power rule with multiple examples and practice problems.'
        },
        {
          id: '1b',
          title: 'Calculus Basics: Finding Derivatives',
          channel: 'Professor Leonard',
          duration: '25:12',
          youtubeId: 'S2_HuqLE-gY',
          quality: '4K',
          rating: 4.9,
          views: '1.8M',
          description: 'In-depth tutorial covering fundamental derivative rules with detailed explanations.'
        },
        {
          id: '1c',
          title: 'Derivative Rules Made Simple',
          channel: 'PatrickJMT',
          duration: '8:30',
          youtubeId: 'rAof9Ld5sOg',
          quality: 'HD',
          rating: 4.7,
          views: '956K',
          description: 'Quick and easy explanation of basic derivative rules for beginners.'
        }
      ],
      conceptVideos: [
        {
          id: '1d',
          title: 'What is a Derivative? Geometric Interpretation',
          channel: '3Blue1Brown',
          duration: '17:58',
          youtubeId: 'WUvTyaaNkzM',
          quality: '4K',
          rating: 4.9,
          views: '5.2M',
          description: 'Beautiful visual explanation of derivatives and their geometric meaning.'
        }
      ],
      relatedTopics: ['Chain Rule', 'Product Rule', 'Quotient Rule', 'Implicit Differentiation'],
      commonMistakes: [
        'Forgetting to multiply by the coefficient',
        'Incorrectly handling negative signs',
        'Not applying the power rule correctly to constants'
      ],
      tips: [
        'Always check your answer by differentiating again',
        'Practice with polynomials before moving to complex functions',
        'Remember that the derivative of a constant is always zero'
      ],
      additionalResources: {
        khanAcademy: 'https://www.khanacademy.org/math/calculus-1/cs1-derivatives',
        coursera: 'https://www.coursera.org/learn/calculus1',
        textbookRef: 'Stewart Calculus, Chapter 3, Section 3.1'
      }
    },
    {
      questionId: 2,
      subject: 'Physics',
      topic: 'Mechanics - Projectile Motion',
      difficulty: 'Hard',
      question: 'A ball is thrown vertically upward with initial velocity 20 m/s. What is the maximum height reached?',
      correctAnswer: '20 m',
      explanation: 'Using kinematic equations, at maximum height velocity becomes zero.',
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

**Method 3: Using Time-based Approach**
First find time to reach maximum height:
v = u + at
0 = 20 + (-10)t
t = 2 seconds

Then use: s = ut + ½at²
h = 20(2) + ½(-10)(2)²
h = 40 - 20 = 20 m ✓
      `,
      videoResources: [
        {
          id: '2a',
          title: 'Projectile Motion Explained',
          channel: 'Physics Classroom',
          duration: '15:20',
          youtubeId: 'hG9SzQzUTM0',
          quality: 'HD',
          rating: 4.6,
          views: '1.4M',
          description: 'Complete guide to projectile motion with worked examples and problem-solving strategies.'
        },
        {
          id: '2b',
          title: 'Vertical Motion and Free Fall',
          channel: 'Khan Academy',
          duration: '11:35',
          youtubeId: 'v6A6VDSJzbo',
          quality: 'HD',
          rating: 4.8,
          views: '2.1M',
          description: 'Detailed explanation of vertical motion under gravity with multiple solution methods.'
        }
      ],
      conceptVideos: [
        {
          id: '2c',
          title: 'Understanding Gravity and Motion',
          channel: 'Veritasium',
          duration: '12:42',
          youtubeId: 'E43-CfukEgs',
          quality: '4K',
          rating: 4.9,
          views: '3.7M',
          description: 'Fascinating exploration of gravity and its effects on motion with real-world examples.'
        }
      ],
      relatedTopics: ['Kinematics', 'Energy Conservation', 'Free Fall', 'Newton\'s Laws'],
      commonMistakes: [
        'Using wrong sign for acceleration due to gravity',
        'Confusing displacement with distance',
        'Not considering the reference frame properly'
      ],
      tips: [
        'Always define your coordinate system clearly',
        'Check units in your final answer',
        'Verify your result using an alternative method'
      ],
      additionalResources: {
        khanAcademy: 'https://www.khanacademy.org/science/physics/one-dimensional-motion',
        edx: 'https://www.edx.org/course/mechanics',
        textbookRef: 'Resnick, Halliday & Krane, Chapter 2'
      }
    }
  ];

  const filteredSolutions = solutions.filter(solution => {
    const matchesSubject = filterSubject === 'all' || solution.subject.toLowerCase() === filterSubject.toLowerCase();
    const matchesDifficulty = filterDifficulty === 'all' || solution.difficulty.toLowerCase() === filterDifficulty.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      solution.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.question.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSubject && matchesDifficulty && matchesSearch;
  });

  const currentSolution = filteredSolutions[selectedQuestion] || solutions[0];

  const VideoPlayer = ({ video }: { video: VideoResource }) => (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="space-y-2">
        <h4 className="font-semibold text-lg">{video.title}</h4>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{video.channel}</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {video.duration}
            </span>
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {video.views}
            </span>
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              {video.rating}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-700">{video.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Solution Center</h1>
        <p className="text-gray-600">Comprehensive solutions with video explanations and multiple learning resources</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions or topics..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filterSubject}
                onChange={(e) => setFilterSubject(e.target.value)}
              >
                <option value="all">All Subjects</option>
                <option value="mathematics">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
              </select>
              <select
                className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Questions ({filteredSolutions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredSolutions.map((solution, index) => (
                  <button
                    key={solution.questionId}
                    onClick={() => setSelectedQuestion(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedQuestion === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {solution.subject}
                        </Badge>
                        <Badge className={
                          solution.difficulty === 'Easy' ? 'bg-green-100 text-green-800 text-xs' :
                          solution.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 text-xs' :
                          'bg-red-100 text-red-800 text-xs'
                        }>
                          {solution.difficulty}
                        </Badge>
                      </div>
                      <div className="font-medium text-sm">{solution.topic}</div>
                      <div className="text-xs text-gray-600 line-clamp-2">
                        {solution.question}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Question Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{currentSolution.subject}</Badge>
                    <Badge className={
                      currentSolution.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      currentSolution.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }>
                      {currentSolution.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{currentSolution.topic}</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Question:</h4>
                  <p className="text-lg leading-relaxed">{currentSolution.question}</p>
                </div>
                
                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <h4 className="font-medium text-green-800 mb-1">Correct Answer:</h4>
                  <p className="text-green-700 font-mono">{currentSolution.correctAnswer}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Solutions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-red-600" />
                Video Explanations
              </CardTitle>
              <CardDescription>Multiple video resources from top educators</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedVideoId ? (
                <div className="space-y-4">
                  <VideoPlayer 
                    video={currentSolution.videoResources.find(v => v.id === selectedVideoId) || currentSolution.videoResources[0]} 
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedVideoId(null)}
                    className="w-full"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Back to Video List
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSolution.videoResources.map((video) => (
                    <div key={video.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                        <img 
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setSelectedVideoId(video.id)}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-all"
                        >
                          <PlayCircle className="h-12 w-12 text-white" />
                        </button>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-black bg-opacity-75 text-white">
                            {video.quality}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-medium text-sm mb-2 line-clamp-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{video.channel}</span>
                        <div className="flex items-center space-x-2">
                          <span>{video.duration}</span>
                          <span className="flex items-center">
                            <Star className="h-3 w-3 mr-1 text-yellow-500" />
                            {video.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Concept Videos */}
          {currentSolution.conceptVideos.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-yellow-600" />
                  Concept Videos
                </CardTitle>
                <CardDescription>Understand the underlying concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSolution.conceptVideos.map((video) => (
                    <div key={video.id} className="border rounded-lg p-4">
                      <div className="aspect-video bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                        <img 
                          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-40 transition-all">
                          <PlayCircle className="h-12 w-12 text-white" />
                        </button>
                      </div>
                      <h4 className="font-medium text-sm mb-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{video.channel}</span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {video.views}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Detailed Solution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Detailed Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800 mb-2">Quick Explanation:</h4>
                  <p className="text-blue-700">{currentSolution.explanation}</p>
                </div>

                <div className="prose max-w-none">
                  <div className="whitespace-pre-line leading-relaxed">
                    {currentSolution.detailedSolution}
                  </div>
                </div>

                {/* Common Mistakes */}
                {currentSolution.commonMistakes.length > 0 && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                    <h4 className="font-medium text-red-800 mb-2">Common Mistakes:</h4>
                    <ul className="text-red-700 space-y-1">
                      {currentSolution.commonMistakes.map((mistake, index) => (
                        <li key={index}>• {mistake}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tips */}
                {currentSolution.tips.length > 0 && (
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <h4 className="font-medium text-yellow-800 mb-2">Pro Tips:</h4>
                    <ul className="text-yellow-700 space-y-1">
                      {currentSolution.tips.map((tip, index) => (
                        <li key={index}>💡 {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-3">Related Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSolution.relatedTopics.map((topic, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">External Resources:</h4>
                  <div className="space-y-2">
                    {currentSolution.additionalResources.khanAcademy && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Khan Academy Course
                      </Button>
                    )}
                    {currentSolution.additionalResources.coursera && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Coursera Specialization
                      </Button>
                    )}
                    {currentSolution.additionalResources.textbookRef && (
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        {currentSolution.additionalResources.textbookRef}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setSelectedQuestion(Math.max(0, selectedQuestion - 1))}
              disabled={selectedQuestion === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous Solution
            </Button>
            <Button
              onClick={() => setSelectedQuestion(Math.min(filteredSolutions.length - 1, selectedQuestion + 1))}
              disabled={selectedQuestion === filteredSolutions.length - 1}
            >
              Next Solution
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
