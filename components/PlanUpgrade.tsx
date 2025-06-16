"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Crown, Zap, Users, Shield } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/constants/plans';
import Link from 'next/link';

interface PlanUpgradeProps {
  currentPlan: keyof typeof SUBSCRIPTION_PLANS;
  storageUsed: number;
  storageLimit: number;
  className?: string;
}

const PlanUpgrade: React.FC<PlanUpgradeProps> = ({
  currentPlan,
  storageUsed,
  storageLimit,
  className
}) => {
  const plan = SUBSCRIPTION_PLANS[currentPlan];
  const storagePercentage = (storageUsed / storageLimit) * 100;
  const isNearLimit = storagePercentage > 80;
  
  const getNextPlan = () => {
    const plans = Object.keys(SUBSCRIPTION_PLANS) as Array<keyof typeof SUBSCRIPTION_PLANS>;
    const currentIndex = plans.indexOf(currentPlan);
    return currentIndex < plans.length - 1 ? plans[currentIndex + 1] : null;
  };

  const nextPlan = getNextPlan();
  const nextPlanDetails = nextPlan ? SUBSCRIPTION_PLANS[nextPlan] : null;

  const getPlanIcon = (planType: string) => {
    switch (planType) {
      case 'free':
        return <Zap className="h-4 w-4" />;
      case 'pro':
        return <Crown className="h-4 w-4" />;
      case 'business':
        return <Users className="h-4 w-4" />;
      case 'enterprise':
        return <Shield className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  if (currentPlan === 'enterprise') {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getPlanIcon(currentPlan)}
            Enterprise Plan
          </CardTitle>
          <CardDescription>
            You're on our highest tier with unlimited features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Storage Used</span>
                <span>{Math.round(storageUsed / (1024 * 1024 * 1024))}GB</span>
              </div>
              <Progress value={storagePercentage} className="h-2" />
            </div>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/settings">Manage Plan</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getPlanIcon(currentPlan)}
            {plan.name} Plan
          </div>
          <Badge variant={currentPlan === 'free' ? 'secondary' : 'default'}>
            Current
          </Badge>
        </CardTitle>
        <CardDescription>
          {currentPlan === 'free' 
            ? 'Upgrade to unlock more features and storage'
            : 'Your current subscription plan'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Storage Used</span>
              <span>
                {Math.round(storageUsed / (1024 * 1024 * 1024))}GB / {Math.round(storageLimit / (1024 * 1024 * 1024))}GB
              </span>
            </div>
            <Progress 
              value={storagePercentage} 
              className={`h-2 ${isNearLimit ? 'bg-red-100' : ''}`}
            />
            {isNearLimit && (
              <p className="text-sm text-red-600 mt-1">
                You're running low on storage space
              </p>
            )}
          </div>

          {nextPlanDetails && (
            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Upgrade to {nextPlanDetails.name}</h4>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• {Math.round(nextPlanDetails.storage / (1024 * 1024 * 1024))}GB storage</li>
                <li>• {nextPlanDetails.maxFileSize / (1024 * 1024)}MB max file size</li>
                <li>• {nextPlanDetails.maxTeamMembers === -1 ? 'Unlimited' : nextPlanDetails.maxTeamMembers} team members</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href={`/pricing?upgrade=${nextPlan}`}>
                  Upgrade for ${nextPlanDetails.price}/month
                </Link>
              </Button>
            </div>
          )}

          {currentPlan !== 'free' && (
            <Button variant="outline" className="w-full" asChild>
              <Link href="/settings">Manage Subscription</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanUpgrade;