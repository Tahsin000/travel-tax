import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AdminLayout from '../layouts/AdminLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import UserLayout from '../layouts/UserLayout.vue'

// Pages
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// Events
import EventDetailView from '../pages/events/EventDetailView.vue'
import EventListView from '../pages/events/EventListView.vue'

// Shop
import ProductDetailView from '../pages/shop/ProductDetailView.vue'
import ShopView from '../pages/shop/ShopView.vue'

// Auth
import ForgotPasswordView from '../pages/auth/ForgotPasswordView.vue'
import LoginView from '../pages/auth/LoginView.vue'
import RegisterView from '../pages/auth/RegisterView.vue'

// Cart & Checkout
import CartView from '../pages/cart/CartView.vue'
import CheckoutView from '../pages/checkout/CheckoutView.vue'

// User Dashboard
import BookingsView from '../pages/profile/BookingsView.vue'
import DashboardView from '../pages/profile/DashboardView.vue'
import OrdersView from '../pages/profile/OrdersView.vue'
import SettingsView from '../pages/profile/SettingsView.vue'

// Admin
import AdminDashboardView from '../pages/admin/AdminDashboardView.vue'
import AdminEventsView from '../pages/admin/AdminEventsView.vue'
import AdminOrdersView from '../pages/admin/AdminOrdersView.vue'
import AdminProductsView from '../pages/admin/AdminProductsView.vue'

// Success & Feedback
import OrderSuccessView from '../pages/success/OrderSuccessView.vue'
import PaymentPendingView from '../pages/success/PaymentPendingView.vue'

// Error
import NotFoundView from '../pages/NotFoundView.vue'

// Blogs (existing)
import BlogLayout from '../pages/blogs/BlogLayout.vue'
import BlogList from '../pages/blogs/BlogList.vue'
import BlogShow from '../pages/blogs/BlogShow.vue'

const routes = [
  // Main Layout Routes (ROUT_01)
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      // Events Module (ROUT_02)
      {
        path: 'events',
        name: 'events.index',
        component: EventListView
      },
      {
        path: 'events/:slug',
        name: 'events.detail',
        component: EventDetailView
      },
      // Shop Module (ROUT_03)
      {
        path: 'shop',
        name: 'shop.index',
        component: ShopView
      },
      {
        path: 'shop/:productSlug',
        name: 'shop.detail',
        component: ProductDetailView,
        props: true // Pass slug as prop
      },
      // Cart & Checkout (ROUT_05)
      {
        path: 'cart',
        name: 'cart',
        component: CartView
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: CheckoutView
      },
      // Blogs (existing)
      {
        path: 'blogs',
        component: BlogLayout,
        children: [
          {
            path: '',
            name: 'blogs.index',
            component: BlogList
          },
          {
            path: ':slug',
            name: 'blogs.show',
            component: BlogShow,
            props: true
          }
        ]
      }
    ]
  },

  // Auth Layout Routes (ROUT_04)
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginView
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPasswordView
      }
    ]
  },

  // User Dashboard Routes (ROUT_06)
  {
    path: '/profile',
    component: UserLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'profile.dashboard',
        component: DashboardView
      },
      {
        path: 'bookings',
        name: 'profile.bookings',
        component: BookingsView
      },
      {
        path: 'orders',
        name: 'profile.orders',
        component: OrdersView
      },
      {
        path: 'settings',
        name: 'profile.settings',
        component: SettingsView
      }
    ]
  },

  // Admin Panel Routes (ROUT_07 & ROUT_08)
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: '',
        redirect: '/admin/dashboard'
      },
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: AdminDashboardView
      },
      {
        path: 'events',
        name: 'admin.events',
        component: AdminEventsView
      },
      {
        path: 'products',
        name: 'admin.products',
        component: AdminProductsView
      },
      {
        path: 'orders',
        name: 'admin.orders',
        component: AdminOrdersView
      }
    ]
  },

  // Success & Feedback Pages (ROUT_09)
  {
    path: '/order-success/:orderId',
    name: 'order.success',
    component: OrderSuccessView
  },
  {
    path: '/payment-pending',
    name: 'payment.pending',
    component: PaymentPendingView
  },

  // 404 Error Handling (ROUT_10)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation Guards (placeholder - integrate with auth store)
router.beforeEach((to, from, next) => {
  const isAuthenticated = false // TODO: Check auth store
  const isAdmin = false // TODO: Check user role from auth store

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.meta.requiresAdmin && !isAdmin) {
    next('/')
  } else {
    next()
  }
})

export default router
