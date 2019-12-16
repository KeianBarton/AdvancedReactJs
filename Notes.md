"# AdvancedReactJs" 

https://app.pluralsight.com/library/courses/reactjs-advanced
https://github.com/jscomplete/advanced-react

## Full-stack JavaScript with React.js

- `lib` directory shared between server and client
- `public` for public assets

`npm init` for creating blank package.json

Integrate ESLint in the editor
You can configure this manually using `eslint -- --init`, take Google's / AirBnbs but we use Samer's example one from here:
https://github.com/samerbuna/.files/blob/master/.eslintrc.js

Add other Eslint dependencies (e.g. eslint-plugin-react...)

ESLint 6 wasn't working properly with VSCode when the outer folder was opened (AdvancedReactJs) - some suggestions referred to adding `"eslint.workingDirectories": ["./"]` into the VSCode `settings.json` file. Leaving at version 5 works or making sure the correct folder is open in version 6.

Website uses `express` and `ejs`

`pm2` is used to help watch for changes and manage processes for Node
