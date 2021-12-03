import { Layout, Menu, Form, Input, Button, Row, Space, message } from 'antd';
import { useState } from 'react';
import './App.css';

import Converter from './generator';
import ReactJson from 'react-json-view';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [json, setJson] = useState(null);

  const onFinish = (data) => {
    console.log(data);

    message.success('Generated JSON!');

    setJson(Converter(data.json));
  };

  return (
    <Layout className="layout">
      <Header>
        <h3 style={{ color: 'white' }}>MJML2JSON</h3>
        <Menu theme="dark" mode="horizontal"></Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <h1>Convert your MJML to our JSON:</h1>
          <Form name="mjml2json" onFinish={onFinish} requiredMark={false}>
            <Form.Item
              name="json"
              label="MJML"
              rules={[{ required: true, message: 'Please input your MJML!' }]}
            >
              <Input.TextArea
                id="text-area"
                autoSize={{ minRows: 10, maxRows: 20 }}
                placeholder="Paste in your MJML"
              />
            </Form.Item>
            <Space style={{ paddingBottom: '20px' }} align="center">
              <Form.Item style={{ padding: 0, margin: 0 }}>
                <Button type="primary" htmlType="submit">
                  Generate
                </Button>
              </Form.Item>
              {json ? (
                <Button
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      JSON.stringify(json, null, 2)
                    );

                    message.success('Copied to clipboard!');
                  }}
                  type="secondary"
                >
                  Copy JSON
                </Button>
              ) : (
                <div></div>
              )}
            </Space>
          </Form>

          {json ? <ReactJson name={null} src={json} /> : <div></div>}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Anton Wyrowski ©2021 Created for iPraktikum
      </Footer>
    </Layout>
  );
};

export default App;
