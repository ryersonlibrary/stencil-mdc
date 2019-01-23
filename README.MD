# Stencil Project Starter

A basic repository that includes all the packages necessary for starting a new
StencilJS project with opinionated version and release controls.  The Stencil
portion of the project is empty.

## Usage

* Checkout the repository using `git clone https://github.com/daqst/stencil-starter.git my-project`
* Remove the old origin `cd my-project && git remote remove origin`
* Install packages `npm i`
* Replace the placeholders in `package.json` and `stencil.config.ts`.
  * `PROJECT_NAME` in `package.json` and
  * `STENCIL_NS` in both `package.json` and `stencil.config.ts` (this needs to be the same value).