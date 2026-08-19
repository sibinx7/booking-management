# Project Development Rules

## Framework & Architecture
- Next.js (App Router)
- TypeScript in Strict Mode

## UI & Styling
- Bootstrap 5 exclusively (DO NOT use Tailwind CSS)
- Prefer Bootstrap components and utility classes
- Follow existing UI patterns across the codebase

## Forms & Validation
- Use Formik for form state management
- Use Yup for validation schemas
- Do not manage form state manually with useState unless strictly necessary

## API & Server State
- Use RTK Query for server state and data fetching
- DO NOT use TanStack Query
- Reuse existing API services and slice definitions

## State Management
- Redux Toolkit (RTK) for global application state
- Local React state (useState / useReducer) strictly for component-isolated state

## Code Quality & Discipline
- TypeScript strict mode
- Prefer reusable components
- Avoid duplicate code (DRY)
- Do not modify unrelated files or reformat untouched files

## Testing & Task Verification
Before completing any task:
1. Run linter (`npm run lint`) and ensure 0 errors.
2. Run test suites (`npm test` if available).
3. Run production build (`npm run build`) to ensure zero type or compilation errors.
