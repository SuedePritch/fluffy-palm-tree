const { Tag } = require('../models');

const tagData = [
  {
    //Apache
    tech_name:'Apache',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-line.svg',
  },
  {
    //C
    tech_name:'C',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    //C++
    tech_name:'C++',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    //C#
    tech_name:'C#',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    //CSS
    tech_name:'CSS',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    //Django
    tech_name:'Django',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  {
    //Express
    tech_name:'Express',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
  },
  {
    //Figma
    tech_name:'Figma',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    //Flask
    tech_name:'Flask',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    //GO
    tech_name:'Go',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
  },
  {
    //GraphQL
    tech_name:'GraphQL',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  },
  {
    //Handlebars
    tech_name:'Handlebars',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg',
  },
  {
    //HTML
    tech_name:'HTML',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
  },
  
  {
    //Adobe Illustrator
    tech_name:'Adode Illustrator',
    tech_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
  },
  {
    //Java
    tech_name:'Java',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    //Javascript
    tech_name:'Javascript',
    tech_icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    //jQuery
    tech_name:'jQuery',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
  },
  {
    //Kotlin
    tech_name:'Kotlin',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
  },
  {
    //Laravel
    tech_name:'Laravel',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg',
  },
  {
    //Linux
    tech_name:'Linux',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    //Markdown
    tech_name:'Markdown',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
  },
  {
    //Mocha
    tech_name:'Mocha',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
  },
  {
    //Mongo
    tech_name:'Mongo',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg',
  },
  {
    //NodeJS
    tech_name:'NodeJs',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    //PostGres
    tech_name:'PostGreSQL',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg',
  },
  {
    //PHP
    tech_name:'PHP',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
  },
  {
    //Python
    tech_name:'Python',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    //Rails
    tech_name:'Rails',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
  },
  {
    //React
    tech_name:'React',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    //Redux
    tech_name:'Redux',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    //Ruby
    tech_name:'Ruby',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
  },
  {
    //Rust
    tech_name:'Rust',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
  },
  {
    //Sass
    tech_name:'Sass',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    //Solidity
    tech_name:'Solidity',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
  },
  {
    //SQL
    tech_name:'SQL',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    //Svelte
    tech_name:'Svelte',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  },
  {
    //ThreeJs
    tech_name:'ThreeJs',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original-wordmark.svg',
  },
  {
    //Typescript
    tech_name:'Typescript',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    //Vue
    tech_name:'Vue',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
  },
  {
    //WordPress
    tech_name:'Wordpress',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg',
  },
  {
    //AdodeXd
    tech_name:'Adobe XD',
    tech_icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
  },
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;