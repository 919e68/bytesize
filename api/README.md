# README

* Models

```db
Users
  - id
  - username
  - name
  - password_digest

Sessions
  - id
  - user_id
  - token
  - expires_at

Flavors
  - id
  - name
  - icon
  - description

Snacks
  - id
  - sid
  - user_id
  - name
  - icon
  - description

SnackFlavors
  - id
  - snack_id
  - flavor_id

Ratings
  - id
  - user_id
  - snack_id
  - rating
  - comment
```
