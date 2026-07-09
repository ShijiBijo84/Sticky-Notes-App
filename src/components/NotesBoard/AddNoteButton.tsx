import { Tooltip } from "antd";
import IconButton from "../ui/Button"
import { PlusOutlined } from '@ant-design/icons';

type AddNoteProps = {
  addNote: () => void;
}

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