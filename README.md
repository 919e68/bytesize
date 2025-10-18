# 🥪SnackSwap

SnackSwap is a fun snack-sharing platform where users can discover, rate, and share their favorite snacks with others.
Find today’s trending bites or the all-time legendary snacks — one rating at a time! 😋

url: <https://snackswap.playfun.dev>

## 🧠 Tech Stack

Frontend: React + TypeScript + React Query + React Hook Form + Tailwind
Backend: Ruby on Rails + GraphQL
Database: MySQL
Auth: JWT || Cookies

## 🚀 Features

### 🔐 Authentication

- Sign up, log in, and manage your account securely.

### 🍪 Manage Snacks

- Add, edit, or delete your own snacks.
- Each snack includes a name, icon, and description.

### 🔍 Search Snacks

- Quickly find snacks by name or description.
- Search is wildcard

### 🧂 Filter by Flavor

- Browse snacks based on their flavor profiles (e.g., sweet, salty, spicy).
- Flavors are predefined but can be managed directly in the database.

### 💡 Suggest Snacks

- Suggest new snacks for others to try — sharing is caring!

### 🔄 Snack Swapping (Coming Soon)

- The ability to swap snacks with other users isn’t implemented yet — but it’s on the roadmap! 🚧

### ⭐ Featured Snacks

- Two featured sections highlight the best snacks:
- Top Rated All Time — the highest-rated snack ever.
- Top Rated Today — the most popular snack today.
- If both are the same, Top Rated Today will not be shown to avoid duplication.

### 🌶️ Flavors Management

- Flavors are fixed, but can be updated in the database as needed.

### 🌟 Rate Other Users’ Snacks

- Users can rate and comment on snacks added by others.
- Ratings contribute to each snack’s average score and featured rankings

## 🧠 Instruction

- Requirements: `Docker`, `Docker Compose`

```bash
chmod +x start
./start
```
