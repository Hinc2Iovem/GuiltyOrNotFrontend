export default function DivBgColor({ bgColor }: { bgColor: string }) {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 z-[-999] ${bgColor}`}
    ></div>
  );
}
