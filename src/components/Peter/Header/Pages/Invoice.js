import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const Invoice = () => {
  const columns = [
    {
      title: "Vendor",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: "S/N",
      dataIndex: "key",
      key: "age",
      width: 80,
    },
    {
      title: "items",
      dataIndex: "items",
      key: "address 1",
      ellipsis: true,
    },
    {
      title: "Total Amount Due",
      dataIndex: "amount",
      key: "address 2",
      ellipsis: true,
    },
    {
      title: "Payment Status",
      dataIndex: "status",
      key: "address 3",
      ellipsis: true,
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "address 4",
      ellipsis: true,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Insignal",
      age: 63,
      items: "Studio Space",
      dueDate: "2021-09-05 00:00:00",
      amount: 63000,
      status: "unpaid",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "UK Pictures",
      age: 42,
      items: "Studio Equipment",
      dueDate: "2021-09-05 00:00:00",
      amount: 98000,
      status: "unpaid",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "The Fathers",
      age: 32,
      items: "Studio Space",
      dueDate: "2021-09-05 00:00:00",
      amount: 53000,
      status: "paid",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
};

export default Invoice;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
