import type { Size } from "@/interfaces"
import clsx from "clsx";

interface Props {
    selectedSize?: Size;
    availableSizes: Size[];

    onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: Props) => {
    return (
        <div className="my-5">
            <h3 className="font-semibold mb-4">Tallas disponibles</h3>
            <div className="flex">
                {
                    availableSizes.map(size => (
                        <button
                            key={size}
                            onClick={() => onSizeChanged(size)}
                            className={
                                clsx(
                                    "mx-2 hover:underline font-bold",
                                    {
                                        "underline": size === selectedSize
                                    }
                                )
                            }>
                            {size}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
