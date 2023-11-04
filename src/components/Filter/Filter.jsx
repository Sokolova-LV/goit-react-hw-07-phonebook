import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice';
import { getFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                placeholder="Please, enter contact name"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value.trim()))}>
            </Input>
        </Label>
    );
};