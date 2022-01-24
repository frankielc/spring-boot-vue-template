#### What does this project template bring to the table?
- SpringBoot autoconfigured with:
  - Vue.JS
  - hot-reloading of both Spring and Vue for faster development

#### Requirements:
- Java,
- Maven
- npm
- Yarn

#### How to use?

1. `yarn install` to download all dependencies
2. `gulp dev` for interactive development
3. `gulp package` to export project as a fat-jar


#### On development mode how are things kept in sync?

Vue builds and exports files to folder `dist/`.  

While developing, sync between `dist/` (managed by Vue) 
and `target/classes/...` (read by Spring), is done by gulp 
watchers.  


#### How does it create the full jar file?

`Vue` runs first and compiles/minifies javascript and style sheets 
to `dist/`. Maven will then pack that folder up as a configured 
resource.
