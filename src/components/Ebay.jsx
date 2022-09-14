import '../App.css';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar';
import Side from '../components/Side';
const EbayHompage = () => {
    return ( 
    <>
        <div className='navbar'>
        <Navbar/>
      </div>
      <div className='container'>

        <div className='cards'>
        <Cards title="Sneacker" price="$20" description="ENS smart Unisex Classic Sneaker"  />
        <Cards title="iphone" price="$50" description="iphone ro maxc"/>
        <Cards title="Sardine" price="$4" description="Costa sardine in vegetable Oil"/>
        <Cards title="Bag" price="$10" description="PU Fabric Causal Shoulder Bag"/>
        <Cards title="Sneacker" price="$20" description="ENS smart Unisex Classic Sneaker"/>
        <Cards title="Sneacker" price="$20" description="ENS smart Unisex Classic Sneaker"/>
        </div>

        <div className='side_container_column'>
          <Side title="Biggest Online Shop " description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam dolorum, praesentium voluptas officiis sunt
						eius id repudiandae ducimus aut et iure libero beatae
						debitis ullam corrupti pariatur. Doloremque,
						exercitationem totam!"/>
             <Side title="Shop and Get FREE Delivery! " description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam dolorum, praesentium voluptas officiis sunt
						eius id repudiandae ducimus aut et iure libero beatae
						debitis ullam corrupti pariatur. Doloremque,
						exercitationem totam!"/>

        </div>
      

      </div>
      </>
    
     );
}
 
export default EbayHompage;