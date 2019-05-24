import {mapStateToProps} from './CartList';


describe("cart list spec test suite", () => {
    it("mapStateToProps test", () => {
        // test fixture
        const state = {
            items: [{id: 1, name:'p1', price: 100, qty: 1}],
            authState: {authenticated: false},
            ///....
        };

        expect(mapStateToProps(state))
                .toEqual({ items: [{id: 1, name:'p1', price: 100, qty: 1}]})
    })
})