export const navItems = [
    {
        name: 'Dashboard',
        icon: '/assets/icons/dashboard.svg',
        url: '/',
    },
    {
        name: 'Documents',
        icon: '/assets/icons/documents.svg',
        url: '/documents',
    },
    {
        name: 'Images',
        icon: '/assets/icons/images.svg',
        url: '/images',
    },
    {
        name: 'Media',
        icon: '/assets/icons/video.svg',
        url: '/media',
    },
    {
        name: 'Others',
        icon: '/assets/icons/others.svg',
        url: '/others',
    },
];

export const teamNavItems = [
    {
        name: 'Team Dashboard',
        icon: '/assets/icons/dashboard.svg',
        url: '/team',
    },
    {
        name: 'Members',
        icon: '/assets/icons/users.svg',
        url: '/team/members',
    },
    {
        name: 'Analytics',
        icon: '/assets/icons/analytics.svg',
        url: '/team/analytics',
    },
    {
        name: 'Settings',
        icon: '/assets/icons/settings.svg',
        url: '/team/settings',
    },
];

export const adminNavItems = [
    {
        name: 'Admin Dashboard',
        icon: '/assets/icons/dashboard.svg',
        url: '/admin',
    },
    {
        name: 'Users',
        icon: '/assets/icons/users.svg',
        url: '/admin/users',
    },
    {
        name: 'Teams',
        icon: '/assets/icons/teams.svg',
        url: '/admin/teams',
    },
    {
        name: 'Analytics',
        icon: '/assets/icons/analytics.svg',
        url: '/admin/analytics',
    },
    {
        name: 'Billing',
        icon: '/assets/icons/billing.svg',
        url: '/admin/billing',
    },
];

export const actionsDropdownItems = [
    {
        label: 'Rename',
        icon: '/assets/icons/edit.svg',
        value: 'rename',
    },
    {
        label: 'Details',
        icon: '/assets/icons/info.svg',
        value: 'details',
    },
    {
        label: 'Share',
        icon: '/assets/icons/share.svg',
        value: 'share',
    },
    {
        label: 'Download',
        icon: '/assets/icons/download.svg',
        value: 'download',
    },
    {
        label: 'Move',
        icon: '/assets/icons/move.svg',
        value: 'move',
    },
    {
        label: 'Copy',
        icon: '/assets/icons/copy.svg',
        value: 'copy',
    },
    {
        label: 'Version History',
        icon: '/assets/icons/history.svg',
        value: 'versions',
    },
    {
        label: 'Delete',
        icon: '/assets/icons/delete.svg',
        value: 'delete',
    },
];

export const sortTypes = [
    {
        label: 'Date created (newest)',
        value: '$createdAt-desc',
    },
    {
        label: 'Created Date (oldest)',
        value: '$createdAt-asc',
    },
    {
        label: 'Name (A-Z)',
        value: 'name-asc',
    },
    {
        label: 'Name (Z-A)',
        value: 'name-desc',
    },
    {
        label: 'Size (Highest)',
        value: 'size-desc',
    },
    {
        label: 'Size (Lowest)',
        value: 'size-asc',
    },
];

export const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1GB default

export const FILE_TYPES = {
    document: ['pdf', 'doc', 'docx', 'txt', 'xls', 'xlsx', 'ppt', 'pptx'],
    image: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'],
    video: ['mp4', 'avi', 'mov', 'mkv', 'webm', 'flv'],
    audio: ['mp3', 'wav', 'ogg', 'flac', 'aac'],
    other: []
};

export const ACTIVITY_TYPES = {
    FILE_UPLOAD: 'file_upload',
    FILE_DOWNLOAD: 'file_download',
    FILE_DELETE: 'file_delete',
    FILE_SHARE: 'file_share',
    FILE_RENAME: 'file_rename',
    TEAM_INVITE: 'team_invite',
    TEAM_JOIN: 'team_join',
    TEAM_LEAVE: 'team_leave',
    SUBSCRIPTION_CHANGE: 'subscription_change',
    LOGIN: 'login',
    LOGOUT: 'logout'
};

export const NOTIFICATION_TYPES = {
    FILE_SHARED: 'file_shared',
    COMMENT_ADDED: 'comment_added',
    STORAGE_LIMIT: 'storage_limit',
    TEAM_INVITE: 'team_invite',
    SUBSCRIPTION_UPDATE: 'subscription_update',
    SECURITY_ALERT: 'security_alert'
};

export const INTEGRATION_TYPES = {
    GOOGLE_DRIVE: 'google_drive',
    DROPBOX: 'dropbox',
    ONEDRIVE: 'onedrive',
    SLACK: 'slack',
    TEAMS: 'teams',
    ZAPIER: 'zapier'
};

export const ROLES = {
    OWNER: 'owner',
    ADMIN: 'admin',
    MEMBER: 'member',
    VIEWER: 'viewer'
};

export const PERMISSIONS = {
    READ: 'read',
    WRITE: 'write',
    DELETE: 'delete',
    SHARE: 'share',
    ADMIN: 'admin'
};