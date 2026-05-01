# Contributing to InvestIQ

Thanks for your interest in building InvestIQ.

## Local setup

1. Install Bun 1.1+.
2. Copy `.env.example` to `.env` and fill in values.
3. Start local services:
   - `docker compose up -d`
4. Install dependencies:
   - `bun install`
5. Run development apps:
   - `bun run dev`

## Branch and PR workflow

- Create feature branches from `main`:
  - `feature/<short-description>`
- Keep PRs focused and small.
- Include test evidence in PR description.

## Code standards

- Use TypeScript in all new code.
- Keep shared contracts in `packages/shared`.
- Validate all external input at API boundaries.
- Add tests for business logic and API behavior.

## Commit style

- Use clear, imperative commit messages:
  - `add badge progress endpoint`
  - `fix portfolio allocation rounding`
