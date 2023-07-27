import React from 'react';
import { Form, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import "./FormInput.css"

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    const regionData = getRegionData(values.region);
    // Dispatch the selected region to the Redux store
    dispatch({
      type: 'SET_SELECTED_REGION',
      payload: regionData,
    });
  };

  const getRegionData = (region) => {
    // Add your logic here to get the region data based on the selected region
    // For example, you can store the lat, lng, and zoom for each region and retrieve them here
    switch (region) {
      case 'us':
        return { lat: 37.0902, lng: -95.7129, zoom: 4 };
      case 'in':
        return { lat: 20.5937, lng: 78.9629, zoom: 5 };
      case 'uk':
        return { lat: 51.509865, lng: -0.118092, zoom: 6 };
      default:
        return { lat: 0, lng: 0, zoom: 2 };
    }
  };

  return (
    <Form onFinish={handleFormSubmit}>
      <Form.Item name="region" rules={[{ required: true, message: 'Please select a region!' }]}>
        <Select placeholder="Select a region">
          <Option value="us">United States</Option>
          <Option value="in">India</Option>
          <Option value="uk">United Kingdom</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Load
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInput;
