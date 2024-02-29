import React, { useState } from "react";
import { Button, Col, Row, message } from "antd";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Step1 from "../Step/Step1";
import Step2 from "../Step/Step2";
import Step3 from "../Step/Step3";
import Review from "../Step/Review";
const data = [
  {
    id: 1,
    name: "Chicken Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 2,
    name: "Ham Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 3,
    name: "Cheese Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 4,
    name: "Fries",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 5,
    name: "Egg Muffin",
    restaurant: "Mc Donalds",
    availableMeals: ["breakfast"],
  },
  {
    id: 6,
    name: "Burrito",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 7,
    name: "Tacos",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 8,
    name: "Quesadilla",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 9,
    name: "Steak",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 10,
    name: "Yakitori",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 11,
    name: "Nankotsu",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 12,
    name: "Piman",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 13,
    name: "Vegan Bento",
    restaurant: "Vege Deli",
    availableMeals: ["lunch"],
  },
  {
    id: 14,
    name: "Coleslaw Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 16,
    name: "Veg. Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 17,
    name: "Fruit Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 18,
    name: "Corn Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 19,
    name: "Tomato Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 20,
    name: "Minestrone Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 21,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 22,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 23,
    name: "Hawaiian Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 24,
    name: "Seafood Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 25,
    name: "Deep Dish Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["dinner"],
  },
  {
    id: 26,
    name: "Chow Mein",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 27,
    name: "Mapo Tofu",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 28,
    name: "Kung Pao",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 29,
    name: "Wontons",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 30,
    name: "Garlic Bread",
    restaurant: "Olive Garden",
    availableMeals: ["breakfast", "lunch", "dinner"],
  },
  {
    id: 31,
    name: "Ravioli",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 32,
    name: "Rigatoni Spaghetti",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 33,
    name: "Fettucine Pasta",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
];
function MainLayout() {
  const [activeTab, setActiveTab] = useState<string>("1");
  const [formData, setFormData] = useState({
    selectedMeal: undefined as string | undefined,
    selectedRestaurant: undefined as string | undefined,
    selectedDish: [],
    numberOfPeople: 1,
    numberServings: 1,
  });
  const [dataStep3, setDataStep3] = useState<any>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const error = (content: string) => {
    messageApi.open({
      type: "error",
      content: content,
    });
  };
  console.log("🚀 ~ MainLayout ~ formData:", formData);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Step 1",
      children: <Step1 setFormData={setFormData} formData={formData} />,
    },
    {
      key: "2",
      label: "Step 2",
      children: (
        <Step2
          setFormData={setFormData}
          formData={formData}
          data={data}
          setDataStep3={setDataStep3}
        />
      ),
    },
    {
      key: "3",
      label: "Step 3",
      children: (
        <Step3
          setFormData={setFormData}
          formData={formData}
          data={dataStep3}
          error={error}
        />
      ),
    },
    {
      key: "4",
      label: "Review",
      children: <Review formData={formData} />,
    },
  ];

  const isDisabledBtnNex = () => {
    if (activeTab === "1" && formData.selectedMeal) {
      return false;
    }
    if (activeTab === "2" && formData.selectedRestaurant) {
      return false;
    }
    if (activeTab === "3" || activeTab === "4") {
      return false;
    }
    return true;
  };
  const handleBtnNextClick = () => {
    if (activeTab !== "3") {
      if (activeTab === "4") {
        console.log("data user order", {
          meal: formData.selectedMeal,
          NoOfPeople: formData.numberOfPeople,
          Restaurant: formData.selectedRestaurant,
          dishes: formData.selectedDish,
        });
      } else {
        setActiveTab(`${Number(activeTab) + 1}`);
      }
    } else {
      const totalServing = formData.selectedDish.reduce(
        (acc, item: any) => acc + item.serving,
        0
      );
      console.log("🚀 ~ handleBtnNextClick ~ totalServing:", totalServing);
      if (totalServing >= formData.numberOfPeople) {
        setActiveTab(`${Number(activeTab) + 1}`);
      } else {
        error("Tổng số món ăn phải lớn hơn hoặc bằng tổng số người");
      }
    }
  };
  const handleBackStep = () => {
    setActiveTab(`${Number(activeTab) - 1}`);
  };

  return (
    <div>
      {contextHolder}
      <Row data-testid="testRenderMainLayout-1">
        <Col md={6}></Col>
        <Col xs={24} md={12}>
          <div style={{ marginTop: "15vh" }}>
            <Tabs centered items={items} activeKey={activeTab} />
            <div
              style={{
                display: "flex",
                justifyContent: activeTab === "1" ? "flex-end" : "space-around",
                width: "100%",
                marginTop: "50px",
              }}
            >
              <Button
                style={{ display: activeTab === "1" ? "none" : "block" }}
                onClick={handleBackStep}
              >
                Previous
              </Button>

              <Button
                type="primary"
                disabled={isDisabledBtnNex()}
                onClick={handleBtnNextClick}
              >
                {activeTab === "4" ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  );
}

export default React.memo(MainLayout);
