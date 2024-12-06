interface Props {
  // 카테고리 텍스트
  text: string;
  // 카테고리 텍스트 색상
  color: string;
}

export default function CategoryComponent({ text, color }: Props) {
  return (
    <div className="p-8 font-SF_HambakSnow text-xl" style={{ color: color }}>
      {text}
    </div>
  );
}
