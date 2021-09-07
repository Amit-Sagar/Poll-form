import React, { useState } from 'react';
import { Button, Modal, Form, Input, } from 'antd';
import CollapseDropDown from './CollapseDropDown';
import './App.css';
import MoreChoices from './MoreChoices';
// import axios from 'axios';

// const axios = require('axios');

// axios.get('https://dev.techtud.oslabs.app/api/v1.1/create_poll')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//   });


//   async function getQuestion() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }



 const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();


  return (
    <Modal 
      visible={visible}
      title="Create Poll"
      okText="Save"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
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
        initialValues={{
          modifier: 'public',
        }}
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
        ><div className="question-input">        
              <Input style={{width:'90%'}}/>
        </div>
        </Form.Item>
        <Form.Item name="Choices" label="Choices">
           <MoreChoices/>
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
           <CollapseDropDown/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
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
