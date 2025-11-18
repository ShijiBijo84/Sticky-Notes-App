
import { DeleteButtonProps } from "../../types/notes"
import { DeleteOutlined } from '@ant-design/icons';
import IconButton from "../ui/Button";

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return <IconButton
        icon={<DeleteOutlined style={{ fontSize: '15px', color: '#08c' }} />}
        type="text"
        onClick={onClick}
    />

}
export default DeleteButton