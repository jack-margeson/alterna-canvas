# Alterna Canvas [![Netlify Status](https://api.netlify.com/api/v1/badges/e95ad3bc-f0b6-4f6c-a9bf-4f142cf130e9/deploy-status)](https://app.netlify.com/sites/alterna-canvas/deploys)
- Repository for CS5167 User Interface I project #2, Alterna-Canvas, the game.
- Developed by Jack Margeson, Alex Yang, Kody Penn, and Al Ayoola.

## Sketches
In our mission to redesign Canvas, our team iterated over several designs through a 10-10 sketching process. Below are the sketches that we generated using Discord Whiteboard, a collaborative drawing tool. Many of these preliminary ideas were incorporated into our final design. Before each set of sketches, we present the central question/problem statement that'd we'd like to address in our Alterna Canvas project, with a short summary of the importance of the statement.

#### 1. Displaying important information like assignments, grades, and classes to our users.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/557bea39-50c5-43d6-b92a-ead769a028e7)

#### 2. Keeping a user engaged and rewarded while using the platform's gamification features.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/cd5a1d7a-638f-4094-8474-fda8798f59aa)

#### 3. Letting teachers influence the content and rewards that are being served to students.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/60d745c7-e171-4325-a347-f207f10babf5)

#### Additional design challenge sketching

Below, we iterate and expand on some of the ideas presented in the inital sketching session. The three solutions that we picked from our inital ideas were "Students can customize their own menu" for Design Challenge 1, "Point shop systems" for Design Challenge 2, and "Personalized learning paths" for Design Challenge 3.

![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/1845b1ef-b68b-4478-b352-d990ae7e936d)

#### Preliminary final design sketches

Our team then worked on creating some preliminary final sketches for what the main page would look like in our Alterna Canvas, which are shown below.

![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/ef0b73d4-2fc1-46fb-bd0d-906f33128078)

The final decision that we made was to go with a design reminiscent of the orignal Canvas design with features more clearly laid out and accessable for users. One of the final sketches, shown below, became the basis for our general site layout.

![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/fa790b4e-dfde-48ca-b0d3-4a8115a4bc94)

The site layout sketch was translated into an assortment of flexboxes for the purpose of laying out where our components live, shown in the screenshot below.

![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/b63bec9f-72f5-4469-9b4e-798ebeb7d461)

## Interviews 

Several interviews were conducted by each member of the team to create a comprehensive view of what people who use Canvas think about the current design and functionality. Within this GitHub repository, all full interview documents can be found in the [project documentation folder under interviews](https://github.com/jack-margeson/alterna-canvas/tree/main/project-documentation/interviews). A summary of common points that were brought up across the interviews:
- common point 1
- common point 2

## Contextual Inquiry

In addition to traditional interviews, the members of our team conducted contextual inquiries on Canvas users. With limited instruction from our interviewers, our interviewees were instructed to do various tasks on the Canvas website in order for us to study how they would accomplish a given task and whether or not their use of the program differed from our experiences using Canvas. All full contextual inquiries conducted can also be found in the [project documentation folder under contextual interviews](https://github.com/jack-margeson/alterna-canvas/tree/main/project-documentation/contextual-inquiries). A summary of interesting found differences from the contextual inquiries:
- interesting point 1
- interesting point 2

## Project Requirements

Following the sketching and ideation phase as ewll as the interviews/contextual inquiry phase, our team set aside some time to talk about what information we gained from these activites as we formed a list of project requirements that our project was to include alongside the mandatory requirements as dictated by the assignment. The project requirements that we worked towards with the Alterna Canvas project are listed here:
- requirement 1
- requirement 2

## Interface Description

### Dashboard
The main dashboard is where students are dropped into when they first visit Alterna Canvas. From this main page, there are a few actions that are available. Each class that the student is enrolled in is visible as a card that includes information about the class such as the course number, name, and upcoming assignments for the class.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/08e5e62e-ff9a-4452-afd5-7c945623e385)

### Navigation
Throughout Alterna Canvas, the left side of the page stays static to give students to travel to pages that they need in a free manner. This portion of the UI is designated as the Navigation tool. At the top of the navbar, a profile picture and the total number of points are shown for the current user (see: Shop for details on points). Clicking this user icon will navigate users to the user profile page. Below the profile section, a list of pages accessable on Alterna Canvas is listed, including the main Dashboard (Classes) tab, the Shop tab, the Leaderboard tab, the Announcements tab, and the To-do tab (see subsections for details).
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/7423d839-c004-4446-8322-0d98e8bd0cca)

### Class Page 
When a user clicks the "Go To Class Page" button under one of the class cards on the dashboard, the end up on the Class Page. There are many actions that can be taken from this page. For starters, there are three buttons at the top of the class page that indicate a way to go back to the main dashboard with the "All Classes" button, a way to view user grades with the "View Grades" button, and a "Launch Zoom" button. 

### Additional Information
The main body of the class page contains dropdown menus that allow users to select what content that they want to see, allowing them to focus in on what they came to view. Each section of this accordian menu contains short descriptions of the content added by the professor. Clicking the title or post/due date for the item will open additional information according to the type of content.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/bc3d2896-993b-4da6-9959-b030e9265789)
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/b7f0b4a2-e5bd-4066-ac8c-06f55b3b402d)

#### Submitting Assignments
All item entries under the assignment dropdown section of each class page has a unique feature that allow students to upload a file to submit their work. A user will be prompted by their operating system to choose a file after selecting the "Browse..." button. After a file is chosen, a student may click the Submit button to complete the assignment. Alterna Canvas will notify the user that they have uploaded the assignment correctly and they have been awarded points for doing so, indicated by the dialog text and the point counter turning green for a few seconds with an updated point count.

The submission of assignments will also progress the user's Course Progress bar. By having a simple progress bar for the entire class, the student is given a better understanding of how their assignments and grades factor into their completion of the course. Of course, it's also there as a gamification tactic to keep students determined to complete the course by keeping the progress bar increasing.

![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/800a53b8-92ee-40b9-b42f-3c3f374aceb0)
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/f689d151-1052-40c5-aedd-a126dd9f9ee1)

#### Downloading Materials
Users of Alterna Canvas looking to download course materials can do so by expanding the Course Materials dropdown on an individual class page and clicking on the download icon. The download will begin shortly. If there is additional information attached to the material, the professor is able to add this information so that users can click the item as usual to see additional information.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/852c7942-3a50-4003-a2d3-fa85480a225e)

#### Viewing Grades 
Students cna view their grades either by clicking the "View Grades" button at the top of the class page or expanding the "Grades" option.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/50891ed1-f824-472f-966e-f8f4786ab6e5)

### Shop
The main gamification feature of Alterna Canvas come from the inclusion of the point system. The main way that students can earn points is submitting assignments, in which they will recieve a fixed amount of points determined by the professor of the class. Students can then use this points in the Point Shop, accessable from the Navigation bar. The shop allows students to click rewards tied to certain point values. When they are happy with their choices, they can click the "Buy" button to check out. The points will be deducted from their points, indicated by the dialog presented and the points total turning red with the new point value briefly.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/e93e6452-bd99-4dac-a742-c29fc74cdcaf)
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/be6c4c64-d5c9-4fd5-bb3a-e281306ced9b)

### Leaderboard 
Tying into the point system of Alterna Camvas, each student is able to place on the global leaderboard by collecting points and turning in their work on time. The current rankings are always displaying on the Leaderboard tab, accessable from the Navigation bar. In this mock of Alterna Canvas, the user can simulate the passing of time by clicking the "+1 week" button, which will skip through a week in time, increasing the user's points to indicate course progress being completed over time. The leaderboard will update accordingly, displaying the students with the most points for that week.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/5682f91c-207b-41bf-927b-155a3e5c2c94)
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/2245ec06-29e1-482c-9532-a057ce396dea)

### Announcements 
The Announcements tab can be selected from the Navigation bar at any time and will show students every notification posted from the classes that they are enrolled in. This is beneficial for students as they will no longer need to select a specific course to get the announcements from the professor--as this tab is a one stop shop for all registered courses. Announcements that have not been viewed yet are indicated with a "!" mark in blue, placed before the announcement.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/1f8f5e1f-2ef4-4b43-95b9-8c449e320692)

### To-do
When a student accesses the To-do tab through the Navigation menu for the first time, they will be greeted with a screen telling them that they have no active to-do items. Students are able to create to-do items through this menu that will help them remember upcoming assignments or even calendar appointments that they may not want to forget. To do so, the student can click the "Add to-do item" button. This will prompt the user for the name of the to-do list item. Once entered, the user will see a checkbox that allows them to check off a to-do list item. The user is also able to clear all to-do list items at once with the "Clear to-do list" button. All to-do list items persist through refresh or navigation to another section of Alterna Canvas.
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/f782f436-7306-4d93-b5fc-1b11cbd452d7)
![image](https://github.com/jack-margeson/alterna-canvas/assets/31900546/48d60067-65d6-4e59-9b06-9f3831042917)

