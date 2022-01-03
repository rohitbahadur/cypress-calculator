FROM cypress/included:3.4.0
RUN mkdir /my-cypress-project

WORKDIR /my-cypress-project

COPY ./package.json .
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npm install


CMD [ "" ]

RUN npx cypress run
