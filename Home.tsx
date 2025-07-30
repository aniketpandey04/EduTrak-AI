/**
 * Enhanced main landing page showcasing all premium features including
 * video solutions, collaborative learning, mobile app, and advanced analytics
 */
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  Target,
  ChevronRight,
  PlayCircle,
  BarChart3,
  MessageSquare,
  Video,
  Smartphone,
  Monitor,
  Headphones,
  Download,
  Share2,
  Globe,
  Zap,
  Star,
  Heart,
  Camera,
  Mic,
  Search,
  Filter,
  Clock,
  Calendar,
  Bell,
  Settings,
  ExternalLink,
  Youtube,
  Github,
  Lightbulb,
  Rocket,
  Shield,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Enhanced Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ExamAI Pro</span>
              <Badge className="bg-green-100 text-green-800 text-xs">v2.0</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#collaborative" className="text-gray-600 hover:text-blue-600 transition-colors">Collaborate</a>
              <a href="#mobile" className="text-gray-600 hover:text-blue-600 transition-colors">Mobile App</a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="h-4 w-4 mr-2" />
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="h-4 w-4 mr-1" />
            🚀 NEW: Video Solutions & Collaborative Learning
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Master Competitive Exams with
            <span className="text-blue-600 block">Next-Gen AI Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionary open-source platform with AI-powered tracking, video solutions from YouTube experts, 
            real-time collaboration, and mobile-first design for all major competitive examinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Free Mock Test
            </Button>
            <Button size="lg" variant="outline">
              <Video className="mr-2 h-5 w-5" />
              Watch Video Solutions
            </Button>
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Join Study Groups
            </Button>
          </div>
          
          {/* New Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg border">
              <Youtube className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium">YouTube Videos</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg border">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Live Collaboration</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg border">
              <Smartphone className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Mobile App</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-white rounded-lg border">
              <Github className="h-5 w-5 text-gray-800" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <div className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600 text-sm">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Video Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5M+</div>
              <div className="text-gray-600 text-sm">Questions Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">1500+</div>
              <div className="text-gray-600 text-sm">Study Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Live Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* New Features Showcase */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary New Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of competitive exam preparation with cutting-edge AI and collaborative tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Video Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-red-100">
              <CardHeader>
                <Video className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-lg">Video Solutions Hub</CardTitle>
                <CardDescription>
                  Curated video explanations from top YouTube educators for every question
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>50K+ curated video solutions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Multiple explanation methods</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>HD quality with subtitles</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Youtube className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Collaborative Learning */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-purple-100">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-lg">Live Collaboration</CardTitle>
                <CardDescription>
                  Real-time study groups, live discussions, and peer-to-peer learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>1500+ active study groups</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Live video sessions</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Instant doubt clearing</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Join Groups
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-100">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-lg">Mobile-First Design</CardTitle>
                <CardDescription>
                  Native mobile experience with offline support and touch optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Swipe navigation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Offline test mode</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Voice & camera input</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Get App
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Analytics */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-lg">AI Analytics Pro</CardTitle>
                <CardDescription>
                  Deep performance insights with predictive modeling and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Predictive score modeling</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Weakness identification</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Performance comparison</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Comparison */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Choose ExamAI Pro v2.0?</CardTitle>
              <CardDescription>Compare our enhanced features with traditional platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Feature</th>
                      <th className="text-center py-3 px-4">Traditional Platforms</th>
                      <th className="text-center py-3 px-4 bg-blue-50">ExamAI Pro v2.0</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Video Solutions', traditional: '❌', examai: '✅ 50K+ Curated Videos' },
                      { feature: 'Live Collaboration', traditional: '❌', examai: '✅ Real-time Study Groups' },
                      { feature: 'Mobile Optimization', traditional: '⚠️ Basic', examai: '✅ Native Mobile App' },
                      { feature: 'AI Recommendations', traditional: '⚠️ Limited', examai: '✅ Advanced ML Models' },
                      { feature: 'Open Source', traditional: '❌', examai: '✅ Full GitHub Access' },
                      { feature: 'Offline Support', traditional: '❌', examai: '✅ Complete Offline Mode' }
                    ].map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{row.feature}</td>
                        <td className="py-3 px-4 text-center">{row.traditional}</td>
                        <td className="py-3 px-4 text-center bg-blue-50 font-medium">{row.examai}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Video Solutions Preview */}
      <section id="solutions" className="py-20 px-4 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎥 Premium Video Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from the best educators on YouTube with our curated video solution library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                subject: 'Mathematics',
                topic: 'Calculus Integration',
                thumbnail: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/8263490c-013a-47b7-b511-04ebc02f19a0.jpg',
                educator: 'Khan Academy',
                views: '2.3M',
                rating: 4.9,
                duration: '15:42'
              },
              {
                subject: 'Physics',
                topic: 'Electromagnetic Induction',
                thumbnail: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/fb824a57-41ae-4204-8770-65007900bc57.jpg',
                educator: 'Professor Leonard',
                views: '1.8M',
                rating: 4.8,
                duration: '22:15'
              },
              {
                subject: 'Chemistry',
                topic: 'Organic Reaction Mechanisms',
                thumbnail: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/bb59dcbc-43e1-41df-a0ad-bf4de778a3a6.jpg',
                educator: 'Crash Course',
                views: '1.2M',
                rating: 4.7,
                duration: '18:30'
              }
            ].map((video, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail}
                    alt={video.topic}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <PlayCircle className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">{video.subject}</Badge>
                    <h3 className="font-semibold text-lg">{video.topic}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>By {video.educator}</span>
                      <div className="flex items-center space-x-2">
                        <span>{video.views} views</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{video.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Youtube className="h-5 w-5 mr-2" />
              Explore 50K+ Video Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Collaborative Learning Preview */}
      <section id="collaborative" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤝 Collaborative Learning</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students in real-time study sessions and peer learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-purple-600" />
                    Live Study Groups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'JEE Math Masters', members: 156, topic: 'Calculus Integration', live: true },
                      { name: 'Physics Problem Solvers', members: 89, topic: 'Electromagnetic Waves', live: true },
                      { name: 'Chemistry Reaction Hub', members: 67, topic: 'Organic Mechanisms', live: false }
                    ].map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{group.name}</div>
                          <div className="text-sm text-gray-600">{group.topic}</div>
                          <div className="text-xs text-gray-500">{group.members} members</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {group.live && (
                            <Badge className="bg-red-500 text-white animate-pulse">LIVE</Badge>
                          )}
                          <Button size="sm" variant="outline">Join</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Join Discussion
                </Button>
                <Button variant="outline" className="flex-1">
                  <Video className="h-4 w-4 mr-2" />
                  Start Video Call
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-700">Active Community</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">1,500+</div>
                    <div className="text-sm text-gray-600">Study Groups</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50K+</div>
                    <div className="text-sm text-gray-600">Active Learners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">10K+</div>
                    <div className="text-sm text-gray-600">Questions Answered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">95%</div>
                    <div className="text-sm text-gray-600">Help Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section id="mobile" className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📱 Native Mobile Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Study anywhere, anytime with our mobile-first design and offline capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <Smartphone className="h-6 w-6" />,
                    title: 'Touch-Optimized Interface',
                    description: 'Swipe navigation, gesture controls, and mobile-first design'
                  },
                  {
                    icon: <Download className="h-6 w-6" />,
                    title: 'Offline Mode',
                    description: 'Download tests and study materials for offline access'
                  },
                  {
                    icon: <Camera className="h-6 w-6" />,
                    title: 'Camera & Voice Input',
                    description: 'Snap photos of problems or ask questions with voice'
                  },
                  {
                    icon: <Bell className="h-6 w-6" />,
                    title: 'Smart Notifications',
                    description: 'Personalized study reminders and progress updates'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg text-green-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Download className="h-5 w-5 mr-2" />
                  Download App
                </Button>
                <Button size="lg" variant="outline">
                  <Monitor className="h-5 w-5 mr-2" />
                  Try Web Version
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-2 mx-auto w-64">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-blue-600 p-4 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Mock Test</h3>
                      <span className="text-sm">15:30</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="text-sm font-medium">Question 1 of 30</div>
                    <div className="text-xs text-gray-600">Find the derivative of x³ + 2x²...</div>
                    <div className="space-y-2">
                      {['3x² + 4x - 5', '3x² + 4x + 5'].map((option, index) => (
                        <div key={index} className="p-2 border rounded text-xs">
                          {option}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Button size="sm" variant="outline" className="text-xs">Previous</Button>
                      <Button size="sm" className="text-xs">Next</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source & Community */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">🌟 Open Source & Community Driven</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built by students, for students. Contribute to the future of education technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Github className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Full source code available on GitHub. Contribute and customize freely.
                </p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Built with love by a community of educators, students, and developers.
                </p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Privacy First</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Your data stays yours. No tracking, no ads, no compromises.
                </p>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="text-lg text-gray-300">Ready to revolutionize your exam preparation?</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="h-5 w-5 mr-2" />
                Start Learning Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                <Github className="h-5 w-5 mr-2" />
                Star on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">ExamAI Pro</span>
                <Badge className="bg-green-100 text-green-800 text-xs">v2.0</Badge>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionary open-source AI platform for competitive exam preparation with video solutions, 
                collaborative learning, and mobile-first design.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-700">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">New Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Video Solutions</li>
                <li>Live Collaboration</li>
                <li>Mobile App</li>
                <li>AI Analytics Pro</li>
                <li>Offline Mode</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Exams Supported</h4>
              <ul className="space-y-2 text-gray-400">
                <li>JEE Main & Advanced</li>
                <li>NEET & Medical</li>
                <li>CAT & Management</li>
                <li>GATE & Engineering</li>
                <li>Banking & SSC</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Study Groups</li>
                <li>Discussion Forums</li>
                <li>Live Events</li>
                <li>Contributor Guide</li>
                <li>Discord Server</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 ExamAI Pro. Open source under MIT License. Built with ❤️ by the community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
