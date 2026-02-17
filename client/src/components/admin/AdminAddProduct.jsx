import AppInput from "@components/ui/AppInput";

function AdminAddProduct() {
  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-2">Додати новий товар</h4>
      <form className="flex flex-col gap-4">
        <AppInput
          label="Upload images"
          type="file"
          multiple
          className="file:bg-blue-500 file:text-white file:rounded-full file:border-none p-2"
          placeholder="Введіть заголовок товару"
        />
        <label
          htmlFor="category-select"
          className="flex flex-col gap-1 text-sm font-medium"
        >
          Category
          <select
            id="category-select"
            className="px-3 py-2 border border-text-main rounded-md"
          >
            <option value="">Виберіть категорію</option>
            <option value="furniture">Меблі</option>
          </select>
        </label>
        <label htmlFor="category-select" className="flex flex-col gap-1">
          Brand
          <select
            id="category-select"
            className="px-3 py-2 border border-text-main rounded-md"
          >
            <option value="">Виберіть виробника</option>
            <option value="furniture">Фятб</option>
          </select>
        </label>
        <AppInput label="Title" placeholder="Введіть заголовок товару" />
        <AppInput
          label="Description"
          type="textarea"
          placeholder="Введіть опис товару"
        />
        <AppInput
          label="Price"
          type="number"
          placeholder="Введіть ціну товару"
        />
      </form>
    </div>
  );
}

export default AdminAddProduct;
