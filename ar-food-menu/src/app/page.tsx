import ARFoodMenu from "@/components/ARFoodMenu";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <ARFoodMenu menuItems={[
          { id: 1, name: 'Pizza', price: 10.99 },
          { id: 2, name: 'Burger', price: 8.99 },
          // Add more menu items as needed
        ]} />
      </div>
       
   
    </div>
  );
}
