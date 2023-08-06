# 맛나는 만남 (Meet & Eat) - A web platform for small gatherings and exploring restaurants! Created by Team IIIIEE
![image](https://github.com/wecode-bootcamp-korea/47-2nd-IIIIEE-backend/assets/131442242/dd857a7d-8799-4377-b5ce-7364d624f668)

#### Modelled with inspiration from \*[AirBnB](https://www.airbnb.com/)

## 🐱 Project Duration and Team Members

- Project Duration : 2023/07/14 ~ 2023/07/28
  
- Team Members : 2 Front-End , 4 Back-end
  - Product Manager: <a href="https://github.com/Teachsue">김상원(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/Teachsue"/>
  - Project Manager: <a href="https://github.com/lchoe24">최리나(B)</a><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/lchoe24"/> 
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
- Our Product : A community that connects those who want to meet new people and enjoys eating out.
- Our Customers : Community users who want to share their love of food with people and want to meet new friends. Partners who want to increase their restaurant publicity and accessibility by displaying their restaurant on our website.
- Our Concept :
  - Any user can become a host and create an event posting to visit a specified restaurant on a specified time and set the gender and age criteria for their event's guest. Any user can also become a guest of events that fit their description, filter the restaurants and postings based on the food they want to eat and the types of people they want to see, and leave reviews for hosts after the events. A user can create posting for a fee, while partner restaurants pay a fee for our booking service. In this way, we act as a mediator between host and guests and a mediator between users and restaurants. 
    

## 💻 Key Features
1. Social media signup/login through Kakao API
2. Even posting service with customizable filters, tags, and image upload to Amazon E3
3. Joining event service with logic to ensure that only those who match the event's criteria can join and users cannot join if the event is full
4. Payment service through KakaoPay API for the purchasing of the event.
5. Host review service where guests can rate the hosts after the event; harmful comments are prohibited out through a filtering method using TensorFlow
6. Notification service that alerts guests two hours after the event to leave a review.

## 🙋🏻‍♀️ My Contributions
Individually, I mainly focused on two key features: designing the service logic for joining events and implementing the KakaoPay API.

1) Joining events: There were many points that I had to take into account to assure that the process of joining events could proceed smoothly, without bugs in the logic.
   - I made sure that the prospective guest had personal information that matched the crtieria of the event. For instance, we had saved information like age and gender of users in our database, and we also noted the age and gender preference of the event upon creation. Thus, I ensured that the age and gender of that prospective guest matched the event's. Otherwise, I prevented the user from being able to sign up for the event.
   - I made sure that the number of guests did not exceed the number of guests that the host allows for the event. Whenever a user joined an event, I checked to see if adding that user as a guest would cause the event to be full afterwards. If it did turn out to be full, I changed the event status to 'full' in our database, and thus prohibited any new users from joining.
     
2) KakaoPay API: I implemented this API to allow a simple and quick method for hosts to purchase events. When a host desires to purchase an event, they utilize the initial payment request API shown on the front-end. I created an API that receives the necessary payment information from the front end, then use Axios to send a request to the KakaoPay confirmation API to assure that the payment was processed correctly. Once I receive a successful response from the KakaoPay API, I change the event status to 'purchased' and parse the response data to save the order and payment information in our database.

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

