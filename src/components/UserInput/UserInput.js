import { useState } from 'react';

const initailUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 3,
  'duration': 7
};

const UserInput = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initailUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initailUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevUserInput) => ({ ...prevUserInput, [input]: value }));
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={({ target: { id, value } }) =>
              inputChangeHandler(id, value)
            }
            value={userInput['current-savings']}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={({ target: { id, value } }) =>
              inputChangeHandler(id, value)
            }
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            onChange={({ target: { id, value } }) =>
              inputChangeHandler(id, value)
            }
            value={userInput['expected-return']}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={({ target: { id, value } }) =>
              inputChangeHandler(id, value)
            }
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' className='buttonAlt' onClick={resetHandler}>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
