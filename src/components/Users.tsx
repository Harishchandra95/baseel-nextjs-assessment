import { TABLE_COLUMNS } from "@/constant";
import { UserConext } from "@/context/contextAPI";
import { DataType } from "@/interface";
import Link from "next/link";
import React, { useContext } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #dddddd;
`;

const UsersListTable = styled.div`
  margin: 50px;
  overflow-x: auto;
`;

export const Users = () => {
  const columns: string[] = TABLE_COLUMNS;
  const { users } = useContext<{ users?: DataType[] }>(UserConext);
  if (!users) {
    return <>Loading...</>;
  }
  return (
    <>
      <UsersListTable>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <tbody>
            {users.map((row: DataType) => (
              <TableRow key={row.id}>
                <TableCell key={row.name}>
                  <Link key={row.name} href={`/user/${row.id}`}>
                    {row.name}
                  </Link>
                </TableCell>
                <TableCell key={row.email}>{row.email}</TableCell>
                <TableCell key={row.website}>{row.website}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </UsersListTable>
    </>
  );
};