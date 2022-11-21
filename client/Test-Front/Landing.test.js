
import { GET_DETAIL, get_detail } from '../src/Redux/Actions/action';
const get_detail =required('./Actions/action')

    it('debe renderizar la landing', () => {
        expect(get_detail()).toBe(GET_DETAIL)
    })



