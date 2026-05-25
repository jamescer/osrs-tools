# NPM Publish Guide

--token -- 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
npm token list



## **Step 1: Pre-Publish Checks**

Ensure everything is ready:

```powershell
# 1. Build the project
npm run build

# 2. Run all tests - they must pass
npm test

# 3. Check your version in package.json is bumped (currently 2.9.0)
# Verify dist/ folder was created with your compiled code
dir dist/



Step 2: Set Up 2FA Authentication
Choose one of these approaches:

Option A: Granular Access Token with Bypass 2FA (Recommended)
Go to https://www.npmjs.com/settings/~/tokens
Click "Generate New Token" → Select "Granular Access Token"
Configure:
Package: osrs-tools
Permissions: "Read and write"
Enable "Bypass 2FA" ✓
Copy the token and update .npmrc
//registry.npmjs.org/:_authToken=npm_YOUR_NEW_TOKEN_HERE

Option B: Use OTP (One-Time Password) with 2FA Enabled
Enable 2FA on your npm account: https://www.npmjs.com/settings/~/security
Keep your .npmrc token (with bypass 2fa disabled)
When publishing, use the --otp flag with a 6-digit code from your authenticator app

Step 3: Verify Authentication
# Test your npm login
npm whoami


Step 4: Publish
If using Granular Token with Bypass:
npm publish

If using 2FA with OTP:
# Get a fresh OTP from your authenticator, then:
npm publish --otp 123456

Step 5: Verify Published Package
# Check your package was published
npm view osrs-tools

# Or visit: https://www.npmjs.com/package/osrs-tools


Quick Troubleshooting
Error	Solution
E403 (needs 2FA/bypass)	Create new token with bypass enabled, or use --otp flag
E404 (not found)	Package doesn't exist yet; first publish should work with correct auth
Login failed	Run npm logout then npm login to re-authenticate
Tests fail	Fix failing tests before publishing (npm test)
