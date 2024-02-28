# Safe Contract Frontend

The `Safe Contract Frontend` is a simple web application that allows users to interact with the `Safe` contract deployed on the Base Sepolia Testnet. It provides a user-friendly interface for depositing and withdrawing ERC20 tokens.

## Features

- **Connect Wallet**: Users can connect their Ethereum wallet to the application.
- **Deposit Tokens**: Users can deposit ERC20 tokens into the `Safe` contract.
- **Withdraw Tokens**: Users can withdraw deposited tokens from the `Safe` contract.
- **Token Balance**: Displays the user's token balance deposited in the contract. 

## Setup

1. **Install Dependencies**: Ensure you have Node.js and npm installed. Run `npm install` to install project dependencies.
   
2. **Configure Environment Variables**: Set the NEXT_PUBLIC_PROJECT_ID in the `.env` file.
   
3. **Start Development Server**: Run `npm run dev` to start the development server. The application will open in your default web browser.

## Usage

1. **Connect Wallet**: Click the "Connect Wallet" button to connect your Ethereum wallet to the application.
   
2. **Deposit Tokens**: Enter the amount of tokens you want to deposit and click the "Deposit" button.
   
3. **Withdraw Tokens**: Enter the amount of tokens you want to withdraw and click the "Withdraw" button.
   
4. **Token Balance**: Your token balance deposited in the contract will be displayed on the interface.
   
5. **Owner Management**: If you're the contract owner, you can manage the ERC20 token address using the explorer.

## Testing

- Ensure to thoroughly test the frontend application with different scenarios to ensure proper functionality and user experience.

## Security

- Utilize libraries like Wagmi, Reactjs to interact securely with the Ethereum blockchain. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Fill out NEXT_PUBLIC_PROJECT_ID on .env file, learm more here https://docs.walletconnect.com/getting-started

## Base sepolia testnet

Connect with Base Sepolia testnet, you can get test token here https://www.alchemy.com/faucets/base-sepolia