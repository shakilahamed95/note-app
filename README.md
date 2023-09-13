## About This website

This is a note taking website where user can add there notes,read there notes,update there note and delete there note.

## Technology Used

- Next.js
- TypeScript
- Next Auth
- Redux
- React Query
- Tailwind CSS
- Radix UI
- json-server
- Axios
- React toastify

## How To Run

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).To run this project on your computer first clone the repo or manually download the repo. After that follow all the steps given below :

1. Install the project dependencies by running the following command:

```
npm install
```

2. create a .env file on the root of the project and add following variable as given below.

```
NEXTAUTH_SECRET= add your secret here
NEXT_AUTH_URL= add your authentication api here
```

3. Run the json-server by using command given below. Which will run our server on http://localhost:5000/

```
npm run json-server
```

4. Finally run the project using following command given below:

```
npm run dev
```

## Project Overview

At the home page user can see a navbar, footer and some previously added notes. All notes are displayed on a table basis. In this table each note has two button. One is to update the note and one is to delete the note. When user click on the update button an input field will appear on the place of note where user can input updated text. After inserting updated text user need to click on save button to complete the update process. When user clicked on the delete button of a particular note it will deleted from the database. To add a note user must need to login first. User can login with there username and password. In this project I have used https://dummyjson.com/ API and Next auth to perform login operation. After login user will redirect to add new note page where user can add new notes. add new note is a protected page. After complete any successful operation like add,update,delete user will get a toast notification of that operation.
