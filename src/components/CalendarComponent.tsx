import { Calendar, Select, Radio, Col, Row, Modal, Button } from "antd";
import { CalendarMode } from "antd/lib/calendar/generateCalendar";
import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CreateCalendarForm from "./CreateCalendarForm";

const CalendarComponent: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { calendars } = useTypedSelector((state) => state.calendarsReducer);

  function onPanelChange(date: moment.Moment, mode: CalendarMode) {
    console.log(date, mode);
  }

  return (
    <>
      <Calendar
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];
          const newCalendars: any[] = [];

          if (calendars) {
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
          }

          const current = value.clone();
          const localeData = value.localeData();
          const months: any[] = [];
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
                      console.log(selectedCalendar);
                    }}
                  >
                    {newCalendars}
                  </Select>
                </Col>

                <Col>
                  <Button
                    onClick={() => {
                      setModalVisible(true);
                    }}
                  >
                    Add new calendar?
                  </Button>
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
                    value={months[month]}
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
      <Modal
        title="Add new calendar"
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
        footer={null}
      >
        <CreateCalendarForm setModalVisible={setModalVisible} />
      </Modal>
    </>
  );
};

export default CalendarComponent;
