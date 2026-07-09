import { Tooltip } from "antd";
import IconButton from "./IconButton"
import { PlusOutlined } from '@ant-design/icons';
import { AddNoteFn } from "../../types/notes";

const AddNoteButton = ({ addNote }: { addNote: AddNoteFn }) => {
  return (
    <Tooltip title="Add Note">
      <IconButton
        onClick={addNote}
        icon={<PlusOutlined />}
        shape="circle"
        type="default"
        size="large"
      />
    </Tooltip>
  )
}
export default AddNoteButton