export const SUBSCRIPTION_PLANS = {
  free: {
    name: "Free",
    price: 0,
    storage: 5 * 1024 * 1024 * 1024, // 5GB
    maxFileSize: 100 * 1024 * 1024, // 100MB
    maxTeamMembers: 1,
    features: [
      "5GB storage",
      "100MB max file size",
      "Basic file sharing",
      "Web access",
      "Email support"
    ],
    limitations: [
      "No team collaboration",
      "No version history",
      "No advanced analytics",
      "No API access"
    ]
  },
  pro: {
    name: "Pro",
    price: 9.99,
    storage: 100 * 1024 * 1024 * 1024, // 100GB
    maxFileSize: 1024 * 1024 * 1024, // 1GB
    maxTeamMembers: 5,
    features: [
      "100GB storage",
      "1GB max file size",
      "Advanced sharing controls",
      "Version history (30 days)",
      "Team collaboration",
      "Priority support",
      "Mobile apps",
      "Basic analytics"
    ],
    limitations: [
      "Limited integrations",
      "Basic audit logs"
    ]
  },
  business: {
    name: "Business",
    price: 19.99,
    storage: 1024 * 1024 * 1024 * 1024, // 1TB
    maxFileSize: 5 * 1024 * 1024 * 1024, // 5GB
    maxTeamMembers: 25,
    features: [
      "1TB storage",
      "5GB max file size",
      "Advanced team management",
      "Version history (90 days)",
      "Advanced analytics",
      "API access",
      "Third-party integrations",
      "Advanced security",
      "Custom branding",
      "Phone support"
    ],
    limitations: [
      "Limited backup retention"
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: 49.99,
    storage: 10 * 1024 * 1024 * 1024 * 1024, // 10TB
    maxFileSize: 50 * 1024 * 1024 * 1024, // 50GB
    maxTeamMembers: -1, // Unlimited
    features: [
      "10TB+ storage",
      "50GB max file size",
      "Unlimited team members",
      "Unlimited version history",
      "Advanced compliance",
      "SSO integration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Advanced backup & recovery",
      "White-label solution"
    ],
    limitations: []
  }
} as const;

export const FEATURE_FLAGS = {
  teamCollaboration: ["pro", "business", "enterprise"],
  versionHistory: ["pro", "business", "enterprise"],
  advancedAnalytics: ["business", "enterprise"],
  apiAccess: ["business", "enterprise"],
  customBranding: ["business", "enterprise"],
  ssoIntegration: ["enterprise"],
  whiteLabel: ["enterprise"],
  advancedSecurity: ["business", "enterprise"],
  prioritySupport: ["pro", "business", "enterprise"],
  phoneSupport: ["business", "enterprise"]
} as const;