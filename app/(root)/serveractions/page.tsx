import FormComponent from '@/components/FormComponet';
import { revalidatePath } from 'next/cache';
declare global {
    var list: string[] | undefined;
  }

// Define the server action inside the file but don't export it as part of the page export
 const HandleSubmit = async (formData: FormData) => {
  "use server";

  const name = formData.get('name') as string;

  // Simulate server-side list handling
  if (name) {
    const currentList = globalThis.list || [];
    currentList.push(name);
    globalThis.list = currentList;
  }

  // Revalidate the current page to reflect the new list
  revalidatePath('/serveractions');
};

export default function Home() {
  // Retrieve the current list from the global state (this could come from a database in a real-world scenario)
  const list = globalThis.list || [];

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      <h1 className="text-2xl font-bold">Name List</h1>

      {/* Render the Client Component for the form */}
      <FormComponent/>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Submitted Names</h2>
        <ul className="list-disc list-inside">
          {list.length > 0 ? (
            list.map((name: string, index: number) => (
              <li key={index}>{name}</li>
            ))
          ) : (
            <p>No names submitted yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
}