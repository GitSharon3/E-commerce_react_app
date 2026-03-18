# Aurora Eyewear - E-Commerce Web Application

A production-ready, full-stack e-commerce web application for an eyeglasses brand featuring a modern UI, responsive design, and seamless shopping experience.

**Live Demo**: [http://localhost:3000](http://localhost:3000) (Run locally)

---

## Overview

This project demonstrates modern frontend development practices by building a complete e-commerce platform with Next.js, React, TypeScript, and Tailwind CSS. It showcases real-world features including product browsing, cart management, checkout flow, and responsive design with dark/light mode support.

### Key Highlights
- **10 Unique Products** with high-quality imagery
- **Fully Responsive** mobile-first design
- **Dark/Light Theme** with smooth transitions
- **Shopping Cart** with Redux state management
- **Animated UI** using Framer Motion
- **Type-Safe** codebase with TypeScript

---

## Screenshots

### Landing Page
![Landing Page](public/screenshots/landing_page.png)
*Hero section with featured products and call-to-action*

### Products Page
![Products Page](public/screenshots/products_page.png)
*Product grid with filtering and quick view*

### Product Detail
![Product Card](public/screenshots/product_card.png)
*Product detail with image gallery and add to cart*

### Checkout
![Checkout](public/screenshots/checkout_page.png)
*Checkout form with order summary*

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |

---

## Features

### E-Commerce
- Product catalog with 10 unique eyeglasses
- Category filtering (Men, Women, Kids, Sunglasses, Premium)
- Product detail pages with image galleries
- Shopping cart with add/remove/quantity controls
- Checkout flow with order confirmation

### UI/UX
- Responsive design (mobile, tablet, desktop)
- Dark/Light mode toggle
- Smooth page transitions and micro-interactions
- Glassmorphism design aesthetic
- Mobile-friendly navigation

### Technical
- Type-safe components with TypeScript
- Component-based architecture
- Redux for global state management
- Custom hooks for cart operations
- SEO-friendly with Next.js App Router

## Project Structure

```
app/                          # Next.js App Router
├── checkout/                 # Checkout page
│   └── page.tsx
├── products/                 # Products section
│   ├── page.tsx              # Product grid (shop page)
│   └── [handle]/             # Dynamic product detail route
│       └── page.tsx
├── globals.css               # Global styles + Tailwind
├── layout.tsx                # Root layout with providers
├── page.tsx                  # Home/Landing page
└── providers.tsx             # App providers wrapper

components/                   # React components
├── layout/                   # Layout components
│   ├── AppShell.tsx          # App shell wrapper
│   ├── Container.tsx         # Max-width container
│   ├── Navbar.tsx            # Navigation bar
│   └── ThemeToggle.tsx       # Dark/light mode toggle
├── providers/                # Context providers
│   └── AppProviders.tsx      # Theme + Redux providers
├── sections/                 # Page sections
│   └── LandingHero.tsx       # Hero section
├── shop/                     # E-commerce components
│   ├── CartDrawer.tsx        # Shopping cart drawer
│   ├── CheckoutPage.tsx      # Checkout form + success
│   ├── ProductDetail.tsx     # Product detail view
│   └── ProductsGrid.tsx      # Product grid with filters
└── ui/                       # Reusable UI components
    ├── Button.tsx            # Button with variants
    ├── Card.tsx              # Card container
    ├── Drawer.tsx            # Slide-out drawer
    └── Modal.tsx             # Dialog modal

features/                     # Redux slices
└── cart/
    └── cartSlice.ts          # Cart state management

hooks/                        # Custom React hooks
└── useCart.ts                # Cart hook

lib/                          # Utilities & data
├── format.ts                 # Currency formatting
├── products.ts               # Product data (10 products)
└── types.ts                  # TypeScript types

store/                        # Redux store
├── hooks.ts                  # Typed hooks
└── store.ts                  # Store configuration

animations/                   # Animation presets
└── motion.ts                 # Framer Motion variants
```

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd /Users/sharonkadariya/Downloads/e-commerce

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

```

## Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero section |
| `/products` | `app/products/page.tsx` | Shop page with product grid |
| `/products/[handle]` | `app/products/[handle]/page.tsx` | Product detail page |
| `/checkout` | `app/checkout/page.tsx` | Checkout page |

### URL Structure
- **Handle**: URL-friendly product identifier (e.g., `halo-titanium`, `prism-carbon`)
- Example: `/products/halo-titanium` shows the Halo Titanium product detail

---

## Components

### Layout Components

#### Navbar (`components/layout/Navbar.tsx`)
- Fixed position with blur backdrop
- Responsive: Desktop nav links, Mobile hamburger menu
- Cart button with item count badge
- Theme toggle integration

#### Container (`components/layout/Container.tsx`)
- Max-width wrapper: `max-w-6xl`
- Responsive padding: `px-4 sm:px-6 lg:px-8`

### Shop Components

#### ProductsGrid (`components/shop/ProductsGrid.tsx`)
- Displays product cards in responsive grid
- Category filter buttons
- Quick view modal
- Add to cart functionality

#### ProductDetail (`components/shop/ProductDetail.tsx`)
- Image gallery with 4 thumbnails
- Main image with fade animation
- Color selector buttons
- Add to cart / Clear cart buttons
- 360° preview info box

#### CartDrawer (`components/shop/CartDrawer.tsx`)
- Slide-out drawer from right
- Item list with images
- Quantity +/- buttons
- Remove item button
- Subtotal + Checkout/Continue buttons

#### CheckoutPage (`components/shop/CheckoutPage.tsx`)
- Two-column layout (form + order summary)
- Form fields: Name, Email, Address, City, Postal code
- Order success screen with animation
- Loading state with spinner

### UI Components

#### Button (`components/ui/Button.tsx`)
Variants: `primary` | `secondary` | `ghost`
- Uses Framer Motion for tap/hover animations
- Responsive sizing

#### Drawer (`components/ui/Drawer.tsx`)
- Full-width on mobile (`w-full`)
- Fixed width on desktop (`sm:w-[400px]`)
- Slide animation from right
- Backdrop blur overlay

#### Modal (`components/ui/Modal.tsx`)
- Centered dialog
- 92vw width with max-width constraint
- Backdrop click to close

---

## State Management

### Redux Store Structure
```typescript
// Cart State
cart: {
  items: CartItem[]
}

// Cart Item
type CartItem = {
  productId: string
  variantId?: string      // Color variant
  title: string
  priceCents: number
  imageUrl: string
  quantity: number
}
```

### Cart Actions (via useCart hook)
```typescript
const cart = useCart()

cart.add({ item, quantity })           // Add item
cart.remove({ productId, variantId })  // Remove item
cart.updateQuantity({ productId, variantId, quantity })  // Change quantity
cart.clear()                           // Empty cart
cart.count                             // Total item count
cart.subtotalCents                     // Cart total
cart.items                             // Cart items array
```

---

## Styling

### Tailwind Configuration
- **Dark Mode**: `class` strategy with `next-themes`
- **Colors**: Custom black/white with opacity modifiers
- **Glassmorphism**: `backdrop-blur` + semi-transparent backgrounds

### Responsive Breakpoints
| Breakpoint | Width | Usage |
|------------|-------|-------|
| Default | < 640px | Mobile base styles |
| `sm:` | >= 640px | Small tablets |
| `md:` | >= 768px | Tablets |
| `lg:` | >= 1024px | Desktop |
| `xl:` | >= 1280px | Large desktop |

### Common Patterns
```css
/* Glass card */
bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-black/10 dark:border-white/10

/* Text with opacity */
text-black dark:text-white                    /* Primary */
text-black/70 dark:text-white/70              /* Secondary */
text-black/55 dark:text-white/55              /* Muted */

/* Responsive padding */
p-4 sm:p-6 md:p-8
```

---

## Images & Assets

### Image Sources
- **Hero**: Unsplash photo `photo-1577803645773-f96470509666`
- **Products**: 10 unique Unsplash eyeglasses images

### Next.js Image Config
```typescript
// next.config.ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' }
  ]
}
```

### Product Images
Each product has:
- `heroImage`: Main product image
- `images[]`: Array of 4 images for gallery

---

## Data Structure

### Product Type
```typescript
type Product = {
  id: string              // Unique ID (e.g., "aurora-01")
  slug: string            // URL handle (e.g., "halo-titanium")
  title: string           // Display name
  subtitle: string        // Short description
  description: string     // Full description
  priceCents: number      // Price in cents (e.g., 18900 = $189)
  categories: ProductCategory[]  // ["men", "women", "premium", "sunglasses", "kids"]
  colors: Array<{ name: string; hex: string }>
  images: string[]        // 4 Unsplash URLs
  heroImage: string       // Main image URL
}
```

### Products List (10 items)
1. **Halo Titanium** - $189
2. **Prism Carbon** - $149
3. **Aura Rose** - $169
4. **Nova Kids** - $89
5. **Aurora Gold** - $249
6. **Stealth Aviator** - $169
7. **Chrome Cat-Eye** - $149
8. **Sport Pro** - $129
9. **Bamboo Eco** - $119
10. **Vintage Round** - $139

---

## Deployment

### Build Configuration
- **Framework**: Next.js 16 with App Router
- **Output**: Static export or Node.js server
- **Image Optimization**: Uses Unsplash CDN

### Recommended Hosting
- Vercel (optimal for Next.js)
- Netlify
- Any Node.js hosting

### Environment for Production
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

---

## Future Enhancements

### Planned Features
1. **Cart Persistence**: localStorage for cart state
2. **Search**: Product search functionality
3. **User Auth**: Login/signup with accounts
4. **Wishlist**: Save favorites
5. **Reviews**: Product ratings and reviews
6. **Real Checkout**: Stripe/PayPal integration
7. **Admin Dashboard**: Product management
8. **Analytics**: Page tracking and conversion

### Performance Optimizations
- Image preloading for hero
- Lazy loading for product images
- Service worker for offline support
- Bundle size optimization

---

## Development Notes

### Code Style
- TypeScript strict mode
- Functional components with hooks
- Redux for global state
- Framer Motion for animations
- Tailwind for all styling

## Credits

- **Framework**: Next.js by Vercel
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash
- **Animations**: Framer Motion

