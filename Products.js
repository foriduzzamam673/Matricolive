const products = [
 {name:"Industrial Machine",price:"$1200"},
 {name:"Smart Electronics",price:"$500"},
 {name:"Factory Equipment",price:"$3000"},
 {name:"AI Device",price:"$800"}
]

export default function Products(){
 return(
  <section className="products">
   <h2>Featured Products</h2>

   <div className="grid">
    {products.map((p,i)=>(
     <div className="card" key={i}>
      <div className="image"></div>
      <h3>{p.name}</h3>
      <p>{p.price}</p>
      <button>Purchase</button>
     </div>
    ))}
   </div>
  </section>
 )
}