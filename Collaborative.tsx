/**
 * Collaborative learning component with real-time features,
 * study groups, peer discussions, and interactive learning
 */
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Users,
  MessageSquare,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Share2,
  HandHeart,
  ThumbsUp,
  Send,
  Search,
  Plus,
  Crown,
  Star,
  Clock,
  BookOpen,
  Target,
  Zap,
  Heart,
  Award,
  Globe,
  UserPlus,
  Settings,
  Bell,
  Filter,
  Calendar,
  Play
} from 'lucide-react';

interface StudyGroup {
  id: string;
  name: string;
  subject: string;
  members: number;
  maxMembers: number;
  isPrivate: boolean;
  description: string;
  currentTopic: string;
  createdBy: string;
  rating: number;
  tags: string[];
  lastActive: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface Message {
  id: string;
  user: string;
  avatar: string;
  message: string;
  timestamp: string;
  likes: number;
  replies: number;
  isQuestion: boolean;
  isSolution: boolean;
  attachments?: string[];
}

interface User {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'away' | 'busy';
  reputation: number;
  helpfulAnswers: number;
  studyStreak: number;
  subjects: string[];
  rank: string;
}

export default function Collaborative() {
  const [activeTab, setActiveTab] = useState<'groups' | 'discussions' | 'live' | 'leaderboard'>('groups');
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('all');
  const [isVideoCallActive, setIsVideoCallActive] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(true);
  const [isCameraOff, setIsCameraOff] = useState(true);

  const studyGroups: StudyGroup[] = [
    {
      id: '1',
      name: 'JEE Math Masters',
      subject: 'Mathematics',
      members: 24,
      maxMembers: 30,
      isPrivate: false,
      description: 'Advanced mathematics problem solving for JEE Main & Advanced. Daily practice sessions and doubt clearing.',
      currentTopic: 'Calculus - Definite Integrals',
      createdBy: 'MathGuru2024',
      rating: 4.8,
      tags: ['calculus', 'jee-advanced', 'problem-solving'],
      lastActive: '2 min ago',
      level: 'Advanced'
    },
    {
      id: '2',
      name: 'Physics Problem Solvers',
      subject: 'Physics',
      members: 18,
      maxMembers: 25,
      isPrivate: false,
      description: 'Collaborative physics learning with interactive experiments and real-time problem solving.',
      currentTopic: 'Electromagnetic Induction',
      createdBy: 'PhysicsWiz',
      rating: 4.6,
      tags: ['electromagnetism', 'jee-main', 'conceptual'],
      lastActive: '5 min ago',
      level: 'Intermediate'
    },
    {
      id: '3',
      name: 'Chemistry Reaction Hub',
      subject: 'Chemistry',
      members: 15,
      maxMembers: 20,
      isPrivate: false,
      description: 'Organic and inorganic chemistry discussions, reaction mechanisms, and quick doubt clearing.',
      currentTopic: 'Organic Reaction Mechanisms',
      createdBy: 'ChemExpert',
      rating: 4.9,
      tags: ['organic-chemistry', 'reactions', 'mechanisms'],
      lastActive: '1 min ago',
      level: 'Advanced'
    },
    {
      id: '4',
      name: 'NEET Biology Squad',
      subject: 'Biology',
      members: 32,
      maxMembers: 40,
      isPrivate: false,
      description: 'NEET biology preparation with diagrams, mnemonics, and group study sessions.',
      currentTopic: 'Human Physiology',
      createdBy: 'BioMaster',
      rating: 4.7,
      tags: ['neet', 'physiology', 'diagrams'],
      lastActive: '3 min ago',
      level: 'Intermediate'
    }
  ];

  const discussionMessages: Message[] = [
    {
      id: '1',
      user: 'Alex_M',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/3f2ce869-12cc-4a54-b515-027e1a1d2d39.jpg',
      message: 'Can someone help me understand why the derivative of sin(x) is cos(x)? I keep getting confused with the proof.',
      timestamp: '5 min ago',
      likes: 3,
      replies: 2,
      isQuestion: true,
      isSolution: false
    },
    {
      id: '2',
      user: 'MathGuru2024',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/dbbfbffa-6953-4ea6-a547-634907f50499.jpg',
      message: 'Great question! The key is understanding the limit definition. Let me break it down step by step:\n\n1. Start with f(x) = sin(x)\n2. Use the definition: f\'(x) = lim(h→0) [sin(x+h) - sin(x)]/h\n3. Apply the trigonometric identity for sin(x+h)\n4. Factor and simplify using standard limits\n\nWould you like me to show the detailed calculation?',
      timestamp: '3 min ago',
      likes: 8,
      replies: 1,
      isQuestion: false,
      isSolution: true
    },
    {
      id: '3',
      user: 'Sarah_K',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/37ea4e7b-1001-4891-b1d2-202ffbf4354a.jpg',
      message: 'This is super helpful! Could you also explain why cos(x) becomes -sin(x)?',
      timestamp: '2 min ago',
      likes: 2,
      replies: 0,
      isQuestion: true,
      isSolution: false
    },
    {
      id: '4',
      user: 'PhysicsWiz',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/43ff102c-a5a0-4036-a2a8-b18edbd0ba3e.jpg',
      message: 'Just solved a tricky electromagnetic induction problem! The key insight was realizing that the magnetic flux changes due to both area change AND field change. Always consider all sources of flux variation! 🧲⚡',
      timestamp: '8 min ago',
      likes: 12,
      replies: 4,
      isQuestion: false,
      isSolution: true,
      attachments: ['electromagnetic-solution.pdf']
    }
  ];

  const onlineUsers: User[] = [
    {
      id: '1',
      name: 'MathGuru2024',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/dbbfbffa-6953-4ea6-a547-634907f50499.jpg',
      status: 'online',
      reputation: 2850,
      helpfulAnswers: 342,
      studyStreak: 45,
      subjects: ['Mathematics', 'Physics'],
      rank: 'Expert'
    },
    {
      id: '2',
      name: 'Alex_M',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/3f2ce869-12cc-4a54-b515-027e1a1d2d39.jpg',
      status: 'online',
      reputation: 1250,
      helpfulAnswers: 89,
      studyStreak: 23,
      subjects: ['Mathematics'],
      rank: 'Advanced'
    },
    {
      id: '3',
      name: 'Sarah_K',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/37ea4e7b-1001-4891-b1d2-202ffbf4354a.jpg',
      status: 'away',
      reputation: 950,
      helpfulAnswers: 67,
      studyStreak: 18,
      subjects: ['Chemistry', 'Biology'],
      rank: 'Intermediate'
    },
    {
      id: '4',
      name: 'PhysicsWiz',
      avatar: 'https://pub-cdn.sider.ai/u/U0W8H747V80/web-coder/6889ab6a3347a0e7fba1668b/resource/43ff102c-a5a0-4036-a2a8-b18edbd0ba3e.jpg',
      status: 'online',
      reputation: 3200,
      helpfulAnswers: 456,
      studyStreak: 67,
      subjects: ['Physics', 'Mathematics'],
      rank: 'Master'
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const joinGroup = (groupId: string) => {
    setSelectedGroup(groupId);
  };

  const leaveGroup = () => {
    setSelectedGroup(null);
  };

  const toggleVideoCall = () => {
    setIsVideoCallActive(!isVideoCallActive);
  };

  const filteredGroups = studyGroups.filter(group => {
    const matchesSearch = searchTerm === '' || 
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === 'all' || group.subject.toLowerCase() === filterSubject.toLowerCase();
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Collaborative Learning</h1>
        <p className="text-gray-600">Connect, learn, and grow together with fellow students</p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
          {[
            { id: 'groups', label: 'Study Groups', icon: Users },
            { id: 'discussions', label: 'Discussions', icon: MessageSquare },
            { id: 'live', label: 'Live Sessions', icon: Video },
            { id: 'leaderboard', label: 'Leaderboard', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Study Groups Tab */}
      {activeTab === 'groups' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search study groups..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                    <option value="biology">Biology</option>
                  </select>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Group
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <Card key={group.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{group.subject}</Badge>
                        <Badge className={
                          group.level === 'Beginner' ? 'bg-green-100 text-green-800 text-xs' :
                          group.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 text-xs' :
                          'bg-red-100 text-red-800 text-xs'
                        }>
                          {group.level}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">{group.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 line-clamp-3">{group.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Members</span>
                        <span className="font-medium">{group.members}/{group.maxMembers}</span>
                      </div>
                      <Progress value={(group.members / group.maxMembers) * 100} className="h-2" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        Active {group.lastActive}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Currently: {group.currentTopic}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {group.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      onClick={() => joinGroup(group.id)}
                      className="w-full"
                      disabled={group.members >= group.maxMembers}
                    >
                      <UserPlus className="h-4 w-4 mr-2" />
                      {group.members >= group.maxMembers ? 'Group Full' : 'Join Group'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Discussions Tab */}
      {activeTab === 'discussions' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Discussion Feed */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Discussions</CardTitle>
                <CardDescription>Ask questions, share solutions, and help others learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* New Message Input */}
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <textarea
                      placeholder="Ask a question or share a solution..."
                      className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4 mr-1" />
                          Add Image
                        </Button>
                        <Button variant="outline" size="sm">
                          <Target className="h-4 w-4 mr-1" />
                          Mark as Question
                        </Button>
                      </div>
                      <Button onClick={sendMessage} disabled={!message.trim()}>
                        <Send className="h-4 w-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>

                  {/* Discussion Messages */}
                  <div className="space-y-4">
                    {discussionMessages.map((msg) => (
                      <div key={msg.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-3">
                          <img 
                            src={msg.avatar}
                            alt={msg.user}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{msg.user}</span>
                              <span className="text-sm text-gray-500">{msg.timestamp}</span>
                              {msg.isQuestion && (
                                <Badge className="bg-blue-100 text-blue-800 text-xs">Question</Badge>
                              )}
                              {msg.isSolution && (
                                <Badge className="bg-green-100 text-green-800 text-xs">Solution</Badge>
                              )}
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{msg.message}</p>
                            
                            {msg.attachments && (
                              <div className="flex space-x-2">
                                {msg.attachments.map((attachment, index) => (
                                  <Button key={index} variant="outline" size="sm">
                                    <BookOpen className="h-4 w-4 mr-1" />
                                    {attachment}
                                  </Button>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <button className="flex items-center space-x-1 hover:text-blue-600">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{msg.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-600">
                                <MessageSquare className="h-4 w-4" />
                                <span>{msg.replies} replies</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-blue-600">
                                <Share2 className="h-4 w-4" />
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online Users Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Online Now ({onlineUsers.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {onlineUsers.map((user) => (
                    <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="relative">
                        <img 
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          user.status === 'online' ? 'bg-green-500' :
                          user.status === 'away' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium truncate">{user.name}</span>
                          {user.rank === 'Master' && <Crown className="h-3 w-3 text-yellow-500" />}
                          {user.rank === 'Expert' && <Star className="h-3 w-3 text-blue-500" />}
                        </div>
                        <div className="text-xs text-gray-500">
                          {user.reputation} pts • {user.helpfulAnswers} helpful
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { topic: 'Calculus Integration', count: 45 },
                    { topic: 'Organic Reactions', count: 38 },
                    { topic: 'Electromagnetic Induction', count: 32 },
                    { topic: 'Coordinate Geometry', count: 28 },
                    { topic: 'Thermodynamics', count: 25 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer">
                      <span className="text-sm font-medium">{item.topic}</span>
                      <Badge variant="secondary" className="text-xs">{item.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Live Sessions Tab */}
      {activeTab === 'live' && (
        <div className="space-y-6">
          {/* Active Sessions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'JEE Mathematics - Live Problem Solving',
                host: 'MathGuru2024',
                participants: 156,
                duration: '45 min',
                topic: 'Definite Integration Techniques',
                level: 'Advanced',
                isLive: true
              },
              {
                title: 'Physics Doubt Clearing Session',
                host: 'PhysicsWiz',
                participants: 89,
                duration: '30 min',
                topic: 'Electromagnetic Waves',
                level: 'Intermediate',
                isLive: true
              },
              {
                title: 'Chemistry Organic Mechanisms',
                host: 'ChemExpert',
                participants: 67,
                duration: '1 hr',
                topic: 'SN1 vs SN2 Reactions',
                level: 'Advanced',
                isLive: false
              }
            ].map((session, index) => (
              <Card key={index} className={`hover:shadow-lg transition-all ${session.isLive ? 'ring-2 ring-red-200' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                    {session.isLive && (
                      <Badge className="bg-red-500 text-white animate-pulse">
                        <div className="w-2 h-2 bg-white rounded-full mr-1" />
                        LIVE
                      </Badge>
                    )}
                  </div>
                  <CardDescription>Hosted by {session.host}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Topic:</span>
                        <span className="font-medium">{session.topic}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Level:</span>
                        <Badge className={
                          session.level === 'Beginner' ? 'bg-green-100 text-green-800 text-xs' :
                          session.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 text-xs' :
                          'bg-red-100 text-red-800 text-xs'
                        }>
                          {session.level}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium">{session.participants}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{session.duration}</span>
                      </div>
                    </div>

                    <Button className="w-full" disabled={!session.isLive}>
                      {session.isLive ? (
                        <>
                          <Video className="h-4 w-4 mr-2" />
                          Join Live Session
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Watch Recording
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: 'Advanced Calculus Masterclass',
                    host: 'MathGuru2024',
                    time: 'Today, 6:00 PM',
                    duration: '2 hours',
                    registered: 234
                  },
                  {
                    title: 'Organic Chemistry Problem Solving',
                    host: 'ChemExpert',
                    time: 'Tomorrow, 4:00 PM',
                    duration: '1.5 hours',
                    registered: 189
                  },
                  {
                    title: 'Physics Olympiad Preparation',
                    host: 'PhysicsWiz',
                    time: 'Wed, 7:00 PM',
                    duration: '2 hours',
                    registered: 156
                  }
                ].map((session, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{session.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>By {session.host}</span>
                          <span>{session.time}</span>
                          <span>{session.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-2">{session.registered} registered</div>
                        <Button size="sm">
                          <Bell className="h-4 w-4 mr-1" />
                          Register
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Leaderboard Tab */}
      {activeTab === 'leaderboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Contributors */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-600" />
                  Top Contributors This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {onlineUsers
                    .sort((a, b) => b.reputation - a.reputation)
                    .map((user, index) => (
                      <div key={user.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                        <div className="text-center min-w-[2rem]">
                          <div className={`text-lg font-bold ${
                            index === 0 ? 'text-yellow-600' :
                            index === 1 ? 'text-gray-500' :
                            index === 2 ? 'text-orange-600' :
                            'text-gray-400'
                          }`}>
                            #{index + 1}
                          </div>
                        </div>
                        <img 
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{user.name}</span>
                            <Badge variant="secondary">{user.rank}</Badge>
                            {index < 3 && (
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                index === 0 ? 'bg-yellow-100' :
                                index === 1 ? 'bg-gray-100' :
                                'bg-orange-100'
                              }`}>
                                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>{user.reputation} points</span>
                            <span>{user.helpfulAnswers} helpful answers</span>
                            <span>{user.studyStreak} day streak</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4 mr-1" />
                            Follow
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Rank</span>
                    <Badge className="bg-blue-100 text-blue-800">#247</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reputation</span>
                    <span className="font-medium">1,250</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Helpful Answers</span>
                    <span className="font-medium">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Study Streak</span>
                    <span className="font-medium">23 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Groups Joined</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'Helpful Helper', description: 'Received 50+ helpful votes', icon: '🏆', date: '2 days ago' },
                    { title: 'Study Streaker', description: '20 day study streak', icon: '🔥', date: '1 week ago' },
                    { title: 'Question Master', description: 'Asked 10 great questions', icon: '❓', date: '2 weeks ago' }
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-gray-600">{achievement.description}</div>
                        <div className="text-xs text-gray-500 mt-1">{achievement.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
