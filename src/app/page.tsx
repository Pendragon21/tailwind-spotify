import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  Repeat,
  SkipForward,
  LayoutList,
  Mic2,
  Laptop2,
  Volume,
  Maximize,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font font-semibold text-zinc-100"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font font-semibold text-zinc-100"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Sessão
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Instrumental
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              transcend your be
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              S2
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Boa Noite</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors "
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                width={100}
                height={100}
              />
              <strong>Placeholder</strong>

              <button className=" w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Feito para o Pendragon
          </h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">
                Lulu Santos, Ana Vitória, Sandy and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 2</strong>
              <span className="text-xs text-zinc-500">
                Ivan Torrent, Scott Buckley, Thomas bersejen and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 3</strong>
              <span className="text-xs text-zinc-500">
                Almir Sater, Oswaldo Montenegro, Marcus Viana and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 4</strong>
              <span className="text-xs text-zinc-500">
                Mariana Nolasco, A.D.Z, Hotelo and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 5</strong>
              <span className="text-xs text-zinc-500">
                Falamansa, Gabriel Elias, Mar.iana and more
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded flex flex-col hover:bg-white/20"
            >
              <Image
                src="/pkalbum.jpg"
                alt={"capa do album pink floyd"}
                className="w-full"
                width={60}
                height={60}
              />
              <strong className="font-semibold ">Daily Mix 6</strong>
              <span className="text-xs text-zinc-500">
                Marie Gabriella, Flávia Wenceslau, Ale de Carvalho and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/pkalbum.jpg"
            alt={"capa do album pink floyd"}
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <strong className="font-normal">Another Brick in The Wall</strong>
            <span className="text-xs text-zinc-400">Pink Floyd</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className=" w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500">1:45</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-500">3:58</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
