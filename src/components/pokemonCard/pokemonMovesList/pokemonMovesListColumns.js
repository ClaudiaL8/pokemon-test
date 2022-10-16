export const columns = [
  {
    field: "name",
    headerName: "Move Name",
    width: 100,
  },
  {
    field: "url",
    headerName: "URL",
    width: 300,
    getApplyQuickFilterFn: undefined,
  },
  {
    field: "delete",
    width: 75,
    sortable: false,
    disableColumnMenu: true,
  },
];
