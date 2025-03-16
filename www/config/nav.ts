export const getNavItems = () => [
  {
    title: '主要功能',
    items: [
      {
        title: '节点管理',
        url: '/node',
        isActive: true,
      },
      {
        title: 'Pod管理',
        url: '#',
      },
      {
        title: '服务管理',
        url: '#',
      },
      {
        title: 'DNS管理',
        url: '#',
      },
      {
        title: '副本管理',
        url: '#',
      },
      {
        title: 'HPA管理',
        url: '#',
      },
    ],
  },
  {
    title: '扩展功能',
    items: [
      {
        title: 'GPU任务管理',
        url: '#',
      },
      {
        title: '云函数管理',
        url: '#',
      },
    ],
  },
]
