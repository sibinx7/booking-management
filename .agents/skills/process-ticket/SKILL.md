---
name: process-ticket
description: Parse and implement requirements from Jira, Azure DevOps, or Trello tickets according to the project development rules.
---

# Ticket Implementation Workflow

Follow this procedure when receiving a Jira ticket ID, Azure DevOps work item, or Trello card (pasted text, URL, or MCP fetch):

## 1. Ticket Intake & Scope Clarification
- Extract the following key details:
  - **Summary / Title**: High-level goal.
  - **Acceptance Criteria**: Exact functional and UI deliverables.
  - **Constraints / Edge Cases**: Validation rules, permissions, edge behaviors.
- If essential information is missing, clarify with the user.

## 2. Architecture & Pattern Alignment
Strictly enforce the workspace project rules:
- **Framework**: Next.js App Router (`app/` directory), TypeScript strict mode.
- **UI**: Bootstrap 5 components and classes (Grid, Forms, Buttons, Badges, Modals, etc.). **Never use Tailwind CSS classes.**
- **Forms**: Formik for state management and Yup for validation schemas.
- **API / Server State**: Redux Toolkit Query (RTK Query) endpoints (`createApi`). Avoid duplicate endpoints or TanStack Query.
- **Global State**: Redux Toolkit slices (`createSlice`) only when cross-component global state is required.
- **Code Discipline**: Reuse existing components in `src/components/`, maintain DRY principles, and avoid modifying unrelated files.

## 3. Implementation Steps
1. **API / Types First**: Define TypeScript interfaces and RTK Query endpoints/slices.
2. **Components & Forms**: Build reusable UI with Bootstrap 5 and Formik + Yup.
3. **Pages / Routes**: Wire components into the appropriate Next.js App Router `page.tsx` or `layout.tsx`.

## 4. Verification Checklist (Mandatory)
Before completing the ticket, run and pass all of the following:
- `npm run lint` (Must be 0 errors)
- `npm run build` (Ensure TypeScript types and Next.js App Router build successfully)
- Verify acceptance criteria defined in the ticket are completely fulfilled.
