import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Center,
  Spinner,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import Card from "./Card";
import React, { useState, useEffect, useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import axios from "axios";
import DrawerTable from "./DrawerTable";

export default function AppTable({ props }) {
  const [dataTable, setDataTable] = useState([]);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const value_execpt = [
    "log_annual_inc",
    "dti",
    "fico",
    "days_with_cr_line",
    "revol_bal", 
    "revol_util",
    "inq_last_6mths",
    "delinq_2yrs",
    "pub_rec",
  ];
  const handleReload = () => {
    setReload(reload + 1);
  };

  // const fetchData = async () => {
  //   axios
  //     .get(
  //       window.link +
  //         (type === "waiting" ? "/admin/waiting-app" : "/admin/processed-app")
  //     )
  //     .then((response) => {
  //       setLoaded(true);
  //       // dataTable = response.data;
  //       setData(response.data);
  //       setDataTable(response.data);
  //     });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [type]);

  // useEffect(() => {
  //   fetchData();
  // }, [reload]);

  const [showDrawer, setShowDrawer] = useState(null);
  const { columnsData } = props;
  const columns = useMemo(() => props, [props]);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 50;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  const handleDrawer = (obj) => {
    setShowDrawer(obj);
  };

  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400", cursor: "pointer" },
    { bg: "whiteAlpha.50", cursor: "pointer" }
  );

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
        <Table {...getTableProps()} variant="simple" color="gray.500" mb="0px">
          <Thead>
            {headerGroups.map((headerGroup, index) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor={borderColor}
                  >
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <Tr
                  {...row.getRowProps()}
                  key={index}
                  _hover={bgHover}
                  backgroundColor={index % 2 == 0 && "#fcfafa"}
                >
                  {row.cells.map((cell, i) => {
                    let data = "";
                    if (cell.column.Header === "id") {
                      data = (
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      );
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={i}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                        onClick={() => {
                          handleDrawer(dataTable[index]);
                        }}
                      >
                        {data}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>

      {!loaded && (
        <Center pt={"20px"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
      {showDrawer && (
        // <DrawerTable
        //   handleReload={handleReload}
        //   showDrawer={showDrawer}
        //   setShowDrawer={setShowDrawer}
        // />
        <></>
      )}
    </Card>
  );
}
