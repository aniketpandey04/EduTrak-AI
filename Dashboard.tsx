/**
 * Student dashboard component providing comprehensive overview of performance,
 * progress tracking, and personalized recommendations
 */
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  TrendingUp, 
  BookOpen, 
  Target, 
  Clock, 
  Award,
  Brain,
  Calendar,
  ChevronRight,
  BarChart3,
  Users,
  Zap
} from 'lucide-react';

interface DashboardProps {
  studentName?: string;
  examType?: string;
}

export default function Dashboard({ studentName = "Alex", examType = "JEE" }: DashboardProps) {
  const recentTests = [
    { name: 'JEE Main Mock Test #15', score: 85, date: '2024-01-28', subjects: ['Math', 'Physics', 'Chemistry'] },
    { name: 'Physics Chapter Test', score: 92, date: '2024-01-26', subjects: ['Physics'] },
    { name: 'Mathematics Practice Set', score: 78, date: '2024-01-24', subjects: ['Math'] },
    { name: 'Chemistry Organic Mock', score: 88, date: '2024-01-22', subjects: ['Chemistry'] }
  ];

  const subjectProgress = [
    { name: 'Mathematics', current: 85, target: 90, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { name: 'Physics', current: 72, target: 85, color: 'text-green-600', bgColor: 'bg-green-100' },
    { name: 'Chemistry', current: 78, target: 88, color: 'text-purple-600', bgColor: 'bg-purple-100' }
  ];

  const aiRecommendations = [
    {
      type: 'weakness',
      subject: 'Chemistry',
      topic: 'Organic Reactions',
      message: 'Focus on reaction mechanisms - 15% improvement needed',
      priority: 'high'
    },
    {
      type: 'strength',
      subject: 'Mathematics',
      topic: 'Calculus',
      message: 'Excellent progress! Consider advanced problems',
      priority: 'medium'
    },
    {
      type: 'suggestion',
      subject: 'Physics',
      topic: 'Mechanics',
      message: 'Review rotational dynamics concepts',
      priority: 'medium'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {studentName}!</h1>
            <p className="text-gray-600">Your {examType} preparation dashboard</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <TrendingUp className="h-4 w-4 mr-1" />
              On Track
            </Badge>
            <Button>
              <Target className="h-4 w-4 mr-2" />
              Take Mock Test
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tests This Week</p>
                <h3 className="text-2xl font-bold text-gray-900">12</h3>
              </div>
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2 text-sm text-green-600">+2 from last week</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <h3 className="text-2xl font-bold text-gray-900">78%</h3>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-2 text-sm text-green-600">+5.2% improvement</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Hours</p>
                <h3 className="text-2xl font-bold text-gray-900">42h</h3>
              </div>
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-2 text-sm text-blue-600">6h daily average</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Rank</p>
                <h3 className="text-2xl font-bold text-gray-900">#247</h3>
              </div>
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-2 text-sm text-green-600">Top 15% nationally</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Subject Progress */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Subject Performance
              </CardTitle>
              <CardDescription>Track your progress across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {subjectProgress.map((subject, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${subject.bgColor}`} />
                        <span className="font-medium">{subject.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-bold ${subject.color}`}>{subject.current}%</span>
                        <span className="text-sm text-gray-500">/ {subject.target}%</span>
                      </div>
                    </div>
                    <Progress value={subject.current} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Recent Test Results
              </CardTitle>
              <CardDescription>Your latest mock test performances</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{test.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-500">{test.date}</span>
                        <div className="flex space-x-1">
                          {test.subjects.map((subject, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${
                        test.score >= 85 ? 'text-green-600' : 
                        test.score >= 70 ? 'text-blue-600' : 'text-orange-600'
                      }`}>
                        {test.score}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Results
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Recommendations */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI Recommendations
              </CardTitle>
              <CardDescription>Personalized suggestions to improve your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    rec.type === 'weakness' ? 'bg-red-50 border-red-400' :
                    rec.type === 'strength' ? 'bg-green-50 border-green-400' :
                    'bg-blue-50 border-blue-400'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="secondary" className="text-xs">
                            {rec.subject}
                          </Badge>
                          <span className={`text-xs font-medium ${
                            rec.priority === 'high' ? 'text-red-600' : 'text-blue-600'
                          }`}>
                            {rec.priority.toUpperCase()}
                          </span>
                        </div>
                        <h5 className="font-medium text-sm">{rec.topic}</h5>
                        <p className="text-sm text-gray-600 mt-1">{rec.message}</p>
                      </div>
                      {rec.type === 'weakness' && <Zap className="h-4 w-4 text-red-500" />}
                      {rec.type === 'strength' && <Award className="h-4 w-4 text-green-500" />}
                      {rec.type === 'suggestion' && <Target className="h-4 w-4 text-blue-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Study Streak */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Study Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">15 Days</div>
                <p className="text-sm text-gray-600">Keep up the great work!</p>
                <div className="mt-4 flex justify-center space-x-1">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className={`w-6 h-6 rounded ${
                      i < 5 ? 'bg-green-400' : 'bg-gray-200'
                    }`} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">This week's progress</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}