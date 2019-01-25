# Capstone Project - Team Instinct Boston Raid Leaderboard

### Preparation

1. Fork and clone this repository.
2. Create a new branch for your work.
3. Checkout to that new branch.
4. Install dependencies with `npm install`.
5. Run `npm start` to run site on local host.

![alt text](/public/appscreenshot.png "Team Instinct Boston Raid Leaderboard V1 app screenshot")

For this project, we were tasked with creating a front end app and our own API from scratch using the technologies we have learned at the Web Development Immersive at General Assembly. As a member of of the local Team Instinct Community, I recognized an opportunity to take an existing task, and improve upon it. They have raid competitions to see which trainers can finish them in the quickest time possible - and they were doing it through an incredibly manual process.

The goal for me in this iteration, though, was to achieve MVP (minimum viable product), and that was to have my client communicate with an API that I created, allowing a user to first create a Pokemon Go raid record for version 1, with later versions eventually allowing those raids to be sortable as a sort of leaderboard for the local Team Instinct community. The raids are saved on my Heroku server with the database created on Rails, and the user is able to CRUD those leagues.

The page is a single page application that does not necessitate refreshing at any point to operate. Throughout the process, Git and GitHub were used for version control. My planning process was to figure out the wireframes to dictate the path of the user. We had four days to complete this project. My first step was to create the back end server in Rails, and confirmed all the CRUD actions with both curl scripts and React routes, for both users and raids. Once that was complete, I then moved on to updating the client and using React to allow the user to navigate the site. Creating this app was a great experience for me in that I had worked with a stakeholder to create ideas and application requirements, as well as managing expectations.

This took a lot longer than I had expected, as it took a lot of double checking, testing, and re-testing with new paths created on the page. React is fun! Working with the nuances of making routes do more than routing proved difficult, but I hope to incorporate React Bootstrap in short order for the nav bar. Working with a many-to-many relationship in Rails proved to be a challenge, and I'm looking forward to re-visiting that portion of this app when I have more time. Four days flew by quickly!

For the purposes of this project, the following are the rules that the app had to adhere to:
  * App must be a single page application and not use refresh to make any actions or updates
  * User must be able to create a new resource
  * User must be able to update a resource
  * User must be able to delete a resource
  * User must be able to view a single or multiple resource(s)
  * All resource actions must only be available to a signed in user.
  * Give feedback to the user after each action's success or failure.
  * All forms must clear after submit success or failure
  * Adhering to the user stories set forth below.

  ### User stories, version 1:
1. As a user, I should be able to sign up for the app, and when I sign up, the option to do so should disappear.
2. As a user, I should be able to sign in to the app after I have signed up for the game, and when I sign in to the game, options to sign up and sign in should disappear.
3. As a user, I should be able to change my password, and log out successfully.
4. As a user, I want to be able to create a team.
5. As a user that is signed in, I want to be able to create a raid that includes the raid boss' name and the time remaining at the conclusion of the raid event.
6. As a user that is signed in, I want to be able to view all raids submitted by other users.
7. As a user that is signed in, I want to be able to update and  delete any one of my raids.

### List of technologies used:
  * JavaScript
  * React
  * JSX
  * HTML
  * SASS
  * Curl
  * Git
  * GitHub

### Wireframes
Below is the version 1 wireframe created for MVP for this app.
![alt text](/public/tibraidleaderboardwireframe.jpeg "Team Instinct Boston Raid Leaderboard V1 wireframe")

### Links:
[App client](https://cedis81.github.io/tib-raidlb-client/#/)

[Heroku server page](https://dry-dusk-62111.herokuapp.com/)

[Back end GitHub repo](https://github.com/cedis81/tib-backend)

### Unsolved issues:
Below are unsolved issues that I would like to address in future iterations:
* Allow users to view all raids submitted by them in one list.
* Allow users to view all raids submitted for one particular raid boss.
* Allow users to upload photos and display those photos when their raids are selected.
* Allow users to include other users in their raids, and track number of participants as a means for sorting.
* Allow users to sort raids by time, by raid boss, by tier.
* Use Pokemon Go or Pokemon API to pull Pokemon data.
