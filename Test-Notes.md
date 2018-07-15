## Shallow

Real unit test (isolation, no children render)

### Simple shallow

Calls:

- constructor
- render

### Shallow + setProps

Calls:

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render

### Shallow + unmount

Calls:

- componentWillUnmount

### Mount

The only way to test componentDidMount and componentDidUpdate.
Full rendering including child components.
Requires a DOM (jsdom, domino).
More constly in execution time.
If react is included before JSDOM, it can require some tricks:

`require('fbjs/lib/ExecutionEnvironment').canUseDOM = true;` 

### Simple mount

Calls:

- constructor
- render
- componentDidMount

### Mount + setProps

Calls:

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

### Mount + unmount

Calls:

- componentWillUnmount

### Render

only calls render but renders all children.

So my rule of thumbs is:

- Always begin with shallow
- If componentDidMount or componentDidUpdate should be tested, use mount
- If you want to test component lifecycle and children behavior, use mount
- If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render

There seems to be a very tiny use case for render. I like it because it seems snappier than requiring jsdom but as @ljharb said, we cannot really test React internals with this.

I wonder if it would be possible to emulate lifecycle methods with the render method just like shallow ?
I would really appreciate if you could give me the use cases you have for render internally or what use cases you have seen in the wild.

I'm also curious to know why shallow does not call componentDidUpdate.

Kudos goes to https://github.com/airbnb/enzyme/issues/465#issuecomment-227697726 this gist is basically a copy of the comment but I wanted to separate it from there as it includes a lot of general Enzyme information which is missing in the docs.