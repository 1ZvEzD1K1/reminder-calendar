import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { CalendarActionCreators } from "../redux/redusers/calendars/calendarActionCreators";

type CreateCalendarFormProps = {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const CreateCalendarForm: FC<CreateCalendarFormProps> = ({
  setModalVisible,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitCreateCalendar = () => {
    dispatch(CalendarActionCreators.createCalendar(title, description));
    setTitle("");
    setDescription("");
    setModalVisible(false);
    console.log('test');
    console.log('test2');
  };

  return (
    <Form onFinish={submitCreateCalendar}>
      <Form.Item
        name="title"
        label="Title"
        tooltip="What title do you want for the calendar?"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        tooltip="What description do you want for the calendar?"
        rules={[
          {
            message: "Please input your title!",
          },
        ]}
      >
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create?
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCalendarForm;
