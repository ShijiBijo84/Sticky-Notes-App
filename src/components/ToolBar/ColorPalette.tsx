import { Tooltip } from "antd";
import { Palette } from "lucide-react";
import { ColorPaletteProps } from "../../types/notes";

const ColorPalette = ({ selectedId, updateNote }: ColorPaletteProps) => {
    return (
        <Tooltip title={
            selectedId !== null
                ? "Change note color"
                : "Select a note first"
        }>
            <label
                className={`
            flex h-10 w-10 items-center justify-center rounded-full
            transition-all duration-200
            ${selectedId !== null
                        ? "cursor-pointer bg-gray-700 hover:bg-green-600"
                        : "cursor-not-allowed bg-gray-700 opacity-40"
                    }
        `}
            >
                <Palette
                    size={20}
                    className="text-white"
                />

                <input
                    type="color"
                    className="hidden"
                    disabled={selectedId === null}
                    onChange={(e) =>
                        selectedId !== null &&
                        updateNote(
                            selectedId,
                            "color",
                            e.target.value
                        )
                    }
                />

            </label>
        </Tooltip>
    )
}
export default ColorPalette;