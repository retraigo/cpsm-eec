import { useState } from "preact/hooks";
import Names from "../../assets/names.ts";
import create from "../../assets/create.ts";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function GetCertificate(props: PageProps) {
  const id = Number(props.params.id);

  if (!id && id !== 0) return <div class="text-2xl">Not a particiant</div>;

  const name = Names[id];

  if (!name) return <div class="text-2xl">Not a particiant</div>;

  const cert = create(name);

  return (
    <div class="flex flex-col space-y-8 w-full items-center tracking-wide lg:mt-32">
      <Head>
        <title>Valedictory Function | FDP on Data Science Tools</title>
      </Head>

      <p class="font-semibold text-2xl lg:text-4xl uppercase">
        Certificate of Participation
      </p>
      <p class="font-bold text-xl lg:text-3xl">{name}</p>
      <a
        href={cert}
        target="_blank"
        class="flex flex-col items-center"
        download={`FDP_EEC_${id}_${name}.png`}
      >
        <img class="w-full lg:w-96" src={cert} />
        <small class="text-blue-400">(Click to download)</small>
      </a>
    </div>
  );
}
