# Booking a Pledge By Anand Maharaj

## Link:

## The Planning Process:

- Wireframe   - The Wireframe will be in three (3) part:
              - Before Sign in / Sign up.(Background 1)
              - During Sign in / Sign up (Background 2)
              - Through out the application (Background 3)

- EDR - Both the EDR and Wireframes describes the layout and features of the 
        application.

- What is the purpose of this application?
              - To be used for making pledges to Sarvadeo Mandir.

- Who will be able to use this application?
              - Anyone who would like to be a member of the Temple.
              - Any member who would like to see a list of pledges.
              - Any member who would like to make a pledge to the Temple.

- Why will someone use this application?
              - This application saves the user time.
              - This application allows the user to make pledges 
                immediately.
              - This application allows the user to know what pledges were 
                already made.
              - This application allows users to make, edit, or cancel a pledge.
              - This app allows the user to connect with the Temple at all times.

- What is unique about this application?
              - There is no other application to make pledges that is available 
                for the unique requirements of the Temple.

- What is the time available to build this application?
              - Four (4) days.

- What will be the steps in building this application?
  - Download templates (server and client) from GA.
  - Build wireframes / ERD
  - Review planning.
  - Work on the server template.
  - Auth Sign up with email, password and password confirmation.
  - Auth Sign in with email and password.
  - Auth Sign out when signed in.
  - Auth Sign up and Sign in must only be available to not signed in 
    users.
  - Auth Logout and Change password must only be available to 
    signed in users.
  - Ensure all forms must clear after submit success and user 
    sign-out.
  - Give feedback to the user after each action's success or failure.
  - Get images / clips to use on clients template.
  - Be able to create a pledge.
  - Be able to update the pledge.
  - Be able to delete a pledge.
  - Be able to view single and all pledges.
  - Give feedback on user actions.
  - Clear all forms after submit. 
  - Design.
  - Git add all.
  - Git commit.
  - Git push. 
  - Git deploy.

## Installation:
- Fork and Clone repository.
- Checkout to new branch.
- Run NPM Install to instal the required dependencies. 

## Paths and Methods:

### Auth
- Sign Up (POST) URL + '/sign-up/'
- Sign In (POST) URL + '/sign-in/'
- Sign Out (DELETE) URL + '/sign-out/'
- Change Password (PATCH) URL + '/change-password/'

### Tasks
- Create Task (POST) URL + '/booking/'
- Index Task (GET) URL + '/booking/'
- Show Task (GET) URL +'/booking/' + :id
- Update Task (PATCH) URL + '/booking/' + :id
- Delete Task (DELETE) URL + '/booking/' + :id

### User Stories:

- To use this app a person has to ba a registered member.
- A user must sign up to become a member.
- A member must sign in.
- A member can update their password.
- A member can see all Pledges.
- A member can see their Pledge
- A member can create new Pledge/s and have it displayed.
- A member can update their Pledge/s.
- A member can delete their existing Pledge/s.


## Technology:
- HTML/JSX
- JavaScript
- Scss
- React
- Curl
- Express
- JSON
- MongoDB
- Mongoose
- DOM/API
- Heroku
- GitHub
- Bootstrap

## Problem Solving:
- By tracking any problems throughout the development process, using console.
  logs, referencing online documentations, NPM, TA, previous projects, Instructors, Videos, notes, and other class members of GA.
 

## How to use this Application:

### To Sign Up:
1. Click on the sign up link at the top of the Nav bar.
2. Enter an email,
3. Enter password,
4. Re-enter password,
5. Click submit.

### To Sign In:
1. Enter email,
3. Enter your password,
4. Click Sign in.

### Update Password:
1. Click Update Password,
2. Enter current password,
3. Enter new password,
4. Click Update.

### To Make a Pledge:
1. Click on Make Pledge,
2. Enter a your name,
3. Enter date,
4. Give description of the pledge, 
5. Click submit.

### To Update Your Pledge:
1. Click on show pledges,
2. Click on your name from the list,
3. Enter the changes you would like to make on the form field,
4. Click update.

### To Delete Your Pledge:
1. Click on show pledges,
2. Click on your name from the list,
3. Enter the changes you would like to make on the form field,
4. Click update.

## Important Links:
https://git.generalassemb.ly/ga-wdi-boston/capstone-modules-guide
https://git.generalassemb.ly/ga-wdi-boston/capstone-project
https://git.generalassemb.ly/ga-wdi-boston/react-auth-template
https://git.generalassemb.ly/ga-wdi-boston/express-api-template/
https://git.generalassemb.ly/ga-wdi-boston/capstone-project/issues/new
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://www.youtube.com/watch?v=PYFltdGJ-Rc&list=WL&index=2&t=65s

## WireFrame:
![Wireframe1](https://i.imgur.com/vNdf8Gq.jpg)
![Wireframe2](https://i.imgur.com/5QHJ45j.jpg)
![Wireframe3](https://i.imgur.com/54jrJH9.jpg)

## Screenshot of App:
![Screenshot](https://i.imgur.com/DbL8j40.jpg)

## Stretch Goals:

- Calender for booking a Sunday Worship service hosting. 
- A video list of past sermons.
- A audio list of religious songs.

## Thank you:

I would like to sincerely thank all members of the instructional team, TA Amalia Advincula-Roye, and all friends at GA for all their assistance and ideas on this project.
