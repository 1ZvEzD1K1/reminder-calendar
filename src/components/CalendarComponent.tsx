import { Calendar, Select, Radio, Col, Row, Modal } from "antd";
import { CalendarMode } from "antd/lib/calendar/generateCalendar";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const CalendarComponent: FC = () => {
  const [modalVisible, setModalVisible] = useState();
  const { calendars } = useTypedSelector((state) => state.calendarsReducer);

  function onPanelChange(date: moment.Moment, mode: CalendarMode) {
    console.log(date, mode);
  }

  console.log(calendars)

  return (
    <>
      <Calendar
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          const newCalendars: any[] = [];

          calendars.forEach((calendar) => {
            newCalendars.push(
              <Select.Option
                value={calendar.id}
                className="month-item"
                key={`${calendar.id}`}
              >
                {calendar.title}
              </Select.Option>
            );
          });

          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <Select.Option
                value={index}
                className="month-item"
                key={`${index}`}
              >
                {months[index]}
              </Select.Option>
            );
          }
          const month = value.month();

          const year = value.year();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>
            );
          }
          return (
            <div style={{ padding: 8 }}>
              <Row gutter={8} justify="end">
                <Col>
                  <Select
                    dropdownMatchSelectWidth={false}
                    placeholder="Select calendar"
                    onChange={(selectedCalendar) => {
                      console.log( selectedCalendar );
                    }}
                  >
                    {newCalendars}
                  </Select>
                </Col>
                <Col>
                  <Radio.Group
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <Radio.Button value="month">Month</Radio.Button>
                    <Radio.Button value="year">Year</Radio.Button>
                  </Radio.Group>
                </Col>
                <Col>
                  <Select
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value.clone().year(Number(newYear));
                      onChange(now);
                    }}
                    value={String(year)}
                  >
                    {options}
                  </Select>
                </Col>
                <Col>
                  <Select
                    dropdownMatchSelectWidth={false}
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue = value.clone();
                      newValue.month(parseInt(selectedMonth, 10));
                      onChange(newValue);
                    }}
                  >
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
      <Modal title="Add new calendar"></Modal>
    </>
  );
};

export default CalendarComponent;
