import {mapDispatchToProps} from "./Cart";
import * as ActionTypes from "../state/action-types";

describe("cart spec container ", () => {

    it(" test dispatch ", () => {
        let dispatch = jest.fn();

        let props = mapDispatchToProps(dispatch);

        props.addItem();

        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith({
            type: ActionTypes.ADD_ITEM_TO_CART,
            payload: {
                item: {
                    id: 1,
                    price: 100,
                    name: 'Product 1',
                    qty: 1
                }
            }
        })
    })


    function goodFunction(arg) {
        if (arg < 0) {
            throw new Error("Boom");
            return;
        }

        return "bad";
    }

    it("check no exception ", () => {
        expect(goodFunction(10)).not.toBe("good");
    })


})
