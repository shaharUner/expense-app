import moment from 'moment';
//import filters
import {
setStartDate ,
setEndDate ,
setTextFilter,
sortByDate,
sortByAmount
} from"../../actions/filters";

test('should generate start date action object' , ()=>{
  const action = setStartDate(moment(1000));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(1000)
  });
});
test('should generate end date action object' , ()=>{
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type:"SET_END_DATE",
    endDate:moment(1000)
  });
});
test('should generate text filter action object ' , ()=>{
  const action = setTextFilter("Rent");
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:'Rent'
  });
});
test('should generate text filter action object with default' , ()=>{
  const action = setTextFilter();
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  });
});
test('should generate sort by DATE action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type:"SORT_BY_DATE"
  });
});
test('should generate sort by amount action object',()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  });
});
