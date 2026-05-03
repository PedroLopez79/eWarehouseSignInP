export const customerRoutes = {
  label: 'CustomerModules',
  labelDisable: true,
  children: [
    {
      name: 'Customer Modules',
      active: true,
      icon: 'chart-pie',
      children: [
        {
          name: 'Shipping Request',
          to: '/',
          exact: true,
          active: true
        },
        {
          name: 'Shipping Orders',
          to: '/dashboard/analytics',
          active: true
        },
        {
          name: 'Upload e-Docs',
          to: '/dashboard/crm',
          active: true
        },
        {
          name: 'e-Documents',
          to: '/dashboard/e-commerce',
          active: true
        },
        {
          name: 'Reports',
          to: '/dashboard/project-management',
          active: true
        },
        {
          name: 'Imports',
          to: '/dashboard/saas',
          active: true
        },
        {
          name: 'Security Seals',
          to: '/dashboard/saas',
          active: true
        },
        {
          name: 'Consignees',
          to: '/dashboard/saas',
          active: true
        }
      ]
    }
  ]
};

export const appRoutes = {
  label: 'app',
  children: [
    {
      name: 'Calendar',
      icon: 'calendar-alt',
      to: '/app/calendar',
      active: true
    },
    {
      name: 'Chat',
      icon: 'comments',
      to: '/app/chat',
      active: true
    },
    {
      name: 'Email',
      icon: 'envelope-open',
      active: true,
      children: [
        {
          name: 'Inbox',
          to: '/email/inbox',
          active: true
        },
        {
          name: 'Email detail',
          to: '/email/email-detail',
          active: true
        },
        {
          name: 'Compose',
          to: '/email/compose',
          active: true
        }
      ]
    },
    {
      name: 'Events',
      icon: 'calendar-day',
      active: true,
      children: [
        {
          name: 'Create an event',
          to: '/events/create-an-event',
          active: true
        },
        {
          name: 'Event detail',
          to: '/events/event-detail',
          active: true
        },
        {
          name: 'Event list',
          to: '/events/event-list',
          active: true
        }
      ]
    },
    {
      name: 'E Commerce',
      icon: 'shopping-cart',
      active: true,
      children: [
        {
          name: 'Product',
          active: true,
          children: [
            {
              name: 'Product list',
              to: '/e-commerce/product/product-list',
              active: true
            },
            {
              name: 'Product grid',
              to: '/e-commerce/product/product-grid',
              active: true
            },
            {
              name: 'Product details',
              to: '/e-commerce/product/product-details',
              active: true
            }
          ]
        },
        {
          name: 'Orders',
          active: true,
          children: [
            {
              name: 'Order list',
              to: '/e-commerce/orders/order-list',
              active: true
            },
            {
              name: 'Order details',
              to: '/e-commerce/orders/order-details',
              active: true
            }
          ]
        },
        {
          name: 'Customers',
          to: '/e-commerce/customers',
          active: true
        },
        {
          name: 'Customer details',
          to: '/e-commerce/customer-details',
          active: true
        },
        {
          name: 'Shopping cart',
          to: '/e-commerce/shopping-cart',
          active: true
        },
        {
          name: 'Checkout',
          to: '/e-commerce/checkout',
          active: true
        },
        {
          name: 'Billing',
          to: '/e-commerce/billing',
          active: true
        },
        {
          name: 'Invoice',
          to: '/e-commerce/invoice',
          active: true
        }
      ]
    },
    {
      name: 'Kanban',
      icon: ['fab', 'trello'],
      to: '/app/kanban',
      active: true
    },
    {
      name: 'Social',
      icon: 'share-alt',
      active: true,
      children: [
        {
          name: 'Feed',
          to: '/social/feed',
          active: true
        },
        {
          name: 'Activity log',
          to: '/social/activity-log',
          active: true
        },
        {
          name: 'Notifications',
          to: '/social/notifications',
          active: true
        },
        {
          name: 'Followers',
          to: '/social/followers',
          active: true
        }
      ]
    }
  ]
};

export default [
  customerRoutes,
  appRoutes
];
