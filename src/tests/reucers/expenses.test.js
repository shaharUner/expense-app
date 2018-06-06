import expensesReducer from'../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should set default state' , ()=>{
  const state = expensesReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual([]);
});
test('should remove expense by id' , ()=>{
  const action={
    type:"REMOVE_EXPENSE",
    id:expenses[1].id
  };
  const state = expensesReducer(expenses , action);
  expect(state).toEqual([expenses[0 ] , expenses[2]]);
});
test('should no remove expense if id not found' , ()=>{
  const action={
    type:"REMOVE_EXPENSE",
    id:'123456'
  };
  const state = expensesReducer(expenses , action);
  expect(state).toEqual([expenses[0] ,expenses[1], expenses[2]]);
});
test('should add a new expense' , ()=>{
   const expense={
     description: 'Car Insurens',
     amount: 100000,
     note: "2018 Car Insurens",
     createdAt: 5010,
     id: '109',
  }

  const action = {
    type:'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses , action);
  expect(state).toEqual([...expenses, expense]);
});
test('should update expense by id' , ()=>{
  const description = 'Car Insurens';
  const action = {
    type:'EDIT_EXPENSE',
    updates:{
      description,
    },
    id: expenses[2].id
  };
  const state = expensesReducer(expenses , action);
  expect(state[2].description).toBe(description);
});
test('should not update expense if id not found' , ()=>{
  const description = 'Car Insurens';
  const action = {
    type:'EDIT_EXPENSE',
    updates:{
      description,
    },
    id: '-1'
  };
  const state = expensesReducer(expenses , action);
  expect(state).toEqual([...expenses]);
});
