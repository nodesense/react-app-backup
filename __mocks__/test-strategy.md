Scenarios

https://github.com/nodesense/r-system-react-app/blob/master/Test-Notes.md



0. Set setup

    Browser APIs, enzyme adaptors
        package.json
            see jest section

        src/setupTests.js
        src/browserMocks.js
        src/shim.js [React request animation frame]


1. Mock whole file for import/require statements

    __mocks__ folder

    /src
        /app
            /something.js [project file]

    __mocks__
        app
            /something.js [mock]


    require (./app/something) -- this will pick __mocks__ path


# Testing Approach

## Snapshot Testing

    capture the v.dom rendered, 
        convert to json. 
            The whole dom tree stored in snapshots directory

    from second time onwards, the snapshot is getting compared

    jest has command line to clean, recapture the snapshots

    is achived via  import renderer from 'react-test-renderer';

    Example: Footer.spec.js, Renderer.spec.js

    For Testing props, css classes,


toEqual -- deep compare [object compare]
toBe -- shallow compare [primitives, reference check]


-- 'redux-mock-store' for mocking store

Container Test -- Cart.spec.js