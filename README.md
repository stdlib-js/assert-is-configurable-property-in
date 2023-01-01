<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isConfigurablePropertyIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object's own or inherited property is configurable.



<section class="usage">

## Usage

To use in Observable,

```javascript
isConfigurablePropertyIn = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-configurable-property-in@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isConfigurablePropertyIn = require( 'path/to/vendor/umd/assert-is-configurable-property-in/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-configurable-property-in@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isConfigurablePropertyIn;
})();
</script>
```

#### isConfigurablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a configurable `property` (i.e., a property which may be deleted or whose descriptor may be changed).

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( Foo.prototype, 'boop', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isConfigurablePropertyIn( obj, 'foo' );
// returns true

bool = isConfigurablePropertyIn( obj, 'beep' );
// returns true

bool = isConfigurablePropertyIn( obj, 'boop' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isConfigurablePropertyIn( 'beep', 'toString' );
    // returns true
    ```

-   Property arguments are coerced to `strings`.

    ```javascript
    var obj = {
        'null': 'foo'
    };

    var bool = isConfigurablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-configurable-property-in@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isConfigurablePropertyIn( { 'a': 'b' }, 'a' );
// returns true

bool = isConfigurablePropertyIn( [ 'a' ], 0 );
// returns true

bool = isConfigurablePropertyIn( { 'null': false }, null );
// returns true

bool = isConfigurablePropertyIn( { '[object Object]': false }, {} );
// returns true

bool = isConfigurablePropertyIn( {}, 'toString' );
// returns true

bool = isConfigurablePropertyIn( {}, 'hasOwnProperty' );
// returns true

bool = isConfigurablePropertyIn( [ 'a' ], 'length' );
// returns false

bool = isConfigurablePropertyIn( null, 'a' );
// returns false

bool = isConfigurablePropertyIn( void 0, 'a' );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-configurable-property`][@stdlib/assert/is-configurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert/is-enumerable-property-in`][@stdlib/assert/is-enumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert/is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert/is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-configurable-property-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-configurable-property-in

[test-image]: https://github.com/stdlib-js/assert-is-configurable-property-in/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-configurable-property-in/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-configurable-property-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-configurable-property-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-configurable-property-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-configurable-property-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-configurable-property-in/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-configurable-property-in/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-configurable-property-in/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-configurable-property-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-configurable-property-in/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property]: https://github.com/stdlib-js/assert-is-configurable-property/tree/umd

[@stdlib/assert/is-enumerable-property-in]: https://github.com/stdlib-js/assert-is-enumerable-property-in/tree/umd

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert-is-readable-property-in/tree/umd

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert-is-writable-property-in/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
