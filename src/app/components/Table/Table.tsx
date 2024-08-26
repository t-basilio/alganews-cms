import { TableInstance } from "react-table";
import * as T from "./Table.styles";
import NoData from "../NoData/NoData";
import { size, transparentize } from "polished";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

interface TableProps<T extends object> {
  instance: TableInstance<T>
  onPaginate?: (newPage: number) => any
}

export default function Table<T extends Object>({
  instance,
  onPaginate
}: TableProps<T>) {
  
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    pageCount,
    gotoPage,
    state: { pageIndex },
  } = instance

  useEffect(() => {
    onPaginate &&
      onPaginate(pageIndex)
  }, [pageIndex, onPaginate])

  return (
    <>
      <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
        <T.Heading>
          {headerGroups.map((headerGroup, i) => (
            <T.HeadingRow {...headerGroup.getHeaderGroupProps()} key={i}>
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

      <T.TablePagination>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={(page) => gotoPage(page.selected)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          nextLabel={<Icon path={mdiChevronRight} size={"16px"} />}
          previousLabel={<Icon path={mdiChevronLeft} size={"16px"} />}
        />
      </T.TablePagination>
    </>
  );
}
