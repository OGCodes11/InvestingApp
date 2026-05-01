# Data Model (Initial)

## Core tables

- `users` (id, firebase_uid, username, bio, is_verified, created_at)
- `profiles` (user_id, avatar_url, ytd_return, allocation_json)
- `posts` (id, user_id, body, created_at)
- `post_tickers` (post_id, symbol)
- `post_likes` (post_id, user_id, created_at)
- `comments` (id, post_id, user_id, body, created_at)
- `follows` (follower_id, followee_id, created_at)
- `courses` (id, slug, title, level)
- `lessons` (id, course_id, title, order_index)
- `course_progress` (user_id, lesson_id, completed_at)
- `badges` (id, code, name, level)
- `user_badges` (user_id, badge_id, awarded_at)
- `assessments` (id, user_id, status, score, started_at, submitted_at)
- `message_threads` (id, created_at)
- `thread_members` (thread_id, user_id)
- `messages` (id, thread_id, sender_id, body, created_at)

## Indexing priorities

- Feed reads by `posts.created_at DESC`
- Follow graph lookups on `(follower_id, followee_id)`
- Messaging queries on `(thread_id, created_at)`

## Data constraints

- Unique `users.firebase_uid`
- Unique `users.username`
- Prevent self-follow in `follows`
