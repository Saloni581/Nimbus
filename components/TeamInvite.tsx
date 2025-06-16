"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UserPlus, Mail, X, Check } from 'lucide-react';
import { toast } from 'sonner';

interface TeamInviteProps {
  onInvite?: (email: string, role: string) => Promise<boolean>;
  className?: string;
}

const TeamInvite: React.FC<TeamInviteProps> = ({ onInvite, className }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('member');
  const [isLoading, setIsLoading] = useState(false);
  const [pendingInvites, setPendingInvites] = useState<Array<{ email: string; role: string }>>([]);

  const roles = [
    { value: 'viewer', label: 'Viewer', description: 'Can view and download files' },
    { value: 'member', label: 'Member', description: 'Can upload, edit, and share files' },
    { value: 'admin', label: 'Admin', description: 'Can manage team members and settings' }
  ];

  const handleInvite = async () => {
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (pendingInvites.some(invite => invite.email === email)) {
      toast.error('This email has already been invited');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = onInvite ? await onInvite(email, role) : true;
      
      if (success) {
        setPendingInvites(prev => [...prev, { email, role }]);
        setEmail('');
        toast.success(`Invitation sent to ${email}`);
      } else {
        toast.error('Failed to send invitation');
      }
    } catch (error) {
      toast.error('Failed to send invitation');
    } finally {
      setIsLoading(false);
    }
  };

  const removePendingInvite = (emailToRemove: string) => {
    setPendingInvites(prev => prev.filter(invite => invite.email !== emailToRemove));
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-blue-100 text-blue-800';
      case 'member':
        return 'bg-green-100 text-green-800';
      case 'viewer':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Invite Team Members
        </CardTitle>
        <CardDescription>
          Add new members to your team and assign their roles
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="colleague@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleInvite()}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((roleOption) => (
                  <SelectItem key={roleOption.value} value={roleOption.value}>
                    <div>
                      <div className="font-medium">{roleOption.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {roleOption.description}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleInvite} 
            disabled={isLoading || !email}
            className="w-full"
          >
            <Mail className="h-4 w-4 mr-2" />
            {isLoading ? 'Sending...' : 'Send Invitation'}
          </Button>
        </div>

        {pendingInvites.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Pending Invitations</h4>
            <div className="space-y-2">
              {pendingInvites.map((invite, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="font-medium">{invite.email}</p>
                      <Badge className={getRoleBadgeColor(invite.role)}>
                        {invite.role}
                      </Badge>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removePendingInvite(invite.email)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamInvite;