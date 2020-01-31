# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [ ] Clone your forked version of the Repository.
- [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [ ] Please don't merge your own pull request.
- [ ] Add your _Team Lead_ as a Reviewer on the Pull-request
- [ ] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] What is the purpose of using _sessions_?

Sessions are commonly used to allow a server to store information about a client. It can be used to persist authentication information so there is no need to re-enter credentials on every new request the client makes to the server. When using sessions, each client will have a unique session stored on the server.

- [ ] What does bcrypt do to help us store passwords in a secure manner.

It uses an algorithm to securely hash and salt passwords. bcrypt is able to mitigate those kinds of attacks by combining the expensive key setup phase of Blowfish with a variable number of iterations to increase the workload and duration of hash calculations. Another benefit of bcrypt is that it requires a salt by default. It uses a 128-bit salt and encrypts a 192-bit magic value as noted in the USENIX documentation. `bcrypt` forces you to follow security best practices as it requires a salt as part of the hashing process. Hashing combined with salts protects you against rainbow table attacks! 

- [ ] What does bcrypt do to slow down attackers?

The largest benefit of bcrypt is that, over time, the iteration count can be increased to make it slower allowing bcrypt to scale with computing power. `bcrypt` was designed for password hashing hence it is a slow algorithm. This is good for password hashing as it reduces the number of passwords by second an attacker could hash when crafting a dictionary attack.

- [ ] What are the three parts of the JSON Web Token?

A JWT is a string that has three parts separated by a period (.). Those are: header, payload. And signature.

The header contains the algorithm with the token type. Typically the header for a JWT looks like:
{
  "alg": "HS256",
  "typ": "JWT"
}

The payload includes claims (things like permissions for the user) information or any other data we’d like to store in the token, which is most likely a user id. There are specific claims defined in the JWT standard, and you can also add custom properties to this object. An example:
{
  "sub": "1234567890", // standard - subject, normally the user id
  "name": "John Doe", // custom property
  "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
}

To create a signature, we must create a string by base64 encoding the header and payload together, and then signing it with a secret.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
