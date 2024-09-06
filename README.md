# Cypress Test Suite for DAT.com

## Overview

This repository contains end-to-end tests for the DAT.com website and DAT APIs using Cypress. The tests ensure that key functionalities and UI elements on the homepage are working as expected.

## Folder Structure

            ├── cypress
            │   ├── e2e
            │   │   ├── api-tests
            │   │   │   ├── api-test.cy.js
            │   │   └── ui-tests
            │   │       ├── navigation-and-assertion.cy.js  
                        └── page-navigation.cy.js  
            │   ├── fixtures                  # Test data
            │   └── support
            │       ├── locators.js           # Page locators and selectors
                    ├── constants.js          # Page constants
            │       └── commands.js           # Custom Cypress commands
            ├── cypress.config.js             # Cypress configuration file
            ├── package.json
            └── README.md

## Table of Contents

- 📋 [Prerequisites](#prerequisites)
- 🛠️ [Installation](#installation)
- ▶️  [Running Tests](#running-tests)


## Prerequisites

Before you begin, ensure you have the following installed:

- IDE: You can use any Integrated Development Environment (IDE) of your choice. If you don't have one, you can download and install Visual Studio Code from 
- [IDE](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Cypress](https://www.cypress.io/) (installed via npm)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

2. **Install Dependencies:**
   ```bash
       `npm install`

4. **Running Tests:**
  Headless Mode: To run tests in headless mode (no browser UI), use:
   ```bash
       `npx cypress run`

  Headed Mode: To run tests in headed mode (with browser UI), use:
    `npx cypress open`
