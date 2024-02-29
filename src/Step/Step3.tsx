import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { Button, InputNumber, Select } from "antd";
import React, { useState } from "react";

export default function Step3(props: any) {
  const { setFormData, formData, data } = props;
  const [numForms, setNumForms] = useState(1);
  const [selectedDishes, setSelectedDishes] = useState<
    { name: string; serving: number }[]
  >([]);

  const handleChangeDish = (value: string, formIndex: number) => {
    const updatedDishes = [...selectedDishes];

    if (formData.selectedDish[formIndex]) {
      selectedDishes[formIndex].name = value;
    } else {
      updatedDishes.push({
        name: value,
        serving: formData.numberServings || 1,
      });
    }
    setSelectedDishes(updatedDishes);

    setFormData({
      ...formData,
      selectedDish: updatedDishes,
    });
  };

  const onChangeNumberServing = (value: any, index: number) => {
    const updatedDishes = [...selectedDishes];

    if (formData.selectedDish[index]) {
      selectedDishes[index].serving = value;
    } else {
      updatedDishes.push({
        name: "",
        serving: value || 1,
      });
    }
    setSelectedDishes(updatedDishes);

    setFormData({
      ...formData,
      selectedDish: updatedDishes,
    });
  };
  const handleAddForm = () => {
    setNumForms((prevNumForms) => prevNumForms + 1);
  };

  const selectedDishNames = selectedDishes.map((dish) => dish.name);
  return (
    <div>
      {[...Array(numForms)].map((_, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            marginBottom: "40px",
          }}
        >
          <div>
            <div style={{ margin: "12px 0px 24px 0px" }}>
              <span>Please Select a Dish</span>
            </div>
            <div style={{ position: "relative" }}>
              <Select
                placeholder="_ _ _"
                style={{ minWidth: 200 }}
                onChange={(value) => handleChangeDish(value, index)}
                options={data
                  .filter((item: any) => !selectedDishNames.includes(item.name))
                  .map((el: any) => {
                    return {
                      value: el.name,
                      label: el.name,
                    };
                  })}
              />
            </div>
            <div
              style={{ display: "flex", position: "absolute", bottom: "-55px" }}
            >
              <Button
                shape="circle"
                onClick={handleAddForm}
                icon={<PlusOutlined style={{ fontSize: "16px" }} />}
              />
            </div>
          </div>
          <div>
            <div style={{ margin: "12px 0px 24px 0px" }}>
              <span>Please enter no of servings</span>
            </div>
            <InputNumber
              min={1}
              max={10}
              style={{ minWidth: 70 }}
              defaultValue={1}
              onChange={(value) => onChangeNumberServing(value, index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
