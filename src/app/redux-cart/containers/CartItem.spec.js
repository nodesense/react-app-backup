import {mapDispatchToProps} from './CartItem';
import * as actions from '../state/actions';

describe("cart list spec test suite", () => {
    it("mapDispatch test", () => {
        // mock function
        const dispatchMock = jest.fn();
        const props = mapDispatchToProps(dispatchMock);

        props.removeItem(10);

        expect(dispatchMock).toBeCalled();
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(dispatchMock).toHaveBeenCalledWith(actions.removeItem(10));



    })
});
