"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Download, 
  Share, 
  Trash2, 
  Edit, 
  Users, 
  FileText,
  Clock
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ActivityItem {
  id: string;
  type: 'upload' | 'download' | 'share' | 'delete' | 'rename' | 'team_join' | 'team_invite';
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  resource?: string;
  metadata?: Record<string, any>;
  timestamp: string;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
  showUserInfo?: boolean;
  maxItems?: number;
  className?: string;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({
  activities,
  showUserInfo = true,
  maxItems = 10,
  className
}) => {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'upload':
        return <Upload className="h-4 w-4 text-green-600" />;
      case 'download':
        return <Download className="h-4 w-4 text-blue-600" />;
      case 'share':
        return <Share className="h-4 w-4 text-purple-600" />;
      case 'delete':
        return <Trash2 className="h-4 w-4 text-red-600" />;
      case 'rename':
        return <Edit className="h-4 w-4 text-orange-600" />;
      case 'team_join':
      case 'team_invite':
        return <Users className="h-4 w-4 text-brand" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActivityDescription = (activity: ActivityItem) => {
    switch (activity.type) {
      case 'upload':
        return `uploaded ${activity.resource}`;
      case 'download':
        return `downloaded ${activity.resource}`;
      case 'share':
        return `shared ${activity.resource}`;
      case 'delete':
        return `deleted ${activity.resource}`;
      case 'rename':
        return `renamed ${activity.metadata?.oldName} to ${activity.resource}`;
      case 'team_join':
        return 'joined the team';
      case 'team_invite':
        return `invited ${activity.metadata?.invitedEmail} to the team`;
      default:
        return 'performed an action';
    }
  };

  const getActivityBadge = (type: string) => {
    const badges = {
      upload: { label: 'Upload', variant: 'default' as const },
      download: { label: 'Download', variant: 'secondary' as const },
      share: { label: 'Share', variant: 'outline' as const },
      delete: { label: 'Delete', variant: 'destructive' as const },
      rename: { label: 'Rename', variant: 'secondary' as const },
      team_join: { label: 'Team', variant: 'default' as const },
      team_invite: { label: 'Invite', variant: 'default' as const }
    };

    const badge = badges[type as keyof typeof badges] || badges.upload;
    return <Badge variant={badge.variant}>{badge.label}</Badge>;
  };

  const displayedActivities = activities.slice(0, maxItems);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Latest actions and updates from your team
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedActivities.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No recent activity to show
            </p>
          ) : (
            displayedActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg border">
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {showUserInfo && (
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                          <AvatarFallback className="text-xs">
                            {activity.user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <span className="text-sm font-medium">{activity.user.name}</span>
                    </div>
                    {getActivityBadge(activity.type)}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-1">
                    {getActivityDescription(activity)}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;