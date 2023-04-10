import React from "react";
import picture from "../assets/images/it.jpg";
import html from "../assets/images/html.jpg";
import flex from "../assets/images/react.jpg";

const About = () =>{
  return(
    <div className="about">
      <hr />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tempore. Voluptates nulla excepturi velit aut earum quibusdam consequatur a vero, vel, aperiam assumenda voluptatum! Dicta non porro doloremque vitae earum provident asperiores architecto reiciendis veritatis iure aut, voluptates, rerum sunt pariatur. Cum ab repellendus, veniam, quaerat accusantium dolorem reiciendis recusandae placeat, in accusamus soluta animi. Doloribus excepturi, rerum praesentium, cumque ad voluptas atque error dolorem maiores saepe blanditiis, vitae cupiditate non pariatur fuga! Vel quibusdam praesentium enim fugit temporibus quis asperiores, non commodi eveniet ut, optio autem nesciunt! Voluptatum, laborum modi? Perspiciatis, aliquam quod. Et exercitationem vitae accusamus impedit. Quidem sequi odit eos sed ipsum, est atque non maiores similique accusamus quos velit, perspiciatis, totam nostrum cupiditate quam nam vel incidunt placeat aliquam fugiat maxime quia deserunt! Labore, a cupiditate? Quia, reprehenderit. Sunt labore tenetur quidem, ut, similique praesentium voluptas cupiditate esse maxime error adipisci ducimus. Suscipit recusandae reiciendis, quod in sunt, neque, sequi amet commodi explicabo error quis veniam. Ea necessitatibus, expedita quos enim vel ad nihil laudantium repudiandae praesentium? Rerum, voluptas tempora mollitia veritatis iusto autem perferendis cum.</p>
       <img src={picture} alt="" />
      <div className="images">
      <div className="itpictures">
        <img src={html} alt="" />
      </div>
      <div className="reactpicture">
        <img src={flex} alt="" />
      </div>
      </div>
      <div className="paragraph">
        <div className="infor">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis voluptatibus voluptate odit debitis rerum maxime accusamus doloremque harum iure odio asperiores culpa expedita tempore, impedit eveniet numquam minus placeat pariatur libero? Tempore soluta necessitatibus voluptates!</p>
        </div>
        <div className="infor2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda alias unde, labore incidunt perferendis architecto esse deserunt saepe ullam aliquid rerum eos voluptatum quos nihil beatae nesciunt. Provident molestias optio velit, quisquam ab nemo expedita quasi. Cum fuga voluptatem, culpa quasi earum sequi repellendus?</p>
        </div>
      </div>
    </div>
  );
}

export default About;