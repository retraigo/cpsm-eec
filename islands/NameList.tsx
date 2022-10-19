import Names from "../assets/names.ts";

import { useState } from "preact/hooks";
import FormInput from "../components/FormInput.tsx";

export default function NameList() {
  const [name, setName] = useState("");
  return (
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-2 items-center">
        <label for="name-search" class="flex-grow-1 font-bold text-xl">
          Lookup name:
        </label>
        <FormInput
          id="name-search"
          type="text"
          placeholder="Enter your name here..."
          onInput={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <ul class="list-disc list-inside text-blue-800 text-lg space-y-6">
        {Names.filter((x) => x.toLowerCase().includes(name)).sort().map((
          x,
        ) => (
          <li>
            <a href={`/get/${Names.indexOf(x)}`}>{x}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
