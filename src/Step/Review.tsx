import React from "react";

export default function Review(props: any) {
  const { formData } = props;
  const tdStyle: any = {
    textAlign: "left",
    padding: "8px",
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "300px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <table style={{ width: "100%" }}>
            <tr>
              <td style={tdStyle}>Meal</td>
              <td style={tdStyle}>{formData.selectedMeal}</td>
            </tr>
            <tr>
              <td style={tdStyle}>No of People</td>
              <td style={tdStyle}>{formData.numberOfPeople}</td>
            </tr>
            <tr>
              <td style={tdStyle}>Restaurant</td>
              <td style={tdStyle}>
                {formData.selectedRestaurant.split("-")[0]}
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Dishes</td>
              <td style={tdStyle}>
                <div
                  style={{
                    minWidth: "100px",
                    minHeight: "100px",
                    border: "1px solid #000000",
                  }}
                >
                  {formData.selectedDish.length > 0 &&
                    formData.selectedDish.map((el: any) => {
                      return (
                        <>
                          <span style={{ padding: "4px" }}>{el.name}</span>{" "}
                          <br />
                        </>
                      );
                    })}
                </div>
              </td>
            </tr>
          </table>
          {/* <span>meal</span>
          <span>lanch</span> */}
        </div>
      </div>
    </div>
  );
}
