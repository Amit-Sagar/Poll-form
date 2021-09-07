import React, { useState } from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { DeleteOutlined} from '@ant-design/icons';


const MoreChoices = () => {

    const [formValues, setFormValues] = useState([{ morechoices: ""}])
 
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { morechoices: "" }])
      }
      let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
     

    return (
      <div>
        <form  onSubmit={handleSubmit}>
           {formValues.map((element, index) => (
                      
                 <div className="form-inline" key={index}>
                     
                <input className="ant-input input-box" type="text" name="morechoices" value={element.morechoices || ""} onChange={e => handleChange(index, e)} />
                 <div>
                {
                  index ? 
                    <button type="button"  className="remove" onClick={() => removeFormFields(index)}><span className="button-name"><DeleteOutlined style={{padding:'2px 2px 2px 2px'}} /></span></button> 
                  : null
                }
              </div>
              </div>
              ))}
          
          <div className="button-section">
              <Button className="button add" type="primary" onClick={() => addFormFields()}>More Choices</Button>
             
          </div>
      </form>
      </div>
    )
}
export default MoreChoices;