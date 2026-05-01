# Verification Rules

## Eligibility

- User must complete all required courses.
- User must hold all 8 curriculum badges.

## Assessment

- 30 questions, mixed difficulty.
- Passing score: 80% minimum.
- Time limit and attempt limits configured by admin policy.

## Outcomes

- Pass: set `users.is_verified = true` and issue verified badge.
- Fail: provide learning path recommendations before retry.

## Auditability

- Store attempt metadata and score history.
- Record status changes with timestamp and actor context.
