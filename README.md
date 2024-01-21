# Work-Day-Scheduler

## Description

An application that challenges the user with a timed quiz on Javascript fundamentals.

## Table of Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)

## Introduction

I would like a quiz to help sharpen my Javascript knowledge.

## Problem

I would like a fun way to solidify my knowledge of Javascript. Gamifying learning is an effective way to learn and keep an interest in the subject matter.

## Solution

I created a game using Javascript that asks a series of questions, informs me if the answer I chose was correct or incorrect, and allows me to save my highscore.

![Screenshot of the game](./assets/screenshot.png)

[Link to the deployed application](https://ktetsuyama.github.io/Code_Quiz/)

## Credits

I collaborated with George Schultz and John Young to troubleshoot any bugs that I had during development of this application. George helped me understand how to put the questions, choices, and answers in an array that can be queried within my game code. John Young helped me understand the code that renders the question on screen and renders the answer buttons. I also used phind.com to help debug my code.

Tutorials used:

[A Word Guess game coding tutorial by John Young](https://www.loom.com/share/29b038373f6243b6ad7a1883c6e0d0ee)

## License

MIT License

## Your Task

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am&ndash;5pm) by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)
