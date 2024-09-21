// app/FormComponent.tsx
"use client";

export default function FormComponent() {
  return (
    <form action="/submit" method="POST" className="space-y-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border border-gray-300 p-2 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
