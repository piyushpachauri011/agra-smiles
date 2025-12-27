# MongoDB Setup Guide for Agra Smiles

## Step 1: Go to MongoDB Atlas
Visit: https://www.mongodb.com/cloud/atlas

## Step 2: Sign Up (Free Account)
- No credit card required
- Verify your email

## Step 3: Create a Cluster
- Click "Create" -> Select "FREE" tier (M0)
- Choose AWS region
- Name it: agra-smiles-cluster
- Wait 2-3 minutes for deployment

## Step 4: Create Database User
- Go to "Database Access"
- Click "+ ADD NEW DATABASE USER"
- Username: dentalist
- Password: YourSecurePassword123
- Click "Add User"

## Step 5: Set Network Access
- Go to "Network Access"
- Click "+ ADD IP ADDRESS"
- Select "Allow access from anywhere" (for dev)
- Click "Confirm"

## Step 6: Get Connection String
- Click "CONNECT" on your cluster
- Choose "Connect your application"
- Select Node.js
- Copy the connection string

## Step 7: Update .env File
Replace the MONGO_URI with your actual connection string:
```
MONGO_URI=mongodb+srv://dentalist:YourPassword@agra-smiles-cluster.xxxxx.mongodb.net/agra-smiles?retryWrites=true&w=majority
```

## Step 8: Restart Backend
- Press Ctrl+C to stop the server
- Run: npm run dev
- You should see: "MongoDB connected successfully!"

## Verify Data Saves
1. Fill out appointment form
2. Click Submit
3. Go to MongoDB Atlas
4. Check Collections -> appointments
5. Your data should be there!

## Need Help?
- Check .env file has correct MONGO_URI
- Verify database user credentials
- Ensure Network Access allows your IP
- Check MongoDB Atlas status page