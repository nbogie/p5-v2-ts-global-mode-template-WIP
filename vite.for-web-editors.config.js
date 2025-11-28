//@ts-check

//WIP - not correct yet, regarding index.for-web-editors.html

//reading:
//configuring vite: https://vite.dev/config/
//build options: https://vite.dev/config/build-options
//building for production: https://vite.dev/guide/build
import { defineConfig } from "vite";
import { resolve } from "path"; // Need this to resolve the file path
export default defineConfig((_opts) => {
    return {
        build: {
            //more readable code for upload on openprocessing etc
            minify: false,
            //Turn off the inclusion of the module preload polyfill at the top of the code.
            //Removal of this polyfill could result in potentially slower module loading times
            // for multi-file setups.
            // But it's much nicer for the user not to see this.
            //See https://vite.dev/config/build-options#build-modulepreload
            modulePreload: { polyfill: false },

            //https://rollupjs.org/configuration-options/
            rollupOptions: {
                // input: {
                //     app: resolve(__dirname, "index.for-web-editors.html"),
                // },

                //externalize deps that shouldn't be bundled - e.g. p5
                external: ["p5"],
                preserveEntrySignatures: "strict",
                output: {
                    format: "es",

                    //if you don't want a consolidated single file output, enable preserveModules
                    // preserveModules: true,

                    // chunkFileNames: `[name].js`, //simplified names
                    // entryFileNames: `[name].js`,
                },
            },
        },
    };
});
