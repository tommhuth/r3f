import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { ReactThreeFiber } from "@react-three/fiber";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        settings: {
            react: {
                version: "18.3",
            },
        },
        plugins: {
            "@react-three/fiber": ReactThreeFiber,
        },
    },
    pluginReact.configs.flat.recommended,
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "prefer-const": "off",
            // jeez :/ https://github.com/pmndrs/react-three-fiber/discussions/2487#discussioncomment-10642477
            "react/no-unknown-property": "off",
        },
    },
];
