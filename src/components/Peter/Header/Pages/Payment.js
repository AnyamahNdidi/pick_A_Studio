import React from "react";
import { Table } from "antd";
import styled from "styled-components";

const Payment = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "key",
      key: "age",
      width: 80,
    },
    {
      title: "Date of Generation",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 150,
    },

    {
      title: "Amount",
      dataIndex: "items",
      key: "address 1",
      ellipsis: true,
    },
    {
      title: "Order ID",
      dataIndex: "amount",
      key: "address 2",
      ellipsis: true,
    },
    {
      title: "Payment Gateway",
      dataIndex: "status",
      key: "address 3",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "dueDate",
      key: "address 4",
      ellipsis: true,
    },
    {
      title: "Action",
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
  ];

  return (
    <Container>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
};

export default Payment;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
