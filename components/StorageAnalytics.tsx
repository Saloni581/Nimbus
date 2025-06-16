"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { 
  HardDrive, 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  Image, 
  Video, 
  Music 
} from 'lucide-react';
import { convertFileSize } from '@/lib/utils';

interface StorageData {
  totalStorage: number;
  usedStorage: number;
  fileTypes: {
    documents: number;
    images: number;
    videos: number;
    audio: number;
    others: number;
  };
  monthlyGrowth: Array<{
    month: string;
    storage: number;
  }>;
  topFolders: Array<{
    name: string;
    size: number;
    fileCount: number;
  }>;
}

interface StorageAnalyticsProps {
  data: StorageData;
  className?: string;
}

const StorageAnalytics: React.FC<StorageAnalyticsProps> = ({ data, className }) => {
  const storagePercentage = (data.usedStorage / data.totalStorage) * 100;
  
  const fileTypeData = [
    { 
      name: 'Documents', 
      value: data.fileTypes.documents, 
      color: '#3fc7d7',
      icon: FileText 
    },
    { 
      name: 'Images', 
      value: data.fileTypes.images, 
      color: '#56b8ff',
      icon: Image 
    },
    { 
      name: 'Videos', 
      value: data.fileTypes.videos, 
      color: '#eea8fd',
      icon: Video 
    },
    { 
      name: 'Audio', 
      value: data.fileTypes.audio, 
      color: '#f9ab72',
      icon: Music 
    },
    { 
      name: 'Others', 
      value: data.fileTypes.others, 
      color: '#ff7474',
      icon: FileText 
    }
  ].filter(item => item.value > 0);

  const getStorageStatus = () => {
    if (storagePercentage > 90) return { status: 'critical', color: 'text-red-600' };
    if (storagePercentage > 75) return { status: 'warning', color: 'text-orange-600' };
    return { status: 'good', color: 'text-green-600' };
  };

  const storageStatus = getStorageStatus();

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Storage Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            Storage Overview
          </CardTitle>
          <CardDescription>
            Current storage usage and capacity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Storage Used</span>
              <span className={`text-sm font-medium ${storageStatus.color}`}>
                {convertFileSize(data.usedStorage)} / {convertFileSize(data.totalStorage)}
              </span>
            </div>
            <Progress value={storagePercentage} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{storagePercentage.toFixed(1)}% used</span>
              <span>{convertFileSize(data.totalStorage - data.usedStorage)} remaining</span>
            </div>
            {storageStatus.status !== 'good' && (
              <div className={`p-3 rounded-lg border ${
                storageStatus.status === 'critical' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'
              }`}>
                <p className={`text-sm ${storageStatus.color}`}>
                  {storageStatus.status === 'critical' 
                    ? 'Storage is almost full. Consider upgrading your plan or cleaning up files.'
                    : 'Storage is getting full. You may want to review your files or upgrade your plan.'
                  }
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* File Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>File Type Distribution</CardTitle>
            <CardDescription>
              Storage usage by file type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={fileTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fileTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => convertFileSize(value as number)} />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-2">
                {fileTypeData.map((item) => {
                  const Icon = item.icon;
                  const percentage = ((item.value / data.usedStorage) * 100).toFixed(1);
                  return (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <Icon className="h-4 w-4" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{convertFileSize(item.value)}</div>
                        <div className="text-xs text-muted-foreground">{percentage}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Growth */}
        <Card>
          <CardHeader>
            <CardTitle>Storage Growth</CardTitle>
            <CardDescription>
              Monthly storage usage trend
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.monthlyGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `${(value / (1024 * 1024 * 1024)).toFixed(0)}GB`} />
                <Tooltip formatter={(value) => convertFileSize(value as number)} />
                <Bar dataKey="storage" fill="#3fc7d7" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">
                Growing by ~{convertFileSize(
                  data.monthlyGrowth[data.monthlyGrowth.length - 1]?.storage - 
                  data.monthlyGrowth[data.monthlyGrowth.length - 2]?.storage || 0
                )} per month
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Folders */}
      <Card>
        <CardHeader>
          <CardTitle>Largest Folders</CardTitle>
          <CardDescription>
            Folders using the most storage space
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.topFolders.map((folder, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-4 w-4 text-brand" />
                  </div>
                  <div>
                    <p className="font-medium">{folder.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {folder.fileCount} files
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{convertFileSize(folder.size)}</p>
                  <p className="text-xs text-muted-foreground">
                    {((folder.size / data.usedStorage) * 100).toFixed(1)}% of total
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StorageAnalytics;