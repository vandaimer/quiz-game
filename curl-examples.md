# Curl Examples

## Users

Create a new User

```bash
curl --request POST \
  --url http://localhost:3000/users/register \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"username": "abc",
	"email": "email@email.com",
	"password": "abc"
}'
```

Log in with a user (username/password)

```bash
curl --request POST \
  --url http://localhost:3000/users/login \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"username": "abc",
	"password": "abc"
}'
```

Get all users

```bash
curl --request GET \
  --url http://localhost:3000/users \
  --header 'Authorization: Bearer TOKEN' \
  --header 'User-Agent: insomnia/2023.5.8'
```

Get a specific user

(A nice validation in case wrong id or non-uuid is missing)

```bash
curl --request GET \
  --url http://localhost:3000/users/:id \
  --header 'Authorization: Bearer TOKEN' \
  --header 'User-Agent: insomnia/2023.5.8'
```

## Quizzes

Create a new Quiz (don't forget to issue your token first)

```bash
curl --request POST \
  --url http://localhost:3000/quizzes \
  --header 'Authorization: Bearer TOKEN' \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/2023.5.8' \
  --data '{
	"title": "Movie Quiz",
	"questions": [
		{
			"title": "What is action Movie own the Oscar in 2023",
			"options": [
				{
					"title": "Plane",
					"isCorrect": false
				},
				{
					"title": "Creed III",
					"isCorrect": false
				},
				{
					"title": "John Wick: Chapter 4",
					"isCorrect": true
				}
			]
		}
	]
}'
```

Get all quizzes created (don't forget to issue your token first)

```bash
curl --request GET \
  --url http://localhost:3000/quizzes \
  --header 'Authorization: Bearer TOKEN' \
  --header 'User-Agent: insomnia/2023.5.8'
```

Get a specific quiz (don't forget to issue your token first)
(A nice validation in case wrong id or non-uuid is missing)

```bash
curl --request GET \
  --url http://localhost:3000/quizzes/:id \
  --header 'Authorization: Bearer TOKEN' \
  --header 'User-Agent: insomnia/2023.5.8'
```
