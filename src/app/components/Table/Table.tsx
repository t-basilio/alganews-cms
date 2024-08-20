import { TableInstance } from "react-table";
import * as T from "./Table.styles";
import NoData from "../NoData/NoData";
import { transparentize } from "polished";

export default function Table<T extends Object>({
  instance,
}: {
  instance: TableInstance<T>;
}) {
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    instance;
  return (
    <>
      <T.Wrapper
        cellPadding={0}
        cellSpacing={0}
        {...getTableProps()}
      >
        <T.Heading>
          {headerGroups.map((headerGroup, i) => (
            <T.HeadingRow
              {...headerGroup.getHeaderGroupProps()}
              key={i}
            >
              {headerGroup.headers.map((column, i) => (
                <T.HeadingCell {...column.getHeaderProps()} key={i}>
                  {column.render("Header")}
                </T.HeadingCell>
              ))}
            </T.HeadingRow>
          ))}
        </T.Heading>
        <T.Body {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <T.BodyRow {...row.getRowProps()} key={i}>
                {row.cells.map((cell, i) => {
                  return (
                    <T.BodyCell {...cell.getCellProps()} key={i}>
                      {cell.render("Cell")}
                    </T.BodyCell>
                  );
                })}
              </T.BodyRow>
            );
          })}
        </T.Body>
      </T.Wrapper>
      {!rows.length && (
        <div style={{ backgroundColor: transparentize(0.95, "#274060") }}>
          <NoData height={360} />
        </div>
      )}
    </>
  );
}
