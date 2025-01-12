# nagp-micro-frontend

The repository contains 3 projects

- `container` - Shell application that will beintegrate the micro-frontend together
- `insurance` - Micro-Frontend 1 for insurances, Shows a list of available insurance offerings
- `payment` - Micro-Frontend 2 for payemnts, handels payments for buying insurances

### Steps to setup

Clone the repository on you local machine. Then execute the below commands on a terminal

```
// skip this if your cwd is alreday the root folder of the repository
cd nagp-micro-frontend

// Install dependencies
yarn install

// Start local server
yarn start:all
```

Now this will start the local server as per below and open 3 tabs in your browser respectively

- `container` application on port: `4200` => `http://localhost:4200`
- `insurance` micro front end on port: `4201` => `http://localhost:4201`
- `payment` micro front end on port: `4202` => `http://localhost:4202`

### Communication bewtween micro-front ends

The `MfeBridgeService` localted at `libs/shared/src/services/bridge.service.ts` faciliates the communication between `insurance` and `payments` micro-front ends. The insurance MFE initiates a payemnt request and the payments MFE takes that request and handels the payemnt.

### OWASP Top 10

Implemented OWASP `A06:2021 Vulnerable and Oudated components` the same can be validated using the below command

```
npm audit
```
##### As of 12/01/2025
![image](https://github.com/user-attachments/assets/b791bb5f-a5c2-478a-9b02-99dfb48bee7c)

### Web worker

A Web worker in `container` app keeps track of the time the user is still on the home page of the application and after `5000ms` it shows a poup dialog. The worker is located at `projects/container/src/app/app.worker.ts`.

## Netlify

All the 3 application are hosted on netlify following the micro-front end approach below are the details of the same

- `container` : [Container - Netlify](https://kaleidoscopic-semolina-27b8b8.netlify.app)
- `insurance` : [Insurance MFE - Netlify](https://stellar-profiterole-a3c094.netlify.app)
- `payment` : [Payments MFE - Netlify](https://cerulean-lamington-00a451.netlify.app)
