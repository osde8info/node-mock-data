(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/src/api/2-only.mdx":function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return h});var t=n("./node_modules/react/index.js"),r=n.n(t),i=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./docs/src/api/UserFactory.tsx");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,a){return!a||"object"!==l(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,a){return(m=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var h=function(e){function a(e){var n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(n=u(this,d(a).call(this,e))).layout=null,n}var n,t,l;return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&m(e,a)}(a,r.a.Component),n=a,(t=[{key:"render",value:function(){var e=this.props,a=e.components;s(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:a},r.a.createElement(i.MDXTag,{name:"h2",components:a,props:{id:"factoryonlyfields-overrides"}},r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"Factory.only(fields[, overrides])")),r.a.createElement(i.MDXTag,{name:"p",components:a},r.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"args:")),r.a.createElement(i.MDXTag,{name:"ul",components:a},r.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"fields (String | Array)"),": This argument defines the fields that should be returned.")),r.a.createElement(i.MDXTag,{name:"blockquote",components:a},r.a.createElement(i.MDXTag,{name:"ul",components:a,parentName:"blockquote"},r.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},"If a ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"String"),", returns an object containing only that key ",r.a.createElement("br",null)),r.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},"If an ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"Array"),", returns an object containing only the keys contained in the array"))),r.a.createElement(i.MDXTag,{name:"ul",components:a},r.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"overrides (IDataObject [optional])"),": These are value which should be overridden on the generated data (default: ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"{}"),")")),r.a.createElement(i.MDXTag,{name:"p",components:a},r.a.createElement(i.MDXTag,{name:"strong",components:a,parentName:"p"},"return:")),r.a.createElement(i.MDXTag,{name:"ul",components:a},r.a.createElement(i.MDXTag,{name:"li",components:a,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"data (IDataObject)"),": Data object generated by your generator function")),r.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"description"}},"Description"),r.a.createElement(i.MDXTag,{name:"p",components:a},"This method is used to generate a data object containing only the keys specified. This could be particularly useful for updating state."),r.a.createElement(i.MDXTag,{name:"h3",components:a,props:{id:"example"}},"Example"),r.a.createElement(i.MDXTag,{name:"pre",components:a},r.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"UserFactory.only('email')\n")),r.a.createElement(o.a,{parse:function(e){return e.only("email")}}),r.a.createElement(i.MDXTag,{name:"pre",components:a},r.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"UserFactory.only(['email', 'name'])\n")),r.a.createElement(o.a,{parse:function(e){return e.only(["email","name"])}}),r.a.createElement(i.MDXTag,{name:"pre",components:a},r.a.createElement(i.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},"UserFactory.only(['id', 'email'], { id: '123' })\n")),r.a.createElement(o.a,{parse:function(e){return e.only(["id","email"],{id:"123"})}}))}}])&&c(n.prototype,t),l&&c(n,l),a}()},"./docs/src/api/UserFactory.tsx":function(e,a,n){"use strict";var t=n("./node_modules/react/index.js"),r=n.n(t),i=n("./node_modules/faker/index.js"),o=n.n(i);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){c(e,a,n[a])})}return e}function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var u=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.reduce(function(e,a){return"number"===typeof a?s({},e,{length:a>0?a:1}):"object"===l(a)?s({},e,{data:a}):e},{length:1,data:{}})},d=function(e){var a=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function e(a,n){return Object.keys(a).reduce(function(t,r){return t.wasMerged?t.data=s({},t.data,c({},r,a[r])):n[r]?(t.data=s({},t.data,c({},r,n[r])),t.wasMerged=!0):t.data=s({},t.data,c({},r,"object"!==l(a[r])?a[r]:e(a[r],n))),t},{wasMerged:!1,data:{}}).data}(e(o.a),a)},n={create:a,make:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,t=u(e,n),r=t.data,i=t.length;return Array.from({length:i}).map(function(){return a(r)})},only:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a(n);return Array.isArray(e)?e.reduce(function(e,a){return s({},e,c({},a,t[a]))},{}):c({},e,t[e])},seed:function(e){return o.a.seed(e),n}};return n};try{u.displayName="resolveArgs",u.__docgenInfo={description:"",displayName:"resolveArgs",props:{length:{defaultValue:null,description:"Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.",name:"length",required:!0,type:{name:"number"}},toString:{defaultValue:null,description:"Returns a string representation of an array.",name:"toString",required:!0,type:{name:"() => string"}},toLocaleString:{defaultValue:null,description:"Returns a string representation of an array. The elements are converted to string using their toLocalString methods.",name:"toLocaleString",required:!0,type:{name:"() => string"}},pop:{defaultValue:null,description:"Removes the last element from an array and returns it.",name:"pop",required:!0,type:{name:"() => any"}},push:{defaultValue:null,description:"Appends new elements to an array, and returns the new length of the array.\n@param items New elements of the Array.",name:"push",required:!0,type:{name:"(...items: any[]) => number"}},concat:{defaultValue:null,description:"Combines two or more arrays.\nCombines two or more arrays.\n@param items Additional items to add to the end of array1.\n@param items Additional items to add to the end of array1.",name:"concat",required:!0,type:{name:"{ (...items: ConcatArray<any>[]): any[]; (...items: any[]): any[]; }"}},join:{defaultValue:null,description:"Adds all the elements of an array separated by the specified separator string.\n@param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.",name:"join",required:!0,type:{name:"(separator?: string) => string"}},reverse:{defaultValue:null,description:"Reverses the elements in an Array.",name:"reverse",required:!0,type:{name:"() => any[]"}},shift:{defaultValue:null,description:"Removes the first element from an array and returns it.",name:"shift",required:!0,type:{name:"() => any"}},slice:{defaultValue:null,description:"Returns a section of an array.\n@param start The beginning of the specified portion of the array.\n@param end The end of the specified portion of the array.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => any[]"}},sort:{defaultValue:null,description:"Sorts an array.\n@param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.",name:"sort",required:!0,type:{name:"(compareFn?: (a: any, b: any) => number) => any[]"}},splice:{defaultValue:null,description:"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\nRemoves elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\n@param start The zero-based location in the array from which to start removing elements.\n@param deleteCount The number of elements to remove.\n@param start The zero-based location in the array from which to start removing elements.\n@param deleteCount The number of elements to remove.\n@param items Elements to insert into the array in place of the deleted elements.",name:"splice",required:!0,type:{name:"{ (start: number, deleteCount?: number): any[]; (start: number, deleteCount: number, ...items: any[]): any[]; }"}},unshift:{defaultValue:null,description:"Inserts new elements at the start of an array.\n@param items Elements to insert at the start of the Array.",name:"unshift",required:!0,type:{name:"(...items: any[]) => number"}},indexOf:{defaultValue:null,description:"Returns the index of the first occurrence of a value in an array.\n@param searchElement The value to locate in the array.\n@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.",name:"indexOf",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the index of the last occurrence of a specified value in an array.\n@param searchElement The value to locate in the array.\n@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.",name:"lastIndexOf",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => number"}},every:{defaultValue:null,description:"Determines whether all the members of an array satisfy the specified test.\n@param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"every",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any) => boolean"}},some:{defaultValue:null,description:"Determines whether the specified callback function returns true for any element of an array.\n@param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"some",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any) => boolean"}},forEach:{defaultValue:null,description:"Performs the specified action for each element in an array.\n@param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"forEach",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void"}},map:{defaultValue:null,description:"Calls a defined callback function on each element of an array, and returns an array that contains the results.\n@param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"map",required:!0,type:{name:"<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any) => U[]"}},filter:{defaultValue:null,description:"Returns the elements of an array that meet the condition specified in a callback function.\nReturns the elements of an array that meet the condition specified in a callback function.\n@param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n@param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"filter",required:!0,type:{name:"{ <S extends any>(callbackfn: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[]; (callbackfn: (value: any, index: number, array: any[]) => any, thisArg?: any): any[]; }"}},reduce:{defaultValue:null,description:"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\nCalls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.",name:"reduce",required:!0,type:{name:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."}},reduceRight:{defaultValue:null,description:"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\nCalls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.",name:"reduceRight",required:!0,type:{name:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."}},find:{defaultValue:null,description:"Returns the value of the first element in the array where predicate is true, and undefined\notherwise.\n@param predicate find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found, find\nimmediately returns that element value. Otherwise, find returns undefined.\n@param thisArg If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.",name:"find",required:!0,type:{name:"{ <S extends any>(predicate: (this: void, value: any, index: number, obj: any[]) => value is S, thisArg?: any): S; (predicate: (value: any, index: number, obj: any[]) => boolean, thisArg?: any): any; }"}},findIndex:{defaultValue:null,description:"Returns the index of the first element in the array where predicate is true, and -1\notherwise.\n@param predicate find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found,\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1.\n@param thisArg If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.",name:"findIndex",required:!0,type:{name:"(predicate: (value: any, index: number, obj: any[]) => boolean, thisArg?: any) => number"}},fill:{defaultValue:null,description:"Returns the this object after filling the section identified by start and end with value\n@param value value to fill array section with\n@param start index to start filling the array at. If start is negative, it is treated as\nlength+start where length is the length of the array.\n@param end index to stop filling the array at. If end is negative, it is treated as\nlength+end.",name:"fill",required:!0,type:{name:"(value: any, start?: number, end?: number) => any[]"}},copyWithin:{defaultValue:null,description:"Returns the this object after copying a section of the array identified by start and end\nto the same array starting at position target\n@param target If target is negative, it is treated as length+target where length is the\nlength of the array.\n@param start If start is negative, it is treated as length+start. If end is negative, it\nis treated as length+end.\n@param end If not specified, length of the this object is used as its default value.",name:"copyWithin",required:!0,type:{name:"(target: number, start: number, end?: number) => any[]"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<any>"}},entries:{defaultValue:null,description:"Returns an iterable of key, value pairs for every entry in the array",name:"entries",required:!0,type:{name:"() => IterableIterator<[number, any]>"}},keys:{defaultValue:null,description:"Returns an iterable of keys in the array",name:"keys",required:!0,type:{name:"() => IterableIterator<number>"}},values:{defaultValue:null,description:"Returns an iterable of values in the array",name:"values",required:!0,type:{name:"() => IterableIterator<any>"}},"__@unscopables":{defaultValue:null,description:"Returns an object whose properties have the value 'true'\nwhen they will be absent when used in a 'with' statement.",name:"__@unscopables",required:!0,type:{name:"() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }"}},includes:{defaultValue:null,description:"Determines whether an array includes a certain element, returning true or false as appropriate.\n@param searchElement The element to search for.\n@param fromIndex The position in this array at which to begin searching for searchElement.",name:"includes",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => boolean"}},flatMap:{defaultValue:null,description:"Calls a defined callback function on each element of an array. Then, flattens the result into\na new array.\nThis is identical to a map followed by flat with depth 1.\n@param callback A function that accepts up to three arguments. The flatMap method calls the\ncallback function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callback function. If\nthisArg is omitted, undefined is used as the this value.",name:"flatMap",required:!0,type:{name:"<U, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U | ReadonlyArray<U>, thisArg?: This) => U[]"}},flat:{defaultValue:null,description:"Returns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth. If no depth is provided, flat method defaults to the depth of 1.\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth",name:"flat",required:!0,type:{name:"{ <U>(this: U[][][][][][][][], depth: 7): U[]; <U>(this: U[][][][][][][], depth: 6): U[]; <U>(this: U[][][][][][], depth: 5): U[]; <U>(this: U[][][][][], depth: 4): U[]; <U>(this: U[][][][], depth: 3): U[]; <U>(this: U[][][], depth: 2): U[]; <U>(this: U[][], depth?: 1): U[]; <U>(this: U[], depth: 0): U[]; <U>(depth?..."}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#resolveArgs"]={docgenInfo:u.__docgenInfo,name:"resolveArgs",path:"src/index.ts#resolveArgs"})}catch(h){}try{d.displayName="factory",d.__docgenInfo={description:"",displayName:"factory",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#factory"]={docgenInfo:d.__docgenInfo,name:"factory",path:"src/index.ts#factory"})}catch(h){}var m=d(function(e){return{id:e.random.uuid(),name:e.name.findName(),email:e.internet.email()}});a.a=function(e){var a,n,t=e.parse;return r.a.createElement("pre",{style:{background:"#EEF1F5",borderLeft:"5px solid #CED4DE",color:"#7D899C",margin:"-30px 0 25px 2px",padding:"20px",fontStyle:"italic",fontSize:"18px"},dangerouslySetInnerHTML:{__html:(a=t(m),n={number:"color: #3490DC",key:"color: #6CB2EB",string:"color: #3490DC",boolean:"color: #621B18",null:"color: #E3342F"},"string"!=typeof a&&(a=JSON.stringify(a,void 0,2)),(a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var a="number";return/^"/.test(e)?a=/:$/.test(e)?"key":"string":/true|false/.test(e)?a="boolean":/null/.test(e)&&(a="null"),'<span style="'+n[a]+'">'+e+"</span>"}))}})};try{m.displayName="UserFactory",m.__docgenInfo={description:"",displayName:"UserFactory",props:{parse:{defaultValue:null,description:"",name:"parse",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/src/api/UserFactory.tsx#UserFactory"]={docgenInfo:m.__docgenInfo,name:"UserFactory",path:"docs/src/api/UserFactory.tsx#UserFactory"})}catch(h){}}}]);
//# sourceMappingURL=docs-src-api-2-only.3725e1fdc8b30cb3f287.js.map