# Security Baseline

## Authentication and authorization

- Use Firebase-issued JWTs for user authentication.
- Validate token signature, issuer, audience, and expiration on every request.
- Enforce authorization checks for resource ownership and visibility.

## Data protection

- Encrypt in transit with HTTPS only.
- Store secrets in environment variables or secret manager.
- Avoid storing sensitive PII unless required for product operation.

## Abuse and integrity controls

- Rate-limit post, comment, follow, and messaging endpoints.
- Add spam and profanity checks to user-generated content.
- Log and flag suspicious behavior for moderation review.

## Verification integrity

- Prevent repeated brute-force attempts on assessment endpoints.
- Track assessment attempts and lockouts.
- Audit all verification status transitions.
