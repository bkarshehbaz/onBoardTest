import React,{ useState, useEffect } from 'react';

import './App.css';
import axios, { AxiosResponse } from "axios";
import { Button,Layout, Form, Input,Checkbox,Row,Col,Divider,InputNumber } from 'antd';
const { Header, Content } = Layout;


interface FormResult extends AxiosResponse {
  result: number;
}

function App() {



  const [number1, setNumber1] = React.useState(0);

  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);


  const handleSubmit =  (formData:{num1:number,num2:number}) => {
  


    axios
    .post<FormResult>("http://localhost:5000/api/calculator",
    
        formData
     
    )
    .then((res)=>{
      setResult(res.data.result)
      console.log(res);
    })


  };

  return (
    <div className="App">
    <Layout >
      <Header><h1>
        Calculator</h1></Header>
    
      <Row justify="center" className="layout-white">
      <Col lg={14} xs={22} className="form-col">
      <Content >Enter the numbers</Content>
  

      <Form
      onFinish={handleSubmit}
     className="cal-form"
     name="basic"
     initialValues={{ remember: true }}
     // onFinish={onFinish}
     // onFinishFailed={onFinishFailed}
   >
     <Form.Item
       
       name="num1"
       
     >
       <InputNumber placeholder="number 1"  />
       {/* <Input  placeholder="number 1"/> */}
     </Form.Item>
     <Form.Item
       
       name="num2"

       
     >
       <InputNumber placeholder="number 2"  />
     </Form.Item>



     <Form.Item >
       <Button type="primary"   htmlType="submit">
         Submit
       </Button>
     </Form.Item>
     <Divider  className="ant-divider-red"/>
     <Content >Results</Content>
     <Form.Item
       
       name="results"
       
     >
       <Input    placeholder={result.toString()} />
     </Form.Item>
   </Form>
      </Col>
      

      </Row>
        

   
    </Layout>
    </div>
  );
}

export default App;
