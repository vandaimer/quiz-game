# Quiz Game

# Run locally

Having docker & docker-compose installer, you should run:

- `cp .env.example .env`
- `docker-compose up` and wait for the docker images download and build. This will start the project in `develop mode`.
- The project will be available on `http://localhost:3000`

## What was implemented?

This project implements a REST API and NATS producers/consumer.

### The endpoints available are:

- `POST /users/register`
- `POST /users/login`
- `POST /quizzes`
- `GET /quizzes`
- `GET /quizzes/:id`

[Examples with curl](curl-examples.md)

---

- `POST /quizzes/:id/participate` - _MISSING_
- `POST /quizzes/:id/answer` - _MISSING_
- `GET /quizzes/:id/score` - _MISSING_
- `GET /leaderboard` - _MISSING_

### Use Cases

- As a user, I want to register an account, so that I can create and participate in quizzes.
  - _The user can register and create quizzes, but cannot participate in other quizzes_
- As a user, I want to log in to my account, so that I can access my quizzes and leaderboard standings.
  - _The user can log in, but cannot access their quizzes yet_
- . As a quiz creator, I want to create a new quiz with multiple-choice questions, so that other users can participate in it.
  - _The user can create a quiz with multiple-choice questions, but others cannot participate on it yet_
- As a participant, I want to view available quizzes, so that I can choose one to join
  - _Not implemented yet_
- As a participant, I want to answer quiz questions in real-time, so that I can compete with others.
  - _Not implemented yet_
- As a participant, I want to view my score and streak score, so that I can see how well I am doing.
  - _Not implemented yet_
- As a user, I want to view the leaderboard, so that I can see where I stand among other participants.
  - _Not implemented yet_

## Project Architecture

In order to follow a hexagonal/clean architecture approach, I've organized the project in the following way:

```
src
├── auth - Responsible to abstract the authenteication. Later it could be replaced by auth0 (or similar) without changing the core/domain.
├── infra - Responsible for connection with db or external services. An improvement is move NATS inside here.
├── nats-client - NATS client. First time using NATS and Nestjs, at leat is very decoupled from the project.
├── quizzes - Quiz Management Module.
│   ├── dto - Definition of what is coming from outside or returning to the user.
│   ├── entities - Core definition with what is a Quiz entity. Here there is NOT coupling with anything else, only pure definitions.
│   └── infra - Implementation of db connection/mapping.
└── users - User Management Module. Same organization as "Quizzes"
    ├── dto
    ├── entities
    └── infra
```

### Next Steps

- Make ready to deploy on production env
- Db Migrations
- Validate password while creating User
  - Min of 30 characters looks good for nowadays
- Do NOT save a plaintext password
  - If not using auth0 or similar, at leas use a asymmetric key pair to encrypt/decrypt the password
- Correct validation of id while performing "Get entity by Id"
- Improve error handling
- Add Swagger
- Add multi stage build on docker-file
- Add `api/v1` versioning
  - Help for letter new versions
- Implement a config module to read env vars from `.env`
- Make sure db connection is global and not creating many connections
- Validate properly payload on service side (not only on the controller side as doing now)
- Split into micro services is a MUST
  - One for the Users
  - One for the Questions
  - On for the Game itself
    - To control the events/answers
  - Another for the leaderboard
