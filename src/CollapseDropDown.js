import React from 'react'
import {Collapse, Radio, Space,Form, Select,} from 'antd';
import './App.css';
import { InfoCircleOutlined } from "@ant-design/icons";


class RadioOption extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
 
  render() {
    const { value } = this.state;
    return (
      <Form.Item name="modifier" label="Poll Status" 
      tooltip={{ title: 'When a poll is closed, visitors can no longer vote for it.', icon: <InfoCircleOutlined /> }}
      >
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}><span className="info-radio">Closed</span></Radio>
          <Radio value={2}><span className="info-radio">Active</span></Radio>
        </Space>
      </Radio.Group>
           
      </Form.Item>
    );
  }
};
 const PollDuration = () => {

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  return (
      <Form.Item name="poll-duration" label="Poll duration"
      tooltip={{ title: 'After this period,the poll will be closed automatically.', icon: <InfoCircleOutlined /> }}
      >
           <Select
          placeholder="Unlimited"
          onChange={onChange}
        >
          <Select.Option value="Unlimited">Unlimited</Select.Option>
          <Select.Option value="1day">1day</Select.Option>
          <Select.Option value="2days">2days</Select.Option>
          <Select.Option value="3days">3days</Select.Option>
          <Select.Option value="4days">4days</Select.Option>
          <Select.Option value="5days">5days</Select.Option>
          <Select.Option value="6days">6days</Select.Option>
          <Select.Option value="1week">1week</Select.Option>
          <Select.Option value="2weeks">2weeks</Select.Option>
          <Select.Option value="3weeks">3weeks</Select.Option>
          <Select.Option value="1month">1month</Select.Option>
          <Select.Option value="2months">2months</Select.Option>
          <Select.Option value="3months">3months</Select.Option>
          <Select.Option value="6months">6months</Select.Option>
          <Select.Option value="9months">9months</Select.Option>
          <Select.Option value="1year">1year</Select.Option>
         </Select>
       </Form.Item>
  )
}


const { Panel } = Collapse;

const text = (
  <p><RadioOption/></p>
);
function CollapseDropDown() {
  return (
   
    <div id="collapse">
       <Collapse style={{background:'white'}} bordered={false} >
    <Panel header="Poll Setting"
    forceRender="true">
      {text}
      <PollDuration/>
    </Panel>
  </Collapse>
    </div>
      )
}

export default CollapseDropDown;














