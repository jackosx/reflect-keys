reflectkeys
==============
Create an object with values that mirror its keys from a string of whitespace-separated keys

Usage
-----

`npm install reflectkeys`

```javascript
var reflectKeys = require('reflectkeys');
var mirrorObject = reflectKeys("A B C");
// mirrorObject = { A: 'A', B: 'B', C: 'C' }
```

Input:  `"key1 key2 key3"`

Output: `{key1: key1, key2: key2, key: 3}`


I use it instead of keyMirror for defining flux ActionTypes, eg:

```javascript
// TodoActionTypes.js
import reflectKeys from 'reflectkeys';
const TodoActionTypes = reflectKeys(`TODO_ADD
                                   TODO_UPDATE
                                   TODO_DELETE`);
export default TodoActionTypes;
```
