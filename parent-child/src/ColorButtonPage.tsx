interface ColorButtonProps{
    color: string;
    onSelectColor: (color: string) => void;
}

const ColorButton = ({color, onSelectColor}: ColorButtonProps) =>{
    return <button onClick={() => onSelectColor(color)}>{color}</button>
}

export default ColorButton;