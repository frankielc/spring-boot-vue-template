#### What does this project template bring to the table?
- **SpringBoot** auto configured with:
  - **Vue.JS**
  - custom security
  - hot-reloading of both Spring and Vue for faster development

#### How to use?

1. `yarn install` to download all dependencies
2. `gulp dev` for development
3. `gulp package` to export Spring Boot to a  fat-jar


#### On development mode how are things in sync?

Vue builds and exports files to folder `dist/static`.  
Spring picks those files up when packaging.  
While developing sync between `dist/static` and `target/classes/...` is done by gulp watchers.