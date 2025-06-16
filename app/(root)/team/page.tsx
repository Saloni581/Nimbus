import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Upload, Download, HardDrive, Activity } from 'lucide-react';
import { Chart } from '@/components/Chart';
import Link from 'next/link';

const TeamDashboard = () => {
  // Mock data - in real app, fetch from API
  const teamStats = {
    totalMembers: 12,
    activeMembers: 8,
    totalStorage: 450 * 1024 * 1024 * 1024, // 450GB
    usedStorage: 320 * 1024 * 1024 * 1024, // 320GB
    uploadsThisMonth: 1247,
    downloadsThisMonth: 3891
  };

  const recentActivity = [
    { user: 'John Doe', action: 'uploaded', file: 'project-specs.pdf', time: '2 hours ago' },
    { user: 'Sarah Wilson', action: 'shared', file: 'design-mockups.zip', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'commented on', file: 'budget-2024.xlsx', time: '6 hours ago' },
    { user: 'Emily Chen', action: 'downloaded', file: 'presentation.pptx', time: '8 hours ago' }
  ];

  return (
    <div className="page-container">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="h1">Team Dashboard</h1>
          <p className="body-1 text-light-200 mt-2">
            Overview of your team's file storage and collaboration activity
          </p>
        </div>
        <Button asChild>
          <Link href="/team/members">Manage Team</Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.totalMembers}</div>
            <p className="text-xs text-muted-foreground">
              {teamStats.activeMembers} active this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Used</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">320GB</div>
            <p className="text-xs text-muted-foreground">
              of 450GB available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uploads</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.uploadsThisMonth}</div>
            <p className="text-xs text-muted-foreground">
              this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{teamStats.downloadsThisMonth}</div>
            <p className="text-xs text-muted-foreground">
              this month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Storage Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>
              Team storage utilization overview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Chart used={teamStats.usedStorage} />
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest team file activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Activity className="h-4 w-4 text-brand" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      {activity.action}{' '}
                      <span className="font-medium">{activity.file}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/team/activity">View All Activity</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamDashboard;