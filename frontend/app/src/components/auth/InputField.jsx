export default function InputField({ text, placeholder, type, sizew }) {
  return (
    <div className={`flex flex-col text-left my-0 ${sizew}`}>
      <label className="my-2">{text}</label>
      <input
        className="bg-black/50 rounded-2xl px-8 py-3"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
