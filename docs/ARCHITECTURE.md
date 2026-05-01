# InvestIQ Architecture

## Overview

InvestIQ is organized as a monorepo with:

- `apps/mobile`: React Native client
- `apps/api`: Node.js backend
- `packages/shared`: shared types and validation schemas

## Core domains

- Identity and profiles
- Social feed and interactions
- Portfolio snapshots and performance
- Learning courses, badges, and verification
- Direct messaging and notifications
- Market data ingestion and caching

## High-level flow

1. Mobile client authenticates with Firebase.
2. API validates Firebase token and maps to internal user identity.
3. API serves feed, profile, course progress, and messaging data from Postgres.
4. API fetches and caches market data from provider integrations.
5. Realtime channel delivers messaging and feed events.

## Data stores

- Postgres for relational product data
- Optional Redis for caching and realtime fan-out

## Non-functional goals

- API p95 latency under 300ms for core read endpoints
- Observability for auth, feed ranking, and market sync jobs
- Clear separation of read models vs write paths for scale
