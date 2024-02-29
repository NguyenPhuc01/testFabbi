/* eslint-disable react-hooks/exhaustive-deps */
import { Select } from "antd";
import React, { useEffect, useMemo } from "react";

export default function Step2(props: any) {
  const { setFormData, formData, data, setDataStep3 } = props;
  const handleChange = (value: string) => {
    setFormData({
      ...formData,
      selectedRestaurant: value,
    });
  };

  const listRestaurant = useMemo(() => {
    return data.filter((item: any) =>
      item.availableMeals.includes(formData.selectedMeal)
    );
  }, [data, formData.selectedMeal]);
  console.log("🚀 ~ listRestaurant ~ listRestaurant:", listRestaurant);

  useEffect(() => {
    setDataStep3(listRestaurant);
  }, [listRestaurant]);
  return (
    <div>
      <div style={{ margin: "12px 0px 24px 0px" }}>
        <span>Please Select a Restaurant</span>
      </div>
      <Select
        placeholder="_ _ _"
        style={{ minWidth: 200 }}
        onChange={handleChange}
        options={listRestaurant.map((el: any) => {
          return {
            value: `${el.restaurant}-${el.id}`,
            label: el.restaurant,
          };
        })}
      />
    </div>
  );
}
