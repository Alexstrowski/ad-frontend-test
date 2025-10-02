# Frontend Challenge - Apply Digital

![Coverage](https://img.shields.io/badge/Coverage-85.71%25-brightgreen)
![Tests](https://img.shields.io/badge/Tests-20%20passing-brightgreen)
![Build](https://img.shields.io/badge/Build-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)

An e-commerce web application developed as a technical challenge for Apply Digital

**Live Demo:** [https://ad-frontend-test.vercel.app/](https://ad-frontend-test.vercel.app/)

## ✨ Key Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Semantic HTML & Accessibility**: ARIA attributes and semantic roles throughout
- **Testing Trophy Approach**: Focus on integration tests over unit tests for higher confidence
- **85.71% Test Coverage**: Comprehensive unit and integration tests with Vitest
- **E2E Testing with Playwright**: Complete user flow testing including cart operations and genre filtering

## 🧩 Tech Stack

- **Framework**: React 18 + Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 + tailwind-merge
- **State Management**: React Context API
- **Testing**: Vitest + React Testing Library + Playwright
- **Quality**: ESLint + Prettier + Husky + Commitlint
- **API Mocking**: MSW (Mock Service Worker)
- **Deployment**: Vercel + GitHub Actions

## ⚙️ Pre-requisites

- Node.js v22 or higher
- npm
- Free port: 3000
- Docker & Docker Compose (optional)

## 🚀 Installation

### Option 1: Local Setup

```bash
# Clone the repository
git clone https://github.com/Alexstrowski/ad-frontend-test.git

# Navigate to project directory
cd frontend-test-template

# Install dependencies
npm install

# Run development server
npm run dev
```

### Option 2: Docker Setup

```bash
# Clone the repository
git clone https://github.com/Alexstrowski/ad-frontend-test.git

# Navigate to project directory
cd frontend-test-template

# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the containers
docker-compose down
```

Both setups will make the application available at [localhost:3000](http://localhost:3000/)

## 📜 Available Scripts

```bash
npm run dev           # Start development server
npm run build         # Build production bundle
npm run start         # Start production server
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run test          # Run unit tests
npm run test:watch    # Watch mode for TDD
npm run test:ui       # Interactive test UI
npm run test:coverage # Generate coverage report
npm run test:e2e      # Run E2E tests with Playwright
npm run typecheck     # Check TypeScript types
```

## 🌐 Application Routes

| Route       | Description                                              |
| ----------- | -------------------------------------------------------- |
| `/`         | Main catalog page with filtering and pagination          |
| `/?genre=X` | Filtered catalog by genre (Action, RPG, Adventure, etc.) |
| `/cart`     | Shopping cart detail and order summary                   |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── games/
│   ├── cart/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layouts/
│   │   ├── Header/
│   │   └── Footer/
│   └── ui/
│       ├── Button/
│       └── CartButton/
│
├── features/
│   ├── cart/
│   │   └── components/
│   │       ├── CardBasket/
│   │       ├── CartDetail/
│   │       ├── CartProducts/
│   │       └── CartSummary/
│   └── catalog/
│       ├── components/
│       │   ├── Card/
│       │   ├── GamesList/
│       │   └── GamesSection/
│       ├── hooks/
│       └── types/
│
├── contexts/
│   └── CartContext.tsx
│
├── hooks/
│   ├── useCart.tsx
│   ├── useGamesCatalog.tsx
│   └── useLocalStorage.tsx
│
├── reducers/
│   └── cartReducer.tsx
│
├── services/
│   └── routes.ts
│
├── testing/
│   ├── mocks/
│   └── data-generators.ts
│
├── types/
│   └── api.ts
│
└── utils/
    ├── constants.ts
    └── endpoint.ts
```

## 🧪 Test Coverage

```
📊 Current Coverage Status:
├── Statements: 85.71%
├── Branches:   82.47%
├── Functions:  81.81%
└── Lines:      85.71%
```

Coverage report available at `coverage/index.html` after running `npm run test:coverage`

## 🎯 React Patterns & Best Practices

### React Patterns Implemented

- **Provider Pattern**: Centralizes cart state management and prevents prop drilling
- **Custom Hooks Pattern**: Reusable business logic encapsulation and separation of concerns
- **State Reducer Pattern**: Predictable state updates with clear action-based mutations
- **Container/Presentational Pattern**: Improves testability and component reusability

## 📌 Technical Decisions

- **Context API over Redux**: Simpler state management for this scale
- **Vitest over Jest**: Faster test execution and better ESM support
- **MSW for API Mocking**: Consistent mocking across unit and E2E tests
- **Playwright over Cypress**: Modern E2E testing with better performance and debugging

## 🚀 CI/CD Pipeline

GitHub Actions workflow with 2 stages:

**Stage 1 - Quality Gates** (parallel):

- Lint + TypeScript checks
- Unit tests with coverage reporting
- E2E tests with Playwright

**Stage 2 - Deployment**:

- PR → Vercel preview
- Main → Production deployment

## 📈 Future Improvements

- **Loading States**: Replace text-based loading with skeleton components
- **Accessibility**: Add keyboard navigation for cart operations and genre filtering
- **Cache Strategy**: Implement SWR or React Query for optimistic updates and caching
- **Cross-tab Sync**: Implement BroadcastChannel API for real-time cart synchronization
