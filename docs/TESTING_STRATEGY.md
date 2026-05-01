# Testing Strategy

## Unit tests

- Core feed ranking and eligibility logic
- Badge and verification rules
- Input validation and serialization functions

## Integration tests

- Auth middleware with valid/invalid Firebase tokens
- API endpoints against a test database
- Market data adapter fallback behavior

## End-to-end tests

- User onboarding and profile setup
- Course completion to badge award flow
- Verification assessment pass/fail flow
- Messaging send and receive flow

## CI baseline

- Run lint + typecheck + unit + integration on every PR
- Run e2e on main branch and release candidates
