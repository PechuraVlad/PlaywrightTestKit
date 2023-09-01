# PlaywrightTestKit

This testing framework is designed to automate the testing of the WebTestKit web application using Playwright for end-to-end testing. It covers various scenarios to ensure the functionality and reliability of the application.

## Default testing

Tests the raised environment at:
- https://dashboard.render.com/
Where, respectively, there are three pages: 
- https://webtestkit.onrender.com/login
- https://webtestkit.onrender.com/protected 
- https://webtestkit.onrender.com/public


## Getting Started

To start running the tests, make sure to install the required dependencies:

After cloning the repository from GitHub to your local machine, install the required dependencies to start running the tests:

```
npm install

```


To start the tests:

```
npx playwright test

```


## Test Scenarios

1. **AccessToPublicPageAfterAuthentication.test.ts**: Verify that a user with valid credentials can successfully access the public page after authentication.

2. **loginLogout.test.ts**: Tests the ability of users to log in and log out with valid credentials.

3. **InvalidLogin.test.ts**: Covers scenarios where the user is unable to log in due to either an invalid username and password, a valid username and an invalid password, or an invalid username and a valid password.

4. **protectedPage.test.ts**: Ensures that users can visit the protected page only with proper authentication.

5. **LogoutBeforeAccessingProtectedPage.test.ts**: Verifies that users are logged out before attempting to access the protected page.

6. **publicPage.test.ts**: Tests users' the ability to visit a public page without authorization.

7. **ProtectedPageAccess.test.ts**: Validates that users cannot access the protected page without proper authentication.

## Dependencies

- `@playwright/test`: ^1.37.1
- `playwright`: ^1.37.1
- `typescript`: ^5.2.2

## Page Objects

The following Page Objects are defined to facilitate testing:

- **LoginPage.ts**: Represents the login page, including form interactions.
- **ProtectedPage.ts**: Represents the protected page to perform actions and assertions.
- **PublicPage.ts**: Represents the public page for testing accessibility.
