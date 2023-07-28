import Image from "next/image";
import Link from "next/link";
import Subscribe from "./components/Subscribe";

const Home = () => {
  return (
    <div className="w-full">
      <section className="banner">
        <h1 className="font-imprima text-4xl w-4/12 font-bold text-leafy-green">
          The easiest way to eat healthy.
        </h1>
        <p className="desc font-imprima text-2xl w-5/12 text-black my-2">
          Good-for-you groceries, simple recipes, recommended just for you.
        </p>

        <button className="green_btn">Pick your meals</button>
      </section>
      <section className="page">
        <div className="flex justify-center mb-10">
          <h1 className="font-imprima font-normal text-6xl text-center w-3/12 text-white">
            Get inside our kitchen
          </h1>
        </div>

        <div className="flex justify-between px-44 py-5">
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <h1 className="w-max  font-imprima font-normal border-b-2">
              Local Cuisines
            </h1>
            <Image
              className="plate"
              src="/assets/images/beef.png"
              width={200}
              height={329}
            />
            <h2 className="w-max">Beef Bibimbap</h2>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <h1 className="w-max font-imprima font-normal">Veggie Dishes</h1>
            <Image
              className="plate"
              src="/assets/images/tofu.png"
              width={200}
              height={329}
            />
            <h2 className="w-max">Stir Fired Chili Tofu</h2>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <h1 className="w-max font-imprima font-normal">Seasonal Meals</h1>
            <Image
              className="plate"
              src="/assets/images/briyani.png"
              width={200}
              height={329}
            />
            <h2 className="w-max">Shrimp Briyani</h2>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="white_btn">Browse Our Menu </button>
        </div>
      </section>

      <section className="second_page">
        <div className="pt-16 w-4/12 flex flex-col justify-center">
          <p className="text-black">Customize your menu</p>
          <h1 className="font-imprima text-4xl  font-normal text-black">
            Meal Delivery for Any lifestyle
          </h1>
          <p className="desc font-imprima text-2xl text-black my-2">
            Choose a home meal delivery plan for your taste, or mix and match
            any of our weekly recipes
          </p>

          <button className="green_btn w-max">Find your meal Plan</button>
        </div>
        <div className="flex flex-col justify-center text-black w-auto">
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Paleo</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Vegetarian</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Diabetes-Friendly</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Pescatarian</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Gluten-Free</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Vegan</p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Keto </p>
          </Link>
          <Link href="/" className="flex gap-1">
            <Image
              src="/assets/images/arrow-right.svg"
              width={15}
              height={15}
            />
            <p>Vegetarian</p>
          </Link>
        </div>

        <div className="menu_images">
          <div className="row-span-2 self-center w-max">
            <Image
              className="menu"
              src="/assets/images/menu1.jpg"
              width={200}
              height={200}
              alt="menu"
            />
          </div>
          <div className="col-start-2 row-span-1">
            <Image
              className="menu"
              src="/assets/images/menu2.jpg"
              width={150}
              height={100}
            />
          </div>
          <div className="row-span-1">
            <Image
              className="menu"
              src="/assets/images/menu3.jpg"
              width={150}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className="works">
        <div className="flex justify-center mb-10">
          <h1 className="font-imprima font-normal text-3xl text-center w-3/12 text-black">
            How it Works
          </h1>
        </div>
        <div className="flex justify-between px-44 py-5">
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <Image
              className="icons"
              src="/assets/images/plate-wheat.svg"
              width={150}
              height={200}
            />
            <h1 className="w-max font-bold font-imprima">Pick Your Meals</h1>
            <p className="w-4/5 font-normal font-imprima">
              A new menu of 30+ dietitian-designed options every week.
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <Image
              className="icons"
              src="/assets/images/cook.svg"
              width={150}
              height={200}
            />
            <h1 className="w-max font-bold font-imprima">
              Cooked to Perfection
            </h1>
            <p className="w-4/5 font-normal font-imprima">
              Our gourmet chefs do the prep, so you can do you.
            </p>
          </div>
          <div className="grid grid-cols-1 justify-items-center gap-5">
            <Image
              className="icons"
              src="/assets/images/knife-with-plate.svg"
              width={150}
              height={200}
            />
            <h1 className="w-max font-bold font-imprima">Heat, Eat & Enjoy</h1>
            <p className="w-4/5 font-normal font-imprima">
              No prep. No mess. Our meals arrive ready to heat and eat in
              minutes.
            </p>
          </div>
        </div>
      </section>
      <Subscribe />
      <section className="h-auto bg-white text-black flex flex-col py-7">
        <div className="flex justify-center mb-10">
          <h1 className="font-imprima font-normal text-3xl text-center w-3/12 text-black">
            Check Out this speedy meals
          </h1>
        </div>
        <div className="flex justify-between px-24 py-5">
          <div className="grid grid-cols-1 gap-2">
            <Image
              className="icons"
              src="/assets/images/blog1.webp"
              width={300}
              height={200}
            />
            <h1 className="w-4/5 font-bold font-imprima">
              Moroccan braised chicken with Kalamata olives, lemon, and carrots
            </h1>
            <p className="w-4/5 text-sm font-imprima text-gray-600">
              Carb-Conscious, Dairy-Free, Gluten Free Friendly, Less Calories,
              Paleo, Protein Plus, Soy-Free
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Image
              className="icons"
              src="/assets/images/blog2.webp"
              width={300}
              height={200}
            />
            <h1 className="w-4/5 font-bold font-imprima">
              Seared romaine salad with spiced chickpeas, roasted peppers, and
              almonds
            </h1>
            <p className="w-4/5 text-sm font-imprima text-gray-600">
              Pescatarian, Soy-Free, Vegetarian
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Image
              className="icons"
              src="/assets/images/blog3.webp"
              width={300}
              height={200}
            />
            <h1 className="w-4/5 font-bold font-imprima">
              Moroccan braised chicken with Kalamata olives, lemon, and carrots
            </h1>
            <p className="w-4/5 text-sm font-imprima text-gray-600">
              No prep. No mess. Our meals arrive ready to heat and eat in
              minutes.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="green_btn">Browse Our Menu </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
