# awab-typescript-widget
Template for AWAB 2.3 TypescriptWidget

## Suggested Installation

1. Download the latest WebApp Builder from (here)[https://developers.arcgis.com/web-appbuilder/]
2. Set it up
3. Clone this Repository to a local folder

```bash
git clone https://github.com/ech-beku/awab-typescript-widget
```

4. Copy all the content of the repository to awabBase/client/stemapp
5. Create a new App with WebApp Builder Web Interface (lets say the app has id 2)
6. Go to awabBase/client/stemapp and copy following to awabBase/server/apps/2
  - awab.d.ts
  - tsconfig.json
  - node_modules/*
  - .vscode
7. Open the folder awabBase/server/apps/2 with Visual Studio Code
8. Press Ctrl + Shift + B to start the TypeScript Watch Task
9. Open File widgets/TSWidgetTemplate/Widget.ts and start coding, it should compile itself when pressing Ctrl + S
10. There are 2 errors from dojox.gfx3d.d.ts and dojox.lang.d.ts, ignore them :)




## usefull links
- (WebApp Builder Custom Widget Guide)[https://developers.arcgis.com/web-appbuilder/guide/naming-conventions.htm]
- (Definitely Typed, Definition files for everything)[https://github.com/DefinitelyTyped/DefinitelyTyped]
- (TypeScript Package Search)[https://microsoft.github.io/TypeSearch/]
- (TypeScript Handbook)[http://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html]
