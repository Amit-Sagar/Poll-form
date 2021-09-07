import React from 'react'
import {Collapse, Radio, Space, Tooltip, Input, AutoComplete} from 'antd';
import './App.css';

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
      <div>
        <p>Poll Status</p>
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}><span className="info-radio">Closed</span></Radio>
          <Radio value={2}><span className="info-radio">Active</span></Radio>
        </Space>
      </Radio.Group>
          <div className="tooltip">
              <Tooltip title="When a poll is closed, visitors can no longer vote for it.">
                 <span className="info"><u>More Information?</u></span>
              </Tooltip>
           </div>
           <div>
             <p>Poll duration</p>
           <Input.Group compact>
           <AutoComplete
              style={{ width: '90%' }}
              placeholder="Unlimited"
             options={[{ value: 'Unlimited' },{ value: '1 day' }, { value: '2 days' },{ value: '3 days' },{ value: '4 days' },{ value: '5 days' },{ value: '6 days' },{ value: '1 week' },{ value: '2 weeks' },{ value: '3 weeks' },{ value: '1 month' },
             { value: '2 months' },{ value: '3 months' },{ value: '6 months' },{ value: '9 months' },{ value: '1 year' },]}
               />
             </Input.Group>
           </div>
           <div className="tooltip">
           <Tooltip title="After this period the poll will be closed automatically.">
                 <span className="info"><u>More Information?</u></span>
              </Tooltip>
           </div>
      </div>
    );
  }
};

const { Panel } = Collapse;

const text = (
  <p><RadioOption/></p>
);
function CollapseDropDown() {
  return (
    <div id="collapse">
       <Collapse style={{background:'white'}} bordered={false} >
    <Panel header="Poll Setting">
      {text}
    </Panel>
  </Collapse>
    </div>
  )
}

export default CollapseDropDown;
