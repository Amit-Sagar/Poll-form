import React, { useState } from 'react';
import { Button, Modal, Form, Input, Space} from 'antd';
import CollapseDropDown from './CollapseDropDown';
import './App.css';
import axios from 'axios';
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";


 const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();


  return (
    <Modal 
      visible={visible}
      title="Create Poll"
      okText="Save"
      cancelText="Cancel"
      style={{borderRadius:'32px'}}
      onCancel={onCancel}
      onOk={ () => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
              }}
    >
      <Form 
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues= {
          {
            options: [{option:""},{option:""}]
          }
        }
      >
        <Form.Item
          name="question"
          label="Question"
          rules={[
                    {
                      required: true,
                      message: '*Question field is required.',
                    },
                  ]}
          style={{marginLeft:'20px'}}        
        >
           <Input style={{width:'80%', marginLeft: '20px'}}/>
        </Form.Item>
        <Form.Item style={{marginLeft:'30px'}}>
          <p>Choices</p>
        </Form.Item>
        <Form.List
        name="options"
        >
        {(fields, { add, remove }) => (
          <>
          {
            fields.map (({key, name, fieldKey, ...restField}) => 
            <Space  style={{ display: 'flex',marginLeft: '20px' }} align="baseline">
              <Form.Item
                  {...restField}
                  name={[name, 'option']}
                  fieldKey={[fieldKey, 'option']}
                  rules={[{ required: true, message: 'Option required' }]}
                >
                  <Input style={{marginLeft:"50px", width:"125%"}} placeholder="Enter option"/>
                </Form.Item>
                {fields.length > 2 ? (
                <MinusCircleOutlined style={{marginLeft:"130px"}} onClick={() => remove(name)} />
                ) : null}
                </Space>
                
                )
          }
          <Form.Item style={{marginLeft: '20px'}}>
              <Button type="primary" onClick={() => add()}  icon={<PlusOutlined />}>
                More Choices
              </Button>
            </Form.Item>
          </>
        )}

        </Form.List>
      <CollapseDropDown/>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
    
        const obj =  {
          "title": values.question,
          "group_content_access": 2,
          "group_id": 40093,
          "runtime": "0",
          "active": 1,
          "choice": [
              {
                  "chtext": values.option,
              },
              {
                  "chtext": values.option,
              },
              {
                  "chtext": values.option,
                 }
          ]
      
      }     
        
        axios.post('https://dev.techtud.oslabs.app/api/v1.1/create_poll', {
              
                           body : {obj},
                             headers :{ 'Authorization' : `Bearer62672c86ec09275f16ee876612675af8f0c58f7f`,
                           'Content-Type' :  'application/json'
              }    
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Poll
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        
        }}
      />
    </div>
  );
};
export default CollectionsPage;
