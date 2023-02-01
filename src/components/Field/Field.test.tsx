import { render, screen } from '@testing-library/react';
import Field from './Field';


const onChange = jest.fn()

describe('Field component', () => {
  test('Field render', () => {
    render(<Field 
            type='text' 
            label='First Name' 
            name='' value='' 
            error={false} 
            onChangeHandler={onChange} 
            setError={()=>{}} />
          )
    expect(screen.getByText('First Name')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()  
  })
  test('Field without type and label', () => {
    render(<Field 
      type='' 
      label='' 
      name='' value='' 
      error={false} 
      onChangeHandler={()=>{}} 
      setError={()=>{}} />
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  
})
 

