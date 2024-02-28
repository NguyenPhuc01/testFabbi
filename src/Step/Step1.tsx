import { InputNumber, Select } from "antd";
import React from "react";

export default function Step1(props: any) {
  const { setFormData, formData } = props;
  const handleChange = (value: string) => {
    setFormData({
      ...formData,
      selectedMeal: value,
    });
  };
  const onChangeNumberPeople = (value: number | null) => {
    setFormData({
      ...formData,
      numberOfPeople: value || 1,
    });
  };
  return (
    <div>
      <div>
        <span>Please Select a meal</span>
      </div>
      <div style={{ marginTop: "16px" }}>
        <Select
          placeholder="_ _ _"
          style={{ minWidth: 200 }}
          onChange={handleChange}
          options={[
            { value: "breakfast", label: "Breakfast" },
            { value: "lunch", label: "Lunch" },
            { value: "dinner", label: "Dinner" },
          ]}
        />
      </div>
      <div style={{ marginTop: "16px" }}>
        <div>
          <span>Please Enter Number of people</span>
        </div>
        <div style={{ marginTop: "16px" }}>
          <InputNumber
            min={1}
            max={10}
            style={{ minWidth: 200 }}
            defaultValue={1}
            onChange={onChangeNumberPeople}
          />
        </div>
      </div>
    </div>
  );
}
