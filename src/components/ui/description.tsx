import { TextShimmer } from "./text-shimmer";

function Description(){
  return (
   <>
   <div className="pt-6 text-center text-black/80 dark:text-white/90">
               <h1 className="text-4xl font-bold">Nathan Durnerin</h1>
               <p className="text-lg">Cv & Book</p>
            </div>
            <TextShimmer className="text-xl font-medium flex justify-center mt-2">
               Dev Web & Graphiste
            </TextShimmer>
   </>
  );
}

export default Description ;