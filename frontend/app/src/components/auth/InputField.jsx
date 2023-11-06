export default function InputField({ text, placeholder, type }) {
  return (
    <div className="flex flex-col text-left my-1">
      <label className="my-2">{text}</label>
      <input
        className="border-t-3 border-l-3 border-r-3 border-[#FF5F56] bg-black rounded-2xl px-8 py-4"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
