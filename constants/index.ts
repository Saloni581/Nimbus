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

export const avatarPlaceholder = "data:image/png;base64,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"
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB