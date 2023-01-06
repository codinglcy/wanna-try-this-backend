<div align="center"> <h1> ❔질문에 대한 응답을 바탕으로 식사 메뉴를 추천해주는 웹 서비스❕</h1> <br>
<img src="https://user-images.githubusercontent.com/102483942/208353350-84256b46-783c-4496-9ec7-dc1d504fc9a9.png" width="50%" height="50%"> <br> <br>

<h2>서비스 링크: (http://kdt-sw2-busan-team05.elicecoding.com/)</h2>
호스팅이 만료되어 정상적인 작동을 확인하기 위해서는 클론 후 vscode에서 npm start 후 localhost로 확인해주시기 바랍니다.
  <br>
  <br>
<h2>Notion 링크: (https://wanna-try-this.notion.site/239bac740672435b8717a38de618bd2b) </h2>
프로젝트 소개 및 시연영상이 첨부되어있습니다.
</div>

<br>
<br>

## 1. 기획 의도 & 목적

> ### 🤔"오늘은 뭐 먹지?" <br>
>
> 매일 하게 되는 메뉴 고민! <br>
> 식사 시간마다 무엇을 먹을지 고민스러운 분들에게 조금이나마 선택지를 좁혀드리고자 만든 웹서비스입니다.

<br>

## 2. 웹 서비스의 주제 및, 최종적인 메인 기능과 서브 기능 설명

### ✨ 주제:

- **메인 기능**
  1.  질문을 통한 메뉴추천
  2.  로그인 하고 추천 받은 음식을 저장하면 마이페이지에서 그동안 추천받은 음식의 통계 확인
  3.  소셜 로그인
  ***
- **리팩토링**
  1.  추천받은 음식 공유
  2.  마이페이지
  3.  무한 스크롤
<img src="https://user-images.githubusercontent.com/102483942/208255245-a4068e6b-0a16-4bff-8265-786512bc218c.png" width="50%" height="50%">
<br>

## 3. 프로젝트만의 차별점, 기대 효과


  우리의 뇌는 사소한 의사결정을 할 때에도 에너지를 마구마구 쓴다고 합니다. <br>
  사용자의 기분, 선호하는 식재료, 나이 그리고 예산에 맞춰 메뉴를 데이터에서 분류하여 사용자에게 음식메뉴를 제안하는 서비스입니다.


<br>
<br>

## 4. 프로젝트 구성

### 🔧 사용 스택

- **프론트엔드** <br>
  <img src="https://user-images.githubusercontent.com/102483942/208353657-402ed134-d20e-42ee-87d5-fd8f43ae8a0c.png" width="100" height="100"> <img src="https://user-images.githubusercontent.com/102483942/208353805-7c2e2c49-f253-4b93-8238-46e349e716ac.png" width="100" height="100"> <img src="https://user-images.githubusercontent.com/102483942/208353898-3240f3f2-fdc7-416c-a7d9-1f1159a2a599.png" width="100" height="100">


- **백엔드** <br>
  <img src="https://user-images.githubusercontent.com/102483942/208354318-b3da0b0c-29fe-4417-aa97-6ef1468312b5.png" width="100" height="100"> <img src="https://user-images.githubusercontent.com/102483942/208354381-54d1feed-18df-44f0-85a0-36573f529f48.png" width="100" height="100"> <img src="https://user-images.githubusercontent.com/102483942/208354445-ae45ab8d-d720-41dc-9650-276c1900ef06.png" width="100" height="100"> <img src="https://user-images.githubusercontent.com/102483942/208354478-48ef1060-d5b4-47d2-a100-9edd348ddfa3.png" width="100" height="100">

  <br>
  <br>

### 🎨 기획

- **와이어프레임** <br>
  [<img src="https://user-images.githubusercontent.com/102483942/208355481-570a6710-a923-4fa0-8c7c-d14600df1e75.png" width="100" height="100">](https://www.figma.com/file/eaxRhh4SX5FSUEId05z0fz/5%ED%8C%80_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=50%3A1962) 
  <br>
  <br>
- **스토리보드 및 유저 시나리오**
  - 사용자는 홈 화면에서 골라볼래? 버튼을 클릭하면 모든 음식 데이터를 확인할 수 있다.
  - 사용자는 홈 화면에서 골라줄게! 버튼을 클릭하면 질문 페이지로 이동한다
  - 사용자는 질문들에 대한 답을 고르면 결과 화면에서 그에 맞춰 음식을 추천받을 수 있다
  - 사용자는 추천받은 음식을 SNS에 공유하기 버튼을 클릭하여 링크를 공유할 수 있다.
  - 사용자는 홈 화면에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 홈 화면에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 질문 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 질문 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 결과 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 결과 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 닉네임을 변경할 수 있다.
  - 사용자는 마이페이지에서 지금까지 추천받은 음식에 대한 통계 데이터를 확인할 수 있다.
  <br>
  <br>
- **포스트맨** <br>
[<img src="https://user-images.githubusercontent.com/102483942/208355173-93a20ab9-9194-4265-ab13-39e7ebf0b89a.png" width="100" height="100">](https://documenter.getpostman.com/view/20119504/UzR1J2S1) 
  <br>
  <br>  
 ### 📑 DevOps

- **애자일 개발 프로세스** <br>
  [<img src="https://user-images.githubusercontent.com/102483942/208355300-c5afd263-f683-48a6-aed8-d14ce8c20da6.png" width="100" height="100">](https://busan-team-5.atlassian.net/jira/software/projects/T5/boards/1?selectedIssue=T5-53) [<img src="https://user-images.githubusercontent.com/102483942/208355562-653780ad-b19b-4f1f-aea7-6de55ba27142.png" width="100" height="100">](https://kdt-gitlab.elice.io/sw_track/class_02_busan/web_project_2/team5)


  <br>
  <br>

## 5. 파일 및 폴더 구성
### Client
  ```
src
 ┣ components
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ Infinite.jsx
 ┃ ┣ LoginComponent.jsx
 ┃ ┣ Logo.jsx
 ┃ ┣ Modal.jsx
 ┃ ┣ ProgressBar.jsx
 ┃ ┣ Question.jsx
 ┃ ┗ SNS.jsx
 ┣ fonts
 ┃ ┣ NEXONLv1GothicBold.ttf
 ┃ ┣ NEXONLv1GothicRegular.ttf
 ┃ ┗ TmoneyRoundWindRegular.ttf
 ┣ page
 ┃ ┣ EmptyPage.jsx
 ┃ ┣ Loading.jsx
 ┃ ┣ Main.jsx
 ┃ ┣ MyPage.jsx
 ┃ ┣ NotFound.jsx
 ┃ ┣ Result.jsx
 ┃ ┗ Survey.jsx
 ┣ styles
 ┃ ┗ login.scss
 ┣ App.jsx
 ┣ App.test.js
 ┣ GlobalStyle.jsx
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
```
### Back
```
src
 ┣ db
 ┃ ┣ models
 ┃ ┃ ┣ food-model.js
 ┃ ┃ ┗ user-model.js
 ┃ ┣ schemas
 ┃ ┃ ┣ food-schema.js
 ┃ ┃ ┗ user-schema.js
 ┃ ┗ index.js
 ┣ middlewares
 ┃ ┣ error-handler.js
 ┃ ┣ index.js
 ┃ ┣ login-required.js
 ┃ ┗ user-validator.js
 ┣ passport
 ┃ ┣ googleStrategy.js
 ┃ ┣ index.js
 ┃ ┣ kakaoStrategy.js
 ┃ ┗ naverStrategy.js
 ┣ routers
 ┃ ┣ auth-router.js
 ┃ ┣ food-router.js
 ┃ ┣ index.js
 ┃ ┗ user-router.js
 ┣ services
 ┃ ┣ food-service.js
 ┃ ┣ index.js
 ┃ ┗ user-service.js
 ┣ test
 ┃ ┣ auth.spec.js
 ┃ ┣ food.spec.js
 ┃ ┗ user.spec.js
 ┣ utils
 ┃ ┣ index.js
 ┃ ┗ setUserToken.js
 ┗ app.js
```

## 6. 구성원 역할

|  이름  | 역할             |
| :----: | ---------------- |
| 서정민 | 프론트엔드, 팀장 |
| 장기성 | 프론트엔드       |
| 김동화 | 백엔드           |
| 이채연 | 백엔드           |
