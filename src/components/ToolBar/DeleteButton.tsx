
import { DeleteOutlined } from "@ant-design/icons";
import { DeleteButtonProps } from "../../types/notes";
import IconButton from "./IconButton";

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
        <IconButton
            icon={<DeleteOutlined className="text-[15px] text-white" />}
            type="text"
            shape="circle"
            size="large"
            onClick={onClick}
            className="bg-red-500! hover:bg-red-600! text-white!"
        />
    );
};

export default DeleteButton;