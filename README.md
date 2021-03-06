# objectid-stub
> Create predictable MongoDB like ObjectIds for testing purposes.

[![NPM version](https://badge.fury.io/js/objectid-stub.svg)](https://npmjs.org/package/objectid-stub) [![Build status](https://secure.travis-ci.org/SimpliField/objectid-stub.svg)](https://travis-ci.org/SimpliField/objectid-stub) [![Dependency Status](https://david-dm.org/SimpliField/objectid-stub.svg)](https://david-dm.org/SimpliField/objectid-stub) [![devDependency Status](https://david-dm.org/SimpliField/objectid-stub/dev-status.svg)](https://david-dm.org/SimpliField/objectid-stub#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/SimpliField/objectid-stub/badge.svg?branch=master)](https://coveralls.io/r/SimpliField/objectid-stub?branch=master) [![Code Climate](https://codeclimate.com/github/SimpliField/objectid-stub.svg)](https://codeclimate.com/github/SimpliField/objectid-stub)

Under production, you can simply use the NodeJS MongoDB Native Driver ObjectID
 constructor, in your test `òbjectid-stub` makes new ObjectIds creation
 predictable.

## Usage

```js
var initObjectIdStub = require('objectid-stub');
var ObjectId = require('mongo/objectid');
var objectIdStub = initObjectIdStub();

objectIdStub();
// '570b570b570bffffffffffff'

objectIdStub.next();
// '570b570b570bfffffffffffe'

objectIdStub.next(3);
// '570b570b570bfffffffffffb'

objectIdStub();
// '570b570b570bfffffffffffe'
objectIdStub();
// '570b570b570bfffffffffffd'
objectIdStub();
// '570b570b570bfffffffffffc'
objectIdStub();
// '570b570b570bfffffffffffb'

objectIdStub.reset();

objectIdStub();
// '570b570b570bffffffffffff'

objectIdStub = initObjectIdStub({ ctor: ObjectId });

objectIdStub();
// ObjectID('570b570b570bffffffffffff')
```

## API Functions

<dl>
<dt><a href="#_createObjectId">_createObjectId(prefix, from, MyConstrutor)</a> ⇒ <code>string</code> | <code>MyConstructor</code></dt>
<dd><p>Create an object id from the given number</p>
</dd>
<dt><a href="#objectIdStubInit">objectIdStubInit(options)</a> ⇒ <code>function</code></dt>
<dd><p>Instanciate a new object id generator</p>
</dd>
</dl>
<a name="_createObjectId"></a>
## _createObjectId(prefix, from, MyConstrutor) ⇒ <code>string</code> &#124; <code>MyConstructor</code>
Create an object id from the given number

**Kind**: global function  
**Returns**: <code>string</code> &#124; <code>MyConstructor</code> - The object id in a string/MyConstructor representation  
**Api**: private  

| Param | Type | Description |
| --- | --- | --- |
| prefix | <code>String</code> | 12 chars string to prefix the id with |
| from | <code>Number</code> | Number from wich to create the id |
| MyConstrutor | <code>function</code> | A constructor to build ObjectId instances (default to strings) |

<a name="objectIdStubInit"></a>
## objectIdStubInit(options) ⇒ <code>function</code>
Instanciate a new object id generator

**Kind**: global function  
**Returns**: <code>function</code> - The new generator  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Generator options |
| options.ctor | <code>function</code> | Allow to specify a custom constructor) |
| options.prefix | <code>String</code> | Allow to create object id with the given 12 chars prefix |


* [objectIdStubInit(options)](#objectIdStubInit) ⇒ <code>function</code>
  * [~getNextObjectId()](#objectIdStubInit..getNextObjectId) ⇒ <code>String</code>
    * [.next(n)](#objectIdStubInit..getNextObjectId.next) ⇒ <code>String</code>
    * [.reset()](#objectIdStubInit..getNextObjectId.reset) ⇒ <code>void</code>

<a name="objectIdStubInit..getNextObjectId"></a>
### objectIdStubInit~getNextObjectId() ⇒ <code>String</code>
Generate the next id

**Kind**: inner method of <code>[objectIdStubInit](#objectIdStubInit)</code>  
**Returns**: <code>String</code> - The generated id  
**Api**: public  

* [~getNextObjectId()](#objectIdStubInit..getNextObjectId) ⇒ <code>String</code>
  * [.next(n)](#objectIdStubInit..getNextObjectId.next) ⇒ <code>String</code>
  * [.reset()](#objectIdStubInit..getNextObjectId.reset) ⇒ <code>void</code>

<a name="objectIdStubInit..getNextObjectId.next"></a>
#### getNextObjectId.next(n) ⇒ <code>String</code>
Lookup what will be the next id

**Kind**: static method of <code>[getNextObjectId](#objectIdStubInit..getNextObjectId)</code>  
**Returns**: <code>String</code> - The next id  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>Number</code> | Number of ids to discard (defaults to 0) |

<a name="objectIdStubInit..getNextObjectId.reset"></a>
#### getNextObjectId.reset() ⇒ <code>void</code>
Reset the internal id

**Kind**: static method of <code>[getNextObjectId](#objectIdStubInit..getNextObjectId)</code>  
**Api**: public  
