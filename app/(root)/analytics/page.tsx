import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { TrendingUp, TrendingDown, Users, Files, Download, Upload } from 'lucide-react';

const AnalyticsPage = () => {
  // Mock data - in real app, fetch from API
  const storageGrowth = [
    { month: 'Jan', storage: 120 },
    { month: 'Feb', storage: 145 },
    { month: 'Mar', storage: 180 },
    { month: 'Apr', storage: 220 },
    { month: 'May', storage: 280 },
    { month: 'Jun', storage: 320 }
  ];

  const fileTypeDistribution = [
    { name: 'Documents', value: 45, color: '#3fc7d7' },
    { name: 'Images', value: 30, color: '#56b8ff' },
    { name: 'Videos', value: 15, color: '#eea8fd' },
    { name: 'Others', value: 10, color: '#f9ab72' }
  ];

  const userActivity = [
    { day: 'Mon', uploads: 24, downloads: 45 },
    { day: 'Tue', uploads: 32, downloads: 52 },
    { day: 'Wed', uploads: 28, downloads: 38 },
    { day: 'Thu', uploads: 35, downloads: 48 },
    { day: 'Fri', uploads: 42, downloads: 65 },
    { day: 'Sat', uploads: 18, downloads: 25 },
    { day: 'Sun', uploads: 15, downloads: 20 }
  ];

  const topFiles = [
    { name: 'project-presentation.pptx', downloads: 156, size: '45MB' },
    { name: 'team-handbook.pdf', downloads: 134, size: '12MB' },
    { name: 'design-assets.zip', downloads: 98, size: '234MB' },
    { name: 'quarterly-report.xlsx', downloads: 87, size: '8MB' },
    { name: 'product-demo.mp4', downloads: 76, size: '567MB' }
  ];

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="h1">Analytics</h1>
        <p className="body-1 text-light-200 mt-2">
          Detailed insights into your file storage and usage patterns
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Files</CardTitle>
            <Files className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18,432</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              -3% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320GB</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +15% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Storage Growth */}
            <Card>
              <CardHeader>
                <CardTitle>Storage Growth</CardTitle>
                <CardDescription>
                  Monthly storage usage over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={storageGrowth}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="storage" stroke="#3fc7d7" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* File Type Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>File Type Distribution</CardTitle>
                <CardDescription>
                  Breakdown of files by type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fileTypeDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {fileTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* User Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription>
                Upload and download activity over the past week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uploads" fill="#3fc7d7" name="Uploads" />
                  <Bar dataKey="downloads" fill="#56b8ff" name="Downloads" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Most Downloaded Files</CardTitle>
              <CardDescription>
                Top performing files by download count
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-muted-foreground">Size: {file.size}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{file.downloads} downloads</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Analytics</CardTitle>
              <CardDescription>
                User engagement and activity metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">User analytics coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                System performance and optimization insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Performance metrics coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;