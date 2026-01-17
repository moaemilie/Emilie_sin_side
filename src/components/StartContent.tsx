export default function StartContent() {
  return (
    <div className="
      relative 
      w-[60%]            /* Fixed: Used arbitrary value syntax */
      min-h-50 
      flex flex-col justify-center items-center 
      bg-white
      shadow-[0_-4px_0_0_#000,0_4px_0_0_#000,-4px_0_0_0_#000,4px_0_0_0_#000]      
      rounded-none 
      after:content-[''] after:absolute after:top-2 after:left-2 after:-z-10 after:w-full after:h-full 
      after:bg-gray-300 after:shadow-[0_-4px_0_0_#d1d5db,0_4px_0_0_#d1d5db,-4px_0_0_0_#d1d5db,4px_0_0_0_#d1d5db]
    ">
      <p className="text-3xl font-mono leading-relaxed text-center">
        Hei! Jeg heter Emilie. Jeg er en kreativ utvikler med en lidenskap for å
        skape.
      </p>
    </div>
  );
}
