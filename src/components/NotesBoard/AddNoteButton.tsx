import { Tooltip } from "antd";
import { AddNoteProps } from "../../types/notes"
import IconButton from "../ui/Button"
import { PlusOutlined } from '@ant-design/icons';

const AddNoteButton = ({ addNote }: AddNoteProps) => {
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