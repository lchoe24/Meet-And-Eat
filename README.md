# 맛나는 만남 (Meet & Eat) - A web platform for small gatherings and exploring restaurants! Created by Team IIIIEE
![image](https://github.com/wecode-bootcamp-korea/47-2nd-IIIIEE-backend/assets/131442242/dd857a7d-8799-4377-b5ce-7364d624f668)

#### Modelled with inspiration from \*[AirBnB](https://www.airbnb.com/)

## 🎥 Our finished product
[Link to video!](https://www.youtube.com/watch?v=rx7zdgdbR0s&ab_channel=%EC%B5%9C%EC%A7%84%EC%9D%B4)

## 🐱 Project Duration and Team Members

- Project Duration : 2023/07/14 ~ 2023/07/28
  
- Team Members : 2 Front-End , 4 Back-end
  - Product Manager: <a href="https://github.com/Teachsue">김상원(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/Teachsue"/>
  - Project Manager: <a href="https://github.com/lchoe24">🙋🏻‍♀️최리나(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/lchoe24"/> 
  - Teammates: </br>
<a href="https://github.com/donghyeun02">신동현(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/donghyeun02"/></br>
<a href="https://github.com/hjyang369">양회진(F)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/hjyang369"/></br>
<a href="https://github.com/jseongnam">정성남(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/jseongnam"/></br>
<a href="https://github.com/jjinichoi">최진이(F)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/jjinichoi"/></br>

- GitHub repository
  - [Frontend](https://github.com/wecode-bootcamp-korea/47-2nd-IIIIEE-frontend)
  - [Backend](https://github.com/wecode-bootcamp-korea/47-2nd-IIIIEE-backend)


## 💡 Service Introduction
- Service Name : 맛나는 맛남 (Meet & Eat)
- Product Overview: Meet & Eat is a vibrant community platform designed to connect culinary enthusiasts eager to explore dining out and meet new friends. Our service acts as a bridge, facilitating memorable meetups around the joy of food.
- Target Audience:
  - Community Users: Individuals passionate about food and eager to share dining experiences with new acquaintances.
  - Partner Restaurants: Establishments looking to enhance their visibility and reach by featuring their venues on our platform, attracting a community of food lovers.
- Core Concept: Meet & Eat offers a dynamic space where anyone can step into the role of a host, crafting event postings for dining at specific restaurants, complete with time, gender, and age preferences for attendees. Similarly, users can immerse themselves as guests in events that resonate with their culinary tastes and social preferences.
  
## 💻 Key Features
1. Social media signup/login through Kakao API
2. Even posting service with customizable filters, tags, and image upload to Amazon E3
3. Restaurant and event search service with filtering according to user's preferrences 
4. Joining event service with logic to ensure that only those who match the event's criteria can join and users cannot join if the event is full
5. Payment service through KakaoPay API for the purchasing of the event.
6. Host review service where guests can rate the hosts after the event; harmful comments are prohibited out through a filtering method using TensorFlow
7. Notification service that alerts guests two hours after the event to leave a review.

## 🙋🏻‍♀️ My Contributions
As the project manager, I planned out the tasks to be completed during our two one-week sprints with the help of Slack, Notion, and Trello. I led the intial planning meetings, daily standup meetings, and retrospectives to keep our team on track for our goal and to reflect on areas where we could improve. I put great care into listening to our teammates' concerns and opinions and communicating updates in front of our team.

As for the technical aspects, I made a total of 8 APIs. Below, I describe two key features I designed.

1) Joining events: I developed a robust system ensuring that event join requests were processed accurately, considering the host's criteria for age and gender, and managing event capacity. This required careful logic to prevent overbooking and to enforce event criteria, enhancing user experience by ensuring events matched their preferences and expectations.
   - I made sure that the prospective guest had personal information that matched the crtieria of the event. For instance, we had saved information like age and gender of users in our database, and we also noted the age and gender preference of the event upon creation. Thus, I ensured that the age and gender of that prospective guest matched the event's. Otherwise, I prevented the user from being able to sign up for the event.
   - I made sure that the number of guests did not exceed the number of guests that the host allows for the event. Whenever a user joined an event, I checked to see if adding that user as a guest would cause the event to be full afterwards. If it did turn out to be full, I changed the event status to 'full' in our database, and thus prohibited any new users from joining.
     
2) KakaoPay API: I integrated the KakaoPay API to streamline the payment process for event reservations. This involved creating a secure and efficient payment flow from the initial request on the front-end to confirming payment through KakaoPay and updating our database to reflect the transaction. This feature not only simplified the payment process for users but also added a layer of trust and professionalism to our platform.

## 💭 Reflection
This project was a comprehensive exercise in both project management and technical development. Leading a diverse team under tight deadlines taught me valuable lessons in agility, communication, and the importance of a user-centered approach in software development. On the technical front, working with a range of technologies from Node.js and MySQL to integrating third-party services like KakaoPay API expanded my skill set and deepened my understanding of developing scalable, user-friendly web applications

## 📚 Technical Tools

### Frontend
|JavaScript|React|esLint|Prettier|
|:---:|:---:|:---:|:---:
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |

### Backend

|JavaScript|Node.js|MySQL|
|:---:|:---:|:---:|
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> </div> |


## ⚙️ Management Tools

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

Trello - Ticket management</br>
https://trello.com/b/HrqeM69z/iiiiee

ERD</br>
https://drawsql.app/teams/lena-4/diagrams/-3

