# Work-Day-Scheduler

## Description

An application that allows the user to schedule their day and be informed if events are in the past, present, or future.

## Table of Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)

## Introduction

The client has asked for a daily planner for a 9-5 workday.

## Problem

The client would like to be able to see a schedule of their day and make events, or "to-dos". The client would also like some color coding to quickly see what the current hour is and which hours are in the past and which are upcoming.

## Solution

I created a daily planner which shows the current hour highlighted in one color, then past hours in a second color, and future hours in a third color. The planner also allows for saving things as events in each hour timeslot.

![Screenshot of the planner](./assets/screenshot.png)

[Link to the deployed application](https://ktetsuyama.github.io/Code_Quiz/)

## Credits

I collaborated with John Young to get started. I also used phind.com to help debug my code.

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
