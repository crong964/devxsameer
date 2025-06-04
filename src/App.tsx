import { ArrowRightOutlined } from "@ant-design/icons"
import { com, mkt, stat } from "../data"
import Road from "./components/road"
import Navi from "./components/Navi/navi"
import Foot from "./components/Foot/foot"
function App() {
  return (
    <>
      <Navi />
      <div className="bg-siver w-full min-h-[80vh] flex max-lg:flex-col items-center justify-around">
        <div className=" flex flex-col space-y-2 max-lg:p-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">Lessons and Insights</h1>
          <span className="text-4xl lg:text-5xl text-link font-bold">            from 8 years          </span>
          <p className="text-text pt-2.5">
            where to grow your business as a photographer: site or social media?
          </p>
          <button className="flex cursor-pointer w-max bg-link duration-500 hover:shadow-hover-buttom text-[14px] text-white px-5.5 py-2.5 rounded-sm  space-x-2">
            Register
          </button>
        </div>
        <div>
          <img src="  /hero.png" alt="hero" srcSet="" />
        </div>
      </div>
      <div className="my-12.5 px-12.5">
        <h2 className="mt-2.5 text-primary text-[34px] text-center font-bold">Our Clients</h2>
        <p className="text-text text-center">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="mx-auto py-10 flex flex-wrap justify-around justify-center gap-10 lg:gap-20">
          {Array.from({ length: 7 })
            .map((v, i) => {
              return <img key={i} src={`/logo${i + 1}.png`} alt={`logo${i + 1}`} />
            })}
        </div>
        <Road></Road>
      </div>
      <div className="my-12.5 px-12.5 flex space-y-3.5 flex-col">
        <h1 className="text-4xl font-bold leading-10 text-center text-primary">
          Manage your entire community <br />
          in as single system
        </h1>
        <h6 className="text-lg text-text text-center">
          Who is Nextcent suitable for?
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-x-12.5 ">
          {com.map((v) => {
            return (
              <div className="w-62.5 hover:shadow-hover shadow-com duration-200 flex flex-col items-center p-2.5">
                <img className="pt-5" src={v.img} alt={v.title} />
                <div className="pt-5 font-bold text-center w-full text-primary text-[24px]">
                  {v.title}
                </div>
                <div className="pt-5 text-center text-text">
                  {v.con}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Road></Road>
      <div className="lg:m-12.5 flex max-md:flex-col items-center justify-around">
        <div className="lg:w-2/5 flex justify-center">
          <img src="/first(1).png" alt="first" />
        </div>
        <div className="p-10 flex-1">
          <h3 className="text-primary text-[24px] font-bold mb-5">The unseen of spending three years at Pixelgrade</h3>
          <p className="mb-5 text-text text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint
            enim temporibus ducimus impedit sed dolorem nihil tempore, neque
            tempora! Veniam esse incidunt sint sapiente culpa, vitae ea corrupti
            velit tempore aspernatur placeat obcaecati sed!
          </p>
          <button className="flex mb-5 bg-link duration-500 hover:shadow-hover-buttom text-[14px] fon rounded-sm text-white px-5 py-2.5 rounded-sm  space-x-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="p-7.5 flex max-xl:flex-col justify-center items-center  bg-siver">
        <div className="p-12.5 2xl:w-5/9">
          <div className="text-[24px] font-bold">Helping a local <br />
            <span className="text-link"> business reinvent itself</span></div>
          <div className="text-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt.</div>
        </div>
        <div className="2xl:w-3/9 flex max-w-125 flex-wrap items-center ">
          {stat.map((v) => {
            return (
              <div className=" flex w-max lg:w-1/2 items-center flex-wrap p-2 space-x-2.5 ">
                <img src={v.img} alt={v.type} />
                <div>
                  <div className="text-2xl font-bold">{v.sl}</div>
                  <div className="text-text">{v.type}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="lg:m-12.5 flex  max-md:flex-col justify-center items-center">
        <div className="lg:w-2/5 flex justify-center">
          <img src="/samesection/second.png" alt="second" />
        </div>
        <div className="p-10 flex-1 ">
          <h3 className="text-primary text-[24px] font-bold mb-5">
            How to design your site footer like we did</h3>
          <p className="mb-5 text-text text-[16px] leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sint
            enim temporibus ducimus impedit sed dolorem nihil tempore, neque
            tempora! Veniam esse incidunt sint sapiente culpa, vitae ea corrupti
            velit tempore aspernatur placeat obcaecati sed!
          </p>
          <button className="flex mb-5 bg-link duration-500 hover:shadow-hover-buttom text-[14px] fon rounded-sm text-white px-5 py-2.5 rounded-sm  space-x-2">
            Learn More
          </button>
        </div>
      </div>
      <Road></Road>
      <div className="p-10 flex justify-center flex-col">
        <h3 className="text-3xl text-center mb-2.5 font-bold text-primary">Caring is the new marketing</h3>
        <div className="flex justify-center  mb-2.5">
          <p className="lg:w-2/3 text-text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            similique mollitia veritatis quia asperiores nam aut nulla suscipit
            laudantium saepe nesciunt sunt deserunt aliquid delectus atque, qui,
            repudiandae recusandae. Explicabo minus rem repellendus sit fuga.
          </p>
        </div>
        <div className="m-7.5 flex flex-wrap justify-center gap-5">
          {mkt.map((v) => {
            return (
              <div className="w-65 h-65 relative text-[13px] ">
                <img src={v.img} alt="" className="object-cover w-full h-auto rounded-2xl" />
                <div className="absolute top-1/2 left-1/2 translate-y-2/5 -translate-x-1/2 text-[13px]
                 text-text text-center absolute p-2 rounded-sm bg-silver shadow-text w-[80%]">
                  <p className="leading-4 ">
                    {v.con}
                  </p>
                  <a href="#" className="flex text-link space-x-3 te justify-center">
                    <div>Readmore</div>
                    <ArrowRightOutlined style={{ fontSize: '13px', }} />
                  </a>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      <div className="p-10 flex flex-col bg-silver items-center">
        <h1 className="text-primary text-center text-[40px] font-bold mb-5">GoodBye! Tata! See Ya!</h1>
        <button className="flex cursor-pointer w-max duration-500 border-0 hover:shadow-hover-buttom bg-link text-[13px] text-white px-5.5 py-2.5 rounded-sm  space-x-2">
          <p>
            Get a Demo
          </p>
          <ArrowRightOutlined style={{ fontSize: '13px', }} />
        </button>
      </div>
      <Foot /> 
    </>
  )
}

export default App
