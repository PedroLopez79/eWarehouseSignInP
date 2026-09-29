export const appRoutes = {
  label: 'app',
  children: [
    {
  name: 'Sign In',
  icon: 'file-alt',
  to: '/_Manager/sign-in',   // was '/app/calendar'
  active: true
    },
    {
      name: 'Warehouse',
      icon: ['fab', 'trello'],
      to: '/app/chat',
      active: true,
      children: [
        {
          name: 'DRIVERS',
          to: '/email/inbox',
          active: true
        },
        {
          name: 'TASKS',
          to: '/email/email-detail',
          active: true
        },
        {
          name: 'EMPLOYEES STATUS',
          to: '/email/compose',
          active: true
        },
        {
          name: 'FORKLIFT',
          to: '/email/compose',
          active: true
        },
        {
          name: 'DOCKS',
          to: '/email/compose',
          active: true
        },
        {
          name: 'REVIEWERS',
          to: '/email/compose',
          active: true
        },
        {
          name: 'VISITORS',
          to: '/email/compose',
          active: true
        }
      ]
    }
  ]
};

export default [
  appRoutes
];
