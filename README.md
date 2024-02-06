# Vending Machine API

This project implements a vending machine API using Node.js, Express, Sequelize, and TypeScript.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Directory Structure](#directory-structure)
  - [config](#config)
  - [general](#general)
  - [middlewares](#middlewares)
  - [products](#products)
  - [users](#users)
- [API Endpoints](#api-endpoints)

## Overview

This API simulates a vending machine, allowing users with different roles to interact with it. Users with the "seller" role can manage products (add, update, remove), while users with the "buyer" role can deposit coins, buy products, and reset their deposit.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed
- PostgreSQL installed (for Sequelize)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/karimadel88/flapKap-backend-challenge.git
   ```

2. **Change into the project directory:**

   ```bash
   cd flapKap-backend-challenge
   ```

3. **Install dependencies:**

   ```bash
   yarn install
   ```

4. **Configure the database:**

   - Create a PostgreSQL database and update the `config/db.ts` file with your database connection details.

5. **Start the server:**

   ```bash
   yarn start
   ```

   The server should now be running on http://localhost:3000.

## Directory Structure

The project has a well-organized directory structure to separate concerns and improve maintainability:

### config

Contains configuration files for the application, such as `app.ts` for general application settings and `db.ts` for database configuration.

### general

- **controller:** Contains the base controller interface (`controller-interface.ts`) and the generic controller implementation (`controller.ts`).
- **database:** Holds the database connection setup (`connection-database.ts`).
- **http:** Includes the main application startup file (`start-application.ts`).
- **repository:** Consists of the base repository interface (`repository-interface.ts`) and the generic repository implementation (`repository.ts`).
- **utils:** Houses common types used throughout the application (`types.ts`).

### middlewares

Contains custom middleware functions, such as `authenticate-buyer.ts` and `authenticate-seller.ts`, which handle authentication for buyers and sellers, respectively.

### products

This directory represents the module for handling products.

- **controllers:** Holds the product controller (`product-controller.ts`).
- **model:** Defines the product model (`product.ts`).
- **repositories:** Implements the product repository (`product-repository.ts`).
- **routes.ts:** Defines the routes related to products.

### users

This directory represents the module for handling users.

- **controllers:** Holds the user controller (`user-controller.ts`).
- **model:** Defines the user model (`user.ts`).
- **repositories:** Implements the user repository (`user-repository.ts`).
- **routes.ts:** Defines the routes related to users.

## API Endpoints

- **POST /users:** Create a new user.
- **GET /users:** Get a list of all users.
  **PUT /users/:id:** Update a product (seller role required).
- **DELETE /users/:id:** Delete a product (seller role required)
- **POST /products:** Create a new product (seller role required).
- **GET /products:** Get a list of all products.
- **PUT /products/:id:** Update a product (send userId in header).
- **DELETE /products/:id:** Delete a product (send userId in header).
- **POST /deposit:** Deposit coins into the user's vending machine account.
- **POST /buy:** Buy products with deposited money.
- **PATCH /reset:** Reset the user's deposit.

