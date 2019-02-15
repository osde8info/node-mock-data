(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/api/0-factory.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./node_modules/docz/dist/index.m.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,l(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;i(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"factorygenerator"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"factory(generator)")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"args"),":"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"generator (FactoryGenerator)"),": Generator function which describes your data object. This function receives a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"faker")," instance as an argument")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"return"),":"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Factory object (IFactoryObject)"),": The factory object contains four methods: ",o.a.createElement(c.c,{to:"/api/create"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"create")),", ",o.a.createElement(c.c,{to:"/api/only"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"only")),", ",o.a.createElement(c.c,{to:"/api/make"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"make"))," and ",o.a.createElement(c.c,{to:"/api/seed"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"seed")))),o.a.createElement("hr",{style:{marginTop:"2rem",marginBottom:"2rem",opacity:"0.2"}}),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"description"}},"Description"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You should create a factory object for the data you want to generate. To do that, you need to specify the type of data. To do this, the\nfactory class makes use of the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/marak/Faker.js/"}},"Faker.js")," package which provides an easy way to generate random data."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"usage"}},"Usage"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { factory } from 'node-factory';\n\nconst UserFactory = factory(fake => ({\n  id: fake.random.uuid(),\n  name: fake.name.findName(),\n  email: fake.internet.email(),\n}));\n\nexport default UserFactory;\n")))}}])&&p(t.prototype,a),m&&p(t,m),n}()}}]);
//# sourceMappingURL=src-docs-api-0-factory.c74b82e9c141385a442a.js.map