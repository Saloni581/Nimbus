/* eslint-disable no-unused-vars */

declare type FileType = "document" | "image" | "video" | "audio" | "other";

declare interface ActionType {
    label: string;
    icon: string;
    value: string;
}

declare interface SearchParamProps {
    params?: Promise<SegmentParams>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

declare interface UploadFileProps {
    file: File;
    ownerId: string;
    accountId: string;
    path: string;
}

declare interface GetFilesProps {
    types: FileType[];
    searchText?: string;
    sort?: string;
    limit?: number;
}

declare interface RenameFileProps {
    fileId: string;
    name: string;
    extension: string;
    path: string;
}

declare interface UpdateFileUsersProps {
    fileId: string;
    emails: string[];
    path: string;
}

declare interface DeleteFileProps {
    fileId: string;
    bucketFileId: string;
    path: string;
}

declare interface FileUploaderProps {
    ownerId: string;
    accountId: string;
    className?: string;
}

declare interface MobileNavigationProps {
    ownerId: string;
    accountId: string;
    fullName: string;
    avatar: string;
    email: string;
}

declare interface SidebarProps {
    fullName: string;
    avatar: string;
    email: string;
}

declare interface ThumbnailProps {
    type: string;
    extension: string;
    url: string;
    className?: string;
    imageClassName?: string;
}

declare interface ShareInputProps {
    file: Models.Document;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onRemove: (email: string) => void;
}

// SaaS-specific types
declare type SubscriptionPlan = "free" | "pro" | "business" | "enterprise";

declare interface User {
    $id: string;
    accountId: string;
    fullName: string;
    email: string;
    avatar: string;
    plan: SubscriptionPlan;
    storageUsed: number;
    storageLimit: number;
    teamId?: string;
    role: "owner" | "admin" | "member" | "viewer";
    createdAt: string;
    lastActive: string;
}

declare interface Team {
    $id: string;
    name: string;
    description?: string;
    ownerId: string;
    members: TeamMember[];
    plan: SubscriptionPlan;
    storageUsed: number;
    storageLimit: number;
    createdAt: string;
    settings: TeamSettings;
}

declare interface TeamMember {
    userId: string;
    email: string;
    fullName: string;
    role: "owner" | "admin" | "member" | "viewer";
    joinedAt: string;
    lastActive: string;
    permissions: Permission[];
}

declare interface Permission {
    resource: string;
    actions: string[];
}

declare interface TeamSettings {
    allowPublicSharing: boolean;
    requireTwoFactor: boolean;
    allowedFileTypes: string[];
    maxFileSize: number;
    retentionPeriod: number;
}

declare interface Subscription {
    $id: string;
    userId: string;
    teamId?: string;
    plan: SubscriptionPlan;
    status: "active" | "canceled" | "past_due" | "trialing";
    currentPeriodStart: string;
    currentPeriodEnd: string;
    stripeSubscriptionId?: string;
    stripeCustomerId?: string;
}

declare interface Analytics {
    totalFiles: number;
    totalStorage: number;
    uploadsThisMonth: number;
    downloadsThisMonth: number;
    activeUsers: number;
    popularFileTypes: { type: string; count: number }[];
    storageGrowth: { date: string; storage: number }[];
    userActivity: { date: string; uploads: number; downloads: number }[];
}

declare interface ActivityLog {
    $id: string;
    userId: string;
    action: string;
    resource: string;
    resourceId: string;
    metadata: Record<string, any>;
    timestamp: string;
    ipAddress: string;
    userAgent: string;
}

declare interface FileVersion {
    $id: string;
    fileId: string;
    version: number;
    bucketFileId: string;
    size: number;
    createdAt: string;
    createdBy: string;
}

declare interface ShareLink {
    $id: string;
    fileId: string;
    token: string;
    expiresAt?: string;
    password?: string;
    downloadLimit?: number;
    downloadCount: number;
    createdBy: string;
    createdAt: string;
}

declare interface Folder {
    $id: string;
    name: string;
    parentId?: string;
    ownerId: string;
    teamId?: string;
    path: string;
    createdAt: string;
    updatedAt: string;
}

declare interface Comment {
    $id: string;
    fileId: string;
    userId: string;
    content: string;
    createdAt: string;
    updatedAt?: string;
    parentId?: string;
}

declare interface Notification {
    $id: string;
    userId: string;
    type: "file_shared" | "comment_added" | "storage_limit" | "team_invite" | "subscription_update";
    title: string;
    message: string;
    read: boolean;
    createdAt: string;
    metadata?: Record<string, any>;
}

declare interface Integration {
    $id: string;
    name: string;
    type: "google_drive" | "dropbox" | "onedrive" | "slack" | "teams";
    userId: string;
    teamId?: string;
    config: Record<string, any>;
    enabled: boolean;
    createdAt: string;
}

declare interface AuditLog {
    $id: string;
    userId: string;
    teamId?: string;
    action: string;
    resource: string;
    resourceId: string;
    oldValue?: any;
    newValue?: any;
    timestamp: string;
    ipAddress: string;
    userAgent: string;
}

declare interface BackupJob {
    $id: string;
    userId: string;
    teamId?: string;
    status: "pending" | "running" | "completed" | "failed";
    type: "full" | "incremental";
    fileCount: number;
    totalSize: number;
    startedAt: string;
    completedAt?: string;
    errorMessage?: string;
}