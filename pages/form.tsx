import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 15px;
  margin: 0;
`;

const Table = styled.div`
  border-bottom: solid 1px #999;
  border-left: solid 1px #999;
  border-right: solid 1px #999;
  margin: 10px;
`;

const Dl = styled.dl`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 50px;
  font-size: 17px;
`;

const Dd = styled.dd`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0;
  width: 150px;
  height: 100%;
  border-right: solid 1px #999;
`;

const DlHeader = styled(Dl)`
  font-weight: bold;
  border-top: solid 1px #999;
  background-color: #aaaaaa;
`;

const DdHeader = styled(Dd)``;

const DlContent = styled(Dl)<{ isGray: boolean }>`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 50px;
  font-size: 17px;
  border-top: solid 1px #999;
  background-color: ${({ isGray }) => isGray && '#cccccc'};
`;

const DdContent = styled(Dd)``;

const DATA = [
  {
    id: 1,
    name: 'aaa',
    price: 1000,
  },
  {
    id: 2,
    name: 'bbb',
    price: 1000,
  },
  {
    id: 3,
    name: 'ccc',
    price: 1000,
  },
  {
    id: 4,
    name: 'ddd',
    price: 1000,
  },
  {
    id: 5,
    name: 'eee',
    price: 1000,
  },
];

export const User: NextPage = () => {
  return (
    <>
      <Title>Form</Title>
      <Table>
        <div>
          <DlHeader>
            <DdHeader>{Object.keys(DATA[0])[0].toUpperCase()}</DdHeader>
            <DdHeader>{Object.keys(DATA[0])[1].toUpperCase()}</DdHeader>
            <DdHeader>{Object.keys(DATA[0])[2].toUpperCase()}</DdHeader>
          </DlHeader>
        </div>
        {DATA.map((data, index) => (
          <div key={data.id}>
            <DlContent isGray={index % 2 === 1}>
              <DdContent>{data.id.toString()}</DdContent>
              <DdContent>{data.name}</DdContent>
              <DdContent>{data.price.toString()}</DdContent>
            </DlContent>
          </div>
        ))}
      </Table>
    </>
  );
};

export default User;
