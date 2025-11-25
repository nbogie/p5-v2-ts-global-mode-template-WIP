# steps to create this template

-   created with `yarn create vite p5-v2-ts-global-mode-template` create-vite@8.2.0 (with vanilla, ts options) on 25/11/2025
-   removed unnecessary vite vanilla stuff
-   yarn add -D p5 #installed "^2.1.1"
-   add degit.json to remove /uncloned (including this log) after cloning
-   inline minimal css in index.html - not the focus
-   main.ts: add enough sketch code to find common config errors
-   tsconfig.json: include "node_modules/p5/types/global.d.ts"
-   add instructions for the dev in the readme
