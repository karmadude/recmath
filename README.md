# numseq
Functions from the world of recreational mathematics.

### Installing

    $ npm install recmath

### API

```
var recmath = require('recmath');
```

#### Happy Number

- https://en.wikipedia.org/wiki/Happy_number

```
recmath.happy(19);
```

**Response:**
```
{
    n: 19,
    "happy": true,
    "seq": [19, 82, 68, 100, 1]
}
```

#### Harshad Number

- https://en.wikipedia.org/wiki/Harshad_number

```
recmath.harshad(18);
```

**Response:**
```
{
    n: 18,
    "harshad": true,
    "seq": [9, 2]
}
```
