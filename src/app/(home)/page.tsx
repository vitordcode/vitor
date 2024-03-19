"use client";
import Link from "next/link";
import { Button } from "../components/ui/button";

import Nefropapers from "../../../public/images/nefropapers.png";
import Empreart from "../../../public/images/empreart.png";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
interface ProjectsProps {
  id: number;
  name: string;
  image: string;
}

const Projects = [
  {
    id: 1,
    name: Nefropapers,
    image: Nefropapers,
  },
  {
    id: 2,
    name: Empreart,
    image: Empreart,
  },
];

export default function Home() {
  return (
    <div className="w-full h-screen px-6 lg:px-0 mx-auto relative">
      <div className="h-full w-full mx-auto">
        <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 place-content-center mx-auto h-full">
          <div className="flex flex-col justify-center col-start-2 md:col-start-1">
            <h1 className="font-semibold font-syne text-4xl lg:text-6xl tracking-tighter">
              Olá, eu sou Vitor<span className="text-primary">.</span>
              <br />
              Front-end Developer
            </h1>
            <p className="text-muted-foreground py-4 font-poppins font-light text-base lg:text-lg">
              Desenvolvendo soluções digitais únicas e eficientes, sempre com o
              objetivo de transformar ideias em realidade.
            </p>
            <div className="flex items-center gap-2 pt-4">
              <Link href="#">
                <Button className="text-foreground">Meus projetos</Button>
              </Link>
              <Link href="/">
                <Button variant={"link"} className="text-foreground">
                  Entrar em contato
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-start col-start-1 md:col-start-2 w-96 md:w-full">
            {/* <Image className='w-full' src={vitor} alt='Imagem de Vitor' /> */}
          </div>
        </div>
      </div>

      {/* <section className="max-w-6xl mx-auto">
        <h2 className="font-grotesk font-semibold text-2xl lg:text-3xl">
          Projetos mais recentes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3"></div>
      </section> */}

      <section className="h-[850px] w-full relative overflow-hidden">
        <div className="radial-gradient absolute bottom-0 left-0 right-0 h-[550px]" />
        <div className="w-full linear-gradient h-[2px] absolute bottom-0" />
        <h2 className="font-syne font-bold text-2xl lg:text-4xl text-center absolute bottom-40 left-1/2 transform -translate-x-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>
      </section>

      <section className="h-screen w-full">
        <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="w-full h-64 border border-border relative">
            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={200} count={250} factor={8} speed={2} />
              </Canvas>
            </div>
          </div>
          <div className="w-full h-64 border border-border relative">
            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={200} count={250} factor={8} speed={2} />
              </Canvas>
            </div>
          </div>
          <div className="w-full h-64 border border-border relative">
            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={200} count={250} factor={8} speed={2} />
              </Canvas>
            </div>
          </div>
          <div className="w-full h-64 border border-border relative">
            <div className="absolute inset-0 z-0">
              <Canvas>
                <Stars radius={200} count={250} factor={8} speed={2} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
