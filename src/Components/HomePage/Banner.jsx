
import HeroImg from '../../assets/hero_png1.png'
const Banner = () => {
    return (
       <div className="hero bg-base-200 p-10  max-w-6xl mx-auto rounded-2xl mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around ">
    <div>
        <img
      src={HeroImg}
      className="max-w-sm "
    />
    </div>
    
    <div className="space-y-5">
      <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
     
      <button className="btn btn-success text-white mt-4">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;