import "./Category.css";

interface Props {
  // 카테고리 텍스트
  text: string;
  // 카테고리 텍스트 색상
  color: string;
}

export default function CategoryComponent({ text, color }: Props) {
  return (
    <div className="categoryText" style={{ color: color }}>
      {text}
    </div>
  );
}
