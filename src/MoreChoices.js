import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const MoreChoices = () => {

  return (
      <Form.List name="choices" label="Choices">
        {(fields, { add, remove }) => (
           <>
           <Form.Item style={{paddingLeft: '90px'}}>
                <Input style={{ width : '70%'}}/>
                </Form.Item>
                <Form.Item style={{paddingLeft: '90px'}}>
                <Input style={{ width : '70%'}}/>
                </Form.Item>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8}} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'first']}
                  fieldKey={[fieldKey, 'first']}
                  style={{paddingLeft: '90px'}}
                >
                  <Input style={{width:'80%'}}/>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>


              <Button type="primary" onClick={() => add()} icon={<PlusOutlined />}>
                More Choices
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
  );
};
export default MoreChoices;