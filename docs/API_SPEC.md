# API Spec (Draft)

Base path: `/api/v1`

## Auth

- `GET /me` -> current user profile

## Feed

- `GET /feed` -> paginated feed items
- `POST /posts` -> create post
- `POST /posts/:id/like` -> like post
- `POST /posts/:id/comments` -> add comment

## Profiles

- `GET /users/:username` -> public profile
- `POST /users/:id/follow` -> follow/unfollow

## Markets

- `GET /markets/top-bought` -> ranked symbols by buy volume
- `GET /markets/top-sold` -> ranked symbols by sell volume
- `GET /markets/news` -> curated headlines

## Courses and verification

- `GET /courses` -> list courses
- `GET /courses/:id` -> course details
- `POST /courses/:id/progress` -> update lesson progress
- `GET /badges` -> user badge state
- `POST /verification/assessment/start` -> begin assessment
- `POST /verification/assessment/submit` -> submit answers

## Messaging

- `GET /messages/threads` -> user thread list
- `GET /messages/threads/:id` -> thread messages
- `POST /messages/threads/:id` -> send message
