export const initialBoard = {
  id: "board_123",
  columns: [
    {
      id: "column_todo",
      name: "To Do",
      cells: [
        { id: "cell_todo_1", col_id: "column_todo", count: 0, text: "" },
        { id: "cell_todo_2", col_id: "column_todo", count: 0, text: "" },
        { id: "cell_todo_3", col_id: "column_todo", count: 0, text: "" },
      ],
    },
    {
      id: "column_doing",
      name: "Doing",
      cells: [
        { id: "cell_doing_1", col_id: "column_doing", count: 0, text: "" },
        { id: "cell_doing_2", col_id: "column_doing", count: 0, text: "" },
        { id: "cell_doing_3", col_id: "column_doing", count: 0, text: "" },
      ],
    },
    {
      id: "column_done",
      name: "Done",
      cells: [
        { id: "cell_done_1", col_id: "column_done", count: 0, text: "" },
        { id: "cell_done_2", col_id: "column_done", count: 0, text: "" },
        { id: "cell_done_3", col_id: "column_done", count: 0, text: "" },
        { id: "cell_done_4", col_id: "column_done", count: 0, text: "" },
      ],
    },
    {
      id: "column_triage",
      name: "Triage",
      cells: [
        { id: "cell_triage_1", col_id: "column_triage", count: 0, text: "" },
        { id: "cell_triage_2", col_id: "column_triage", count: 0, text: "" },
        { id: "cell_triage_3", col_id: "column_triage", count: 0, text: "" },
      ],
    },
    {
      id: "column_review",
      name: "In Review",
      cells: [
        { id: "cell_review_1", col_id: "column_review", count: 0, text: "" },
        { id: "cell_review_2", col_id: "column_review", count: 0, text: "" },
        { id: "cell_review_3", col_id: "column_review", count: 0, text: "" },
      ],
    },
    // You can add more columns if needed
  ],
};
