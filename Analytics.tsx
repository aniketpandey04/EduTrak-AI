/**
 * Analytics component providing comprehensive performance analysis,
 * progress tracking, and AI-powered insights for competitive exam preparation
 */
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  Calendar,
  Target,
  Brain,
  Award,
  Clock,
  BookOpen,
  Users,
  Zap,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function Analytics() {
  const performanceData = {
    overall: {
      averageScore: 78.5,
      improvement: 12.3,
      testsCompleted: 45,
      hoursStudied: 156,
      rank: 247,
      percentile: 85.6
    },
    subjects: [
      { name: 'Mathematics', score: 85, improvement: 8.5, tests: 15, weakTopics: ['Coordinate Geometry', 'Statistics'] },
      { name: 'Physics', score: 72, improvement: -2.1, tests: 15, weakTopics: ['Electromagnetism', 'Modern Physics'] },
      { name: 'Chemistry', score: 78, improvement: 15.2, tests: 15, weakTopics: ['Organic Reactions', 'Thermodynamics'] }
    ],
    topicAnalysis: [
      { topic: 'Calculus', subject: 'Mathematics', mastery: 92, questions: 48, accuracy: 89 },
      { topic: 'Mechanics', subject: 'Physics', mastery: 76, questions: 52, accuracy: 73 },
      { topic: 'Inorganic Chemistry', subject: 'Chemistry', mastery: 81, questions: 35, accuracy: 83 },
      { topic: 'Algebra', subject: 'Mathematics', mastery: 88, questions: 42, accuracy: 85 },
      { topic: 'Thermodynamics', subject: 'Physics', mastery: 65, questions: 28, accuracy: 68 }
    ],
    timeAnalysis: {
      averageTimePerQuestion: 95, // seconds
      fastestSubject: 'Mathematics',
      slowestSubject: 'Physics',
      timeDistribution: {
        Mathematics: 85,
        Physics: 110,
        Chemistry: 90
      }
    },
    weakAreas: [
      { area: 'Organic Reactions', subject: 'Chemistry', priority: 'High', improvement: 25 },
      { area: 'Electromagnetism', subject: 'Physics', priority: 'High', improvement: 30 },
      { area: 'Coordinate Geometry', subject: 'Mathematics', priority: 'Medium', improvement: 15 }
    ]
  };

  const monthlyProgress = [
    { month: 'Oct', score: 65, tests: 8 },
    { month: 'Nov', score: 71, tests: 12 },
    { month: 'Dec', score: 76, tests: 15 },
    { month: 'Jan', score: 78.5, tests: 10 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
        <p className="text-gray-600">Comprehensive analysis of your exam preparation progress</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <h3 className="text-2xl font-bold text-gray-900">{performanceData.overall.averageScore}%</h3>
                <div className="flex items-center mt-1">
                  <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+{performanceData.overall.improvement}%</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">National Rank</p>
                <h3 className="text-2xl font-bold text-gray-900">#{performanceData.overall.rank}</h3>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-blue-600">{performanceData.overall.percentile} percentile</span>
                </div>
              </div>
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tests Completed</p>
                <h3 className="text-2xl font-bold text-gray-900">{performanceData.overall.testsCompleted}</h3>
                <div className="flex items-center mt-1">
                  <BookOpen className="h-4 w-4 text-purple-600 mr-1" />
                  <span className="text-sm text-purple-600">This month: 10</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Hours</p>
                <h3 className="text-2xl font-bold text-gray-900">{performanceData.overall.hoursStudied}h</h3>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 text-orange-600 mr-1" />
                  <span className="text-sm text-orange-600">5.2h daily avg</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subject Performance */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Subject Performance
              </CardTitle>
              <CardDescription>Detailed analysis across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceData.subjects.map((subject, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-lg">{subject.name}</h4>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-gray-900">{subject.score}%</span>
                        <div className={`flex items-center ${
                          subject.improvement > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {subject.improvement > 0 ? (
                            <ArrowUp className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDown className="h-4 w-4 mr-1" />
                          )}
                          <span className="text-sm font-medium">
                            {Math.abs(subject.improvement)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <Progress value={subject.score} className="h-3" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{subject.tests} tests completed</span>
                      <span>Weak areas: {subject.weakTopics.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Topic Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Topic Mastery Analysis
              </CardTitle>
              <CardDescription>Your proficiency across different topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceData.topicAnalysis.map((topic, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium">{topic.topic}</h4>
                        <Badge variant="secondary">{topic.subject}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">{topic.mastery}%</div>
                        <div className="text-xs text-gray-500">mastery</div>
                      </div>
                    </div>
                    <Progress value={topic.mastery} className="h-2 mb-2" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{topic.questions} questions attempted</span>
                      <span>{topic.accuracy}% accuracy</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Monthly Progress Trend
              </CardTitle>
              <CardDescription>Your performance improvement over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyProgress.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm font-medium w-12">{month.month}</div>
                      <div className="flex-1">
                        <Progress value={month.score} className="h-2" />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{month.score}%</div>
                      <div className="text-xs text-gray-500">{month.tests} tests</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights & Recommendations */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI Insights
              </CardTitle>
              <CardDescription>Personalized recommendations from our AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <div className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Strength Identified</h4>
                      <p className="text-sm text-blue-700">Your calculus skills are exceptional! Consider tackling advanced problems to maximize scores.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                  <div className="flex items-start space-x-2">
                    <Target className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800">Priority Focus</h4>
                      <p className="text-sm text-red-700">Electromagnetism needs immediate attention. Dedicate 2 hours daily for next 2 weeks.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Progress Update</h4>
                      <p className="text-sm text-green-700">Chemistry improvement is remarkable! You're on track to reach your target score.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Time Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Time Analysis
              </CardTitle>
              <CardDescription>How you spend time on different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {performanceData.timeAnalysis.averageTimePerQuestion}s
                  </div>
                  <div className="text-sm text-orange-800">Average per question</div>
                </div>

                <div className="space-y-3">
                  {Object.entries(performanceData.timeAnalysis.timeDistribution).map(([subject, time]) => (
                    <div key={subject} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{subject}</span>
                        <span className="font-medium">{time}s avg</span>
                      </div>
                      <Progress value={(time / 120) * 100} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="text-xs text-gray-600 text-center">
                  Fastest: {performanceData.timeAnalysis.fastestSubject} | 
                  Slowest: {performanceData.timeAnalysis.slowestSubject}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weak Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Focus Areas
              </CardTitle>
              <CardDescription>Topics requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {performanceData.weakAreas.map((area, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{area.area}</h4>
                      <Badge className={
                        area.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }>
                        {area.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{area.subject}</span>
                      <span>+{area.improvement}% potential gain</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Peer Comparison
              </CardTitle>
              <CardDescription>How you compare with similar students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Top 15%</div>
                  <div className="text-sm text-green-800">Among JEE aspirants</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Better than</span>
                    <span className="font-medium text-green-600">85.6% students</span>
                  </div>
                  <Progress value={85.6} className="h-2" />
                </div>

                <div className="text-xs text-gray-600 text-center">
                  Based on last 10,000 test attempts
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}