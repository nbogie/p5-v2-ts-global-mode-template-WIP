# steps to create this template

-   created with `yarn create vite p5-v2-ts-global-mode-template` using create-vite@8.2.0 (with vanilla, ts options) on 25/11/2025
-   removed unnecessary vite vanilla stuff
-   install p5 dev dependency: yarn add -D p5 #installed "^2.1.1"
-   add [degit.json to remove](https://github.com/Rich-Harris/degit?tab=readme-ov-file#remove) /uncloned (including this log) after cloning
-   inline minimal css in index.html - it is not the focus
-   main.ts: add enough sketch code to find common config errors (eventually we will make main.ts very simple)
-   tsconfig.json: include "node_modules/p5/types/global.d.ts" for p5 types
-   readme: add instructions for the dev
